UCB CS161 Project 2 Design - Cryptographic Secure File Sharing System


### Questions
are we allowed to use unlimited space on keystore/datastore? fragment memory?

Passwords can be any string with 0 or more characters (not necessarily alphanumeric, and could be the empty string). ??

Prior to having their access revoked, the Revoked User Adversary could have written down any values that they have previously seen. The Revoked User Adversary has a copy of your code running on their local computer, so they could inspect the code and learn the values of any variables that you computed.

how does Datastore adversary change the value on Datastore? directly change arbitary bits of data or using API?

alice create an invitation to bob
register user bob
bob accept the invitation

file name cannot be stored on anywhere in plaintext, because that will leak itself immediately. so the users must remember their each file's name, even under circumstances that a same file been shared to different users under different names.



### Design

#### High-Level Design

1. **Encryption**
   All data stored in the datastore is encrypted and secured with an HMAC or digital signature. There are three combinations of encryption and integrity check depending on different types of the data

   1. AES-CTR + SHA512

   2. AES-CTR + HMAC-SHA512 

   3. RSA for encryption/decryption and digital signature 

      

2. **File storing**

   1. `FileMeta` Node - store necessary data including where to read the file, decryption key, and check integrity key.

      Whenever a user creates a file, or is shared with a file, a `FileMeta` for that file in the context of its own namespace will be created.

   2. FileContent - just file content bytes

      might exist several fileContent nodes, due to the requirement *The bandwidth of the `AppendToFile()` operation MUST scale linearly with only the size of data being appended.*

      To address that issue, `FileUuidList` attribute in `FileMeta` Struct is used to track addresses of all the file content nodes. Whenever `AppendToFile()` func is called, and new data is appended to the existing file, a new fileContent Node is created and its address is added into `FileMeta.FileUuidList`. By concatenating the content of different fileContent nodes, the original file content can be recovered. 

   3. `UserFileMap` Struct - Each user will have a `UserFileMap` to record the necessary information (address of `fileMeta`, its keys) needed to access the `fileMeta` of their files, whether they are shared or owned.

   To conclude, in order to read files or store files, the process is 

   1. read `UserFileMap` 
   2. read/create corresponding `FileMeta` 
   3. read/create corresponding fileContent



1. **Sharing and Revocation**
   1. Sharing
      1. Due to the requirement that `CreateInvitation` func should send an invitation to sharee and its output should address of that invitation, the invitation should contain address of sharer's `FileMeta`, as well as corresponding decryption and HMAC keys

      2. After a sharee receives an invitation, they will construct their `FileMeta` for the shared file at the same address as the invitation, using the same encryption and HMAC keys as the sharer's `FileMeta`. 

         > The reason why we need to use the same keys are illustrated in revocation section.

      3. The `ShareRecord` map is designed to monitor and manage the specific users with whom a file has been shared. The `ShareRecord` map utilizes the recipient's username as its key, while the corresponding value stores essential information required to access the shared user's `FileMeta` (important for revocation). 

         The attribute `ShareList` in `FileMeta` points to `ShareRecord`.

      4. The attribute `status` in `FileMeta` will indicate whether the `FileMeta` is a shared fileMeta node (point to next `FileMeta` node), or is the true fileMeta node (point to the file content). Therefore, when read files, we still can go through `UserFileMap` -> `FileMeta` (maybe reading several) -> filecontent.

         

   2. Revocation

      The requirement assumes **revoked user adversary**. Each user records all of the request that their clients makes to Datastore and the corresponding responses, which means users will keep the credentials of shared files (address of the `fileMeta`, as well as keys). **"Revoked user adversary"** refers to the assumption that after a user has their access to a shared file revoked, it may become malicious, ignore your client implementation, and use the Datastore API directly (accessing / modifying your files with previously-stored credentials).

      1. to address that issue, new enc & HMAC keys for `FileMeta` and fileContent will be generated, and they will be moved to new addresses.

      2. The sharer can go through `FileMeta.ShareList` --> `ShareRecords` --> find and read sharee's `FileMeta` (since sharee's `FileMeta` use the same keys as sharer's)

         1. If the sharee is the one who has their access revoked, the sharer will delete his `FileMeta` node

         2. For the remaining sharees, the sharer will update the address and keys stored in the sharees' `FileMeta` with the latest ones, however, followed by encryption and integrity checks using the old keys. When sharees re-access the shared file, they can use the old keys saved in `UserFileMap` to decrypt their `FileMeta` since encryption and HMAC keys for their `FileMeta` do not change, and use keys saved in their `FileMeta` and address to find where currently sharer's `FileMeta` is stored and how to decrypt it. Additionally, they would replace the old keys in `UserFileMap` , and encrypt their `FileMeta` by the new ones to solve the key discrepancy.


