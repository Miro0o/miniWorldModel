# CS161 Lab2 Design Doc

[TOC]



## Overview
are we allowed to use unlimited space on keystore/datastore? fragment memory?

Passwords can be any string with 0 or more characters (not necessarily alphanumeric, and could be the empty string). ??

Prior to having their access revoked, the Revoked User Adversary could have written down any values that they have previously seen. The Revoked User Adversary has a copy of your code running on their local computer, so they could inspect the code and learn the values of any variables that you computed.

how does Datastore adversary change the value on Datastore? directly change arbitary bits of data or using API?

alice create an invitation to bob
register user bob
bob accept the invitation

file name cannot be stored on anywhere in plaintext, because that will leak itself immediately. so the users must remember their each file's name, even under circumstances that a same file been shared to different users under different names.



## Users And User Authentication
```go
InitUser(username string, password string) (userdataptr *User, err error)
GetUser(username string, password string) (userdataptr *User, err error)
```


### Function Design
```go
InitUser(username string, password string) (userdataptr *User, err error)
{
	// user authentication check
	user_uuid = uuid.FromBytes(username)
	check_if_username_exist()

	// initialize user_meta
	user_meta.User_salt = RandomBytes(64)
	user_meta.User_pwst_hash = Argon2Key(password, user_meta.User_salt, 64)
	
	user_meta.prvt_key_session, pblc_key_session, err = PKEKeyGen()
	userlib.KeystoreSet(user_uuid+'_session', pblc_key_session)
	user_meta.prvt_key_DS, pblc_key_DS, err = DSKeyGen()
	userlib.KeystoreSet(user_uuid+'_DS', pblc_key_DS)

	user_meta.User_rootkey = Argon2Kwy(password, user_meta.User_salt, 64)
	
	userlib.DatastoreSet(user_uuid, user_meta)
}



GetUser(username string, password string) (userdataptr *User, err error)
{
	// user authentication check
	user_uuid = uuid.FromBytes(username)
	check_if_username_exist()
	
	user_meta = userlib.DatastoreGet(user_uuid)
	current_password_salt = Argon2Key(password, user_meta.User_salt, 64)
	
	if (HMACEqual(user_meta.User_pwst_hash, current_password_salt)){
		// authentication passed. Now creating session
		prvt_key_session, pke_pblc_key, err = PKEKeyGen()
		userlib.KeystoreSet(user_uuid+'_session', pke_pblc_key)
	}
	else {
		// authentication failed
	}
	
}
```


### Data Structure
```go
// on DataStore:
// uuid(user_name): {HMAC, user_meta}
user_meta struct {
	// store on server side
	User_name
	User_files_uuid
	User_privs_uuid
	User_salt
	User_pwst_hash
	User_rootkey
	Session_num  //can i do this?

	// store on local side
	prvt_key_session // user_uuid+'_session': pblc_key_session
	prvt_key_DS // user_uuid+'_DS': pblc_key_DS
	current_session_id
}

// on DataStore
// User_files_uuid: (act as a namespace)
{HMAC, {hashed_file_name1: file_uuid1; hashed_file_name2: file_uuid2}}

// on DataStore
// User_privs_uuid:
{HMAC, {user_uuid1:file_uuid1; user_uuid1:file_uuid2; user_uuid2:file_uuid2}

// on KeyStore
// uuid(username+"_session"): Public_key_for_User_Session

// on KeyStore
// uuid(username+"_DS"): Public_key_for_Digital_Signiture
```

every times an user operates on keystore/datastore, do authentication check (check pswd) and session check (check pvt key). This is to prevent the adversary running arbitrary code directly from source code.



## File Operations
```go
User.StoreFile(filename string, content []byte) (err error)

User.LoadFile(filename string) (content []byte, err error)

User.AppendToFile(filename string, content []byte) (err error)


// Rootkey = Argon2Key(user_password, user_meta.User_salt, 64)
// File_content_key = HashKDF(Rootkey, File_uuid+'_content')
// File_HMAC_key = HashKDF(Rootkey, File_uuid+'_HMAC')
```


