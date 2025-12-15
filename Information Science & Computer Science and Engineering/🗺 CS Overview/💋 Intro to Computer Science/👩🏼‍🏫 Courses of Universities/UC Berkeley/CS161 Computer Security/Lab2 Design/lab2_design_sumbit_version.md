## CS161 Lab2 Design Doc
The overall design of Lab 2 is as follows:
![|1000](Overall_Design.excalidraw.md)
### Data Structure
```go
// notation: --> uuid: value <-- this means an entry stored on DataStore/KeyStore

//============== KeyStore ==================
// uuid(username+"_DS"): Public_key_for_Digital_Signiture
// uuid(username+"_PKE"): Public_key_for_Encryption

// ============= DataStore =================
// uuid(user_name): {HMAC, user_meta}
type user_meta struct {
	User_salt byte
	User_pwst_hash byte
	User_prvt_key uuid.UUID
	Name2Meta uuid.UUID
}

// Name2Meta: {HMAC: {hashed(filename):name2meta;}}
type name2meta struct{
	File_meta_uuid uuid.UUID
	Rootkey_for_meta byte
}

// file_meta_uuid: {HMAC, file_meta}
type file_meta struct{
	Status // [active | outdated] 
	// if outdated, the first uuid in 'File_nodes_uuids' points to the new entry of file_meta on DataStore.
	// potential risks: maloray can change this to another uuid and encrypt it using user's public key. but snce maloray doesn't know the correct uuid, this won't matter. when the user try to access this new uuid, user would detect this is a tempared uuid. 

	Shared_from uuid.UUID // NIL if the current user is the owner
	Root_key_for_file_content byte //using this key derivating keys for current file's HMAC & Content
	
	File_sharing_list []uuid.UUID  // store the direct sharees
	// [user_name1: file_meta_uuid1; user_name2: file_meta_uuid2, ...]
	File_nodes_uuids []uuuid.UUID  // store the nodes of current file
	// [file_content_node1, file_content_node2, ...]
}

// file_content_node1: {HMAC, file_content}
// file_content_node2: {HMAC, file_content}
// ...
 ```

### Functions Designs (encryption methods are introduced in the diagram)
1. `InitUser(username string, password string) (userdataptr *User, err error)`
	1. Create `user_meta` and initialize it: randomly generate `User_salt`, computing `hash(salt, password)` and store it as `User_pwst_hash`. 
	2. Generate a public key pair, store the private key on DataStore while the public key on KeyStore. 
2. `GetUser(username string, password string) (userdataptr *User, err error)`
	1. Do following check first: ① `user_meta` integrity check ② user password check
	2. Create an instance for current logged in user (could be the same account on different devices)
3. `User.LoadFile(filename string) (content []byte, err error)`
	1. Compute the hashed value of `filename` as `hashed_filename`
	2. Look up `user_meta -> hashed_filename_to_file_uuid` and find the corresponding file meta uuid. Check file's integrity.
	3. Load file into current instance via `file_meta -> []File_nodes_uuids`
4. `User.StoreFile(filename string, content []byte) (err error)`
	1. Try to find the uuid of the file. If failed, create a new node on DataStore with relevant information. If succeeded, only need to overwrite the first file node and empty the other nodes stored on `file_meta -> []File_nodes_uuids`
5. `User.AppendToFile(filename string, content []byte) (err error)`
	1. Find the uuid of the file. Append a new node following information on `file_meta -> []File_nodes_uuids`
6. `User.CreateInvitation(filename string, recipientUsername string) (invitationPtr UUID, err error)` Assuming A is sharing file B to C:
	1. A find the uuid of `filename`. A create a new `file_meta` of it, assigning the same `Rootkey` in B for this new `file_meta -> Rootkey` so that this new `file_meta` can use the `Rootkey` to decrypt the corresponding file.
	2. A first use A's private key (`user_meta -> User_prvt_key`) encrypt `file_meta` and getting `ct_1`, then use C's public key (on KeyStore) encrypt `ct_1` and getting `ct_2`. A return the uuid of it.
7. `AcceptInvitation(senderUsername string, invitationPtr UUID, filename string) (err error)` Assuming A is sharing file B to C:
	1. C find the `ct_2` using uuid provided by A. C use C's private key decrypting `ct_2` and getting `ct_1`, then using A's public key to decrypt `ct_1` and getting the `file_meta`. C copy `file_meta` into a new node on DataStore and encrypt it using symmetric key derived from `Rootkey`.
8. `RevokeAccess(filename string, recipientUsername string) (err error)`  Assuming A is sharing file B to C, C is sharing file B to D, and now C is revoking access to D.
	1. A find the uuid of B via `A's user_meta -> []User_files_uuid`. Then A find the D's version of file meta of B, denoted as E: `B's file_meta -> []File_sharing_list`. From E, A can know the whole privilege tree of B. A delete all sub-trees of D, and update all other nodes on the privilege tree with new `file_meta -> Root_key` 

![|1000](Sharing_and_Revocation.excalidraw.md)