#### Customized Data Structure

1. `User` 

   ```
   type User struct {
   	Username string
   	HashedPassword []byte
   	SourceKey      []byte
   	PKEEncKey      userlib.PKEEncKey
   	PKEDecKey      userlib.PKEDecKey
   	DSSignKey      userlib.DSSignKey
   	DSVerifyKey    userlib.DSVerifyKey
   }
   ```
   
   
   
2. `UserFileMapEntry` & `UserFileMap`

   - `UserFileMapEntry` stores necessary info to find `FileMeta`, decrypt it, and check integrity.
   - `UserFileMap`: is a map, each entry is `{"filename (string)": UserFileMapEntry}`

   ```
   type UserFileMapEntry struct {
   	Status       string // Own / Share
   	FileMetaUUID uuid.UUID
   	SymEncKey    []byte
   	HMACKey      []byte
   }
   ```

   - `Status` indicates whether the user owns that file or not, which is useful for sharing and revocation

   ```
   // pseudocode
   UserFileMap: map,  {"filename (string)": UserFileMapEntry}
   ```

   ```
   var userFileMapEntry UserFileMapEntry
   userFileMap := make(map[string]UserFileMapEntry)
   ```

   

3. `FileMeta` - store necessary data to find file, decrypt it, and check integrity.

 ```
   type FileMeta struct {
   	Owner        string
   	Status       string // FileMeta / Share
   	Filename     string
   	ShareList    uuid.UUID // point to ShareRecrods
   	FileUuidList []uuid.UUID
   	SymEncKey    []byte
   	HMACKey      []byte
   }
```

   

4. `ShareRecords` - a map to track sharing records for a specific file, each entry documents the essential information required to read the `fileMeta` of the shared file of the user who received the share

   ```
   // pseudocode
   shareMap {username : [uuid, shareFileMetaSymKey,shareFileMetaHMACKey]}
   ```

   ```
   var shareRecords [][]byte
   shareMap := make(map[string][][]byte)
   ```

   

#### Function Design

1. **InitUser** - Creates a new User struct and returns a pointer to it. 

   ```
   func InitUser(username string, password string) (userdataptr *User, err error)
   ```

   1. Generate two RSA key pairs, one pair for public encryption, the other for digital signature. Store public keys to the Keystore while add private keys to `User`
   2. Calculate the uuid (address) where to store `User` Struct, which is deterministic given `username`
   3. Generate a symEncKey used for encrypting `User` Struct in datastore, which is deterministic given password and username
   4. Store `User` to datastore (AES-CTR + SHA512)

   

2. **GetUser** - Obtains the User struct of a user who has already been initialized and returns a pointer to it

   ```
   func GetUser(username string, password string) (userdataptr *User, err error)
   ```

   1. Calculate UUID, symEncKey 
   2. Read `User` from datastore (decrypt + check integrity)

   