### Function Design
```go
User.LoadFile(filename string) (content []byte, err error)
{
	// user authentication check
	user_uuid = uuid.FromBytes(username)
	check_user()
	check_session()

	// fetch file & do integrity check
	user_meta = userlib.DatastoreGet(user_uuid)
	user_files = user_meta.User_files_uuid
	file_uuid = File_uuid_lookup(Hash(filename+user_meta.User_salt), user_files)

	file_HMAC_key.= HashKDF(user_meta.User_rootkey, file_uuid+'_HMAC')

	// take from file nodes
	for files in File_nodes_uuids:
		file = userlib.datastoreGet(file_uuid)
		if(HMACEqual(file.HMAC, HMACEval(file_HMAC_key, file.content)))
		{
			file_content_key = HashKDF(user_meta.User_rootkey, file_uuid+'_content')
			file_plain_text = SymDec(file_content_key, file_cipher_text)
		}	
}


User.StoreFile(filename string, content []byte) (err error)
{
	// user authentication
	user_uuid = uuid.FromBytes(username)
	check_user()
	check_session()

	// no need to check integrity of target file -- asumming such case would not happen -- just rewrite it!
	// if there is no file, create a new node
	// if there is already a file, only take the head node from current file and rewrite it. update file nodes to contain only new file's uuid. (other uuids are not maintained, but still in the datastore)
	
	uselib.DatastoreSet()

}


User.AppendToFile(filename string, content []byte) (err error)
{
	// user authentication
	user_uuid = uuid.FromBytes(username)
	check_user()
	check_session()

	// no need to check integrity of target file -- asumming such case would not happen -- just append to it!
	// create a new node, update the File_node_uuids
	uselib.DatastoreSet()
}
```


### Data Structure
```go
// file_meta
// file_meta_uuid: {HMAC, file_meta}
file_meta struct{
	From

	// File_perm_uuids ?
	Root_key
	// file_HMAC_key = HashKDF(user_meta.User_rootkey, file_uuid+'_HMAC')
	// file_content_key = HashKDF(user_meta.User_rootkey, file_uuid+'_content')
	
	File_sharing_list [file_meta_1, file_meta_2, ...]
	// only store the direct sharee

	File_nodes_uuids [file_content_node1, file_content_node2, ..]
}

// file contents: (File_nodes_uuids)
// file_content_node1: {HMAC, file_content}
// file_content_node2: {HMAC, file_content}
```



## Sharing and Revocation
```go
User.CreateInvitation(filename string, recipientUsername string) (invitationPtr UUID, err error)

AcceptInvitation(senderUsername string, invitationPtr UUID, filename string) (err error)

RevokeAccess(filename string, recipientUsername string) (err error)
```


### Function Design
```go
User.CreateInvitation(filename string, recipientUsername string) (invitationPtr UUID, err error)
{
	// user authentication
	user_uuid = uuid.FromBytes(username)
	check_user()
	check_session()

	// check if current user has loaded its user_meta 
	// look up for the uuid of the file
	user_meta = userlib.DatastoreGet(user_uuid)
	user_files = user_meta.User_files_uuid
	file_uuid = File_uuid_lookup(Hash(filename+user_meta.User_salt_hash), user_files)

	// initialize invitation
	invitationPtr = uuid.FromBytes(RandomBytes(16))
	
	invitation.Root_key = user_meta.User_rootkey

	// bidirectional signiture
	recip_pblc_key_DS = userlib.KeyStoreGet(uuid(recipientUsername+'_DS'))
	invi_ct_1 = PKEEnc(recip_pblc_key_DS, invitation)
	invi_ct_2 = PKEEnc(user_meta.prvt_key_DS, invi_ct_1)

	// store invitation on Datastore
	userlib.DatastoreSet(invitationPtr, invi_ct_2)
}

AcceptInvitation(senderUsername string, invitationPtr UUID, filename string) (err error)

RevokeAccess(filename string, recipientUsername string) (err error)
```


### Data Structure
```go
// on KeyStore:
// uuid(username+"_DS"): Public_key_for_Digital_Signiture

```