3. **User.StoreFile**- Given a `filename` in the personal namespace of the caller, this function persistently stores the given `content` for future retrieval using the same `filename`

   ```
   func (userdata *User) StoreFile(filename string, content []byte) (err error)
   ```

   1. Calculate deterministic `UserFileMap`'s' symEncKey and HMACKey, which is derived from `User.SourceKey` 

   2. Calculate deterministic `UserFileMap` UUID, and read `UserFileMap` from datastores
      - if `UserFileMap` exists, symDec it and check integrity -> get `UserFileMap` Struct
   
      - if `UserFileMap` does not exist, create an empty one
   
   4. Judge whether the file to be stored exists or not by checking the existence of the `userFileMapEntry` for that file
   
      - not exist -- first time to store the file
        1. Init `userFileMapEntry` for that file (generate `FileMetaUUID`, `FileMeta`'s `SymEncKey` & `HMACKey` & add it into `UserFileMaP`)
        2. Init `FileMeta` for that file (generate file `SymKey`, `HMACKey`, and others)
   
      - exist -- have stored the file before - read filecontent from several file nodes, and re-store it in one node
        1. read `FileMeta` from datastore (decrypt, check integrity)
        2. based on the `FileMeta.ShareList`, read all the contents of the file from datastore
        3. delete original files stored in datastore
   
   5. re-store `UserFileMap`, `FileMeta`, `FileContent` to datastore (symEnc + HMAC)
   
   
   
4. **User.LoadFile** - Given a `filename` in the personal namespace of the caller, this function downloads and returns the content of the corresponding file.

   ```
   func (userdata *User) LoadFile(filename string) (content []byte, err error)
   ```

   1. calculate deterministic `UserFileMap` symEncKey & HMACKey, UserFileMap UUID --> read `userFileMap` from datastore
   2. find userFileMapEntry for that file, and read `FileMeta` from datastore
   3. based on `fileMeta.FileUuidList`, iterate datastore to read the file content

   

5. **User.AppendToFile** - Given a `filename` in the personal namespace of the caller, this function appends the given `content` to the end of the corresponding file.

   ```
   func (userdata *User) AppendToFile(filename string, content []byte) error
   ```

   1. calculate deterministic `UserFileMap` encryption & HMAC key, deterministic UserFileMap UUID  --> read `UserFileMap` from datastore
   2. find `userFileMapEntry` for that file, and read `FileMeta` from datastore
   3. randomize a uuid for newly-generated file Node, add that uuid into `FileMeta.FileUuidList`
   4. store modified `FileMeta`, and append content in newly-generated fileContent Node to datastore

   

6. **User.CreateInvitation** - Given a `filename` in the personal namespace of the caller, this function creates a secure file share invitation that contains all of the information required for `recipientUsername` to take the actions detailed in Sharing and Revoking on the corresponding file. The returned invitationPtr must be the UUID storage key at which the secure file share invitation is stored in the Datastore.

   ```
   func (userdata *User) CreateInvitation(filename string, recipientUsername string) (invitationPtr uuid.UUID, err error)
   ```

   1. read `UserFileMap` & `UserFileMapEntry`

   2. read `FileMeta`

   3. Read `ShareRecord` map , and add one entry `{username : [uuid, shareFileMetaSymKey,shareFileMetaHMACKey]}`)
      - `uuid` is where the invitation node is stored in the datastore, it will later act as the sharee's `FileMeta` node
      - `shareFileMetaSymKey` and `shareFileMetaHMACKey` are necessary keys to later read sharee's `FileMeta` node 

   4. Generate invitation info `[UUID, SymKey, HMACKey]`
      - `UUID` is where the sharer's `FileMeta` of the shared file is located at datastore
      - `SymKey` and `HMACKey` are necessary keys to read sharer's `FileMeta` node of the shared file

   5. Store `invitation`, modified `ShareRecord` into datastore

      

7. **User.AcceptInvitation**

   ```
   func (userdata *User) AcceptInvitation(senderUsername string, invitationPtr uuid.UUID, filename string) error
   ```

   1. Read `Invitation` and Extract Info (uuid, symKey, HMACKey)
   2. Read `userFileMap`
   3. Add one `userFileMapEntry` in `userFileMap` (since one more new file though it is shared)
   4. Generate corresponding `fileMeta` node (share node), in the same place where `invitation` node is stored in
   5. store modified `userFileMap` back to datastore
   6. Store the `fileMeta` in where invitationPtr points to to datastore

   

8. **User.RevokeAccess** - Given a `filename` in the personal namespace of the caller, this function revokes access to the corresponding file from `recipientUsername` and any other users with whom `recipientUsername`has shared the file.

   ```
   func (userdata *User) RevokeAccess(filename string, recipientUsername string) error
   ```

   1. Read `userFileMap` & corresponding `userFileMapEntry`

   2. Read `fileMeta` and delete it from the datastore (Prevent a user with revoked access from using previously-stored UUIDs to determine the location of the file metadata.)

   3. Read `ShareRecord` (from `fileMeta.ShareList`)

   4. Read fileContent, and delete fileContent node (Prevent a user with revoked access from using previously-stored UUIDs to determine the location of the file.)

   5.  Generate a pair of symKey & hMACKey & UUID for `fileMeta` -> modify `userFileMapEntry` key part

       Generate a pair of symKey & hMACKey & UUID for fileContent -> modify `fileMeta` key part

   6. For revoked user, delete its `fileMeta` node, and delete its `sharingRecords` entry 

      For rest of shared users, access their sharee's `fileMeta` node for that file to change symKey & hMACKey

      - find their sharee's `fileMeta` node `shareRecord[username]`, which contains uuid, symKey, HMACKey
      - change the old uuid, symKey, HMACKey with newly-generated one
      - encrypt and generate HMAC with the old keys, since the keys stored in sharee's `userFileMapEntry` for that file are old. 
      - When sharee access the shared file, they always replace the keys stored in `userFileMapEntry` by the ones stored in `fileMeta`, and encrypt `fileMeta` by the keys stored in it.

   7. store `userFileMap`

   8. store `fileMeta` (encrypted by newly-generately symKey & hMACKey)

   9. store `shareRecord`

   10. store fileContnet (encrypted by newly-generately symKey & hMACKey)

