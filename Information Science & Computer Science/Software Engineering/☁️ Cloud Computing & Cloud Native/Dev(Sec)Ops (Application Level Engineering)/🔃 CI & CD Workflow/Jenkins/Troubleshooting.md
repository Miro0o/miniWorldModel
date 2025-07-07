# Troubleshooting

[TOC]



## 👉 [Jenkins publish over ssh shows error "jenkins.plugins.publish_over.BapPublisherException: Failed to add SSH key."](https://stackoverflow.com/questions/56537762/jenkins-publish-over-ssh-shows-error-jenkins-plugins-publish-over-bappublishere)

It seems that MacOS uses a newer technology to generate the keys.

Generating the Key with `-m PEM` solved the issue for me. 

Use the [old PEM format](https://stackoverflow.com/a/53645530/6309) (not the new OpenSSH one)

```
ssh-keygen -t rsa -C "jenkins" -m PEM -P "" -f /var/lib/jenkins/.ssh/id_rsa
```

For an SSH session to be opened, the public key need to be copied over to the remote server, in `/home/ubuntu/.ssh/authorized_keys`.
If you have the remote ubuntu user password, you can use the [ssh-copy-id command](https://askubuntu.com/a/1009687/5470), as [seen here](https://www.ssh.com/ssh/copy-id#sec-Copy-the-key-to-a-server):

```
ssh-copy-id -i /var/lib/jenkins/.ssh/id_rsa ubuntu@remoteserverip
```

Then you can test, as `sudo su jenkins`, the connection with `ssh -Tv ubuntu@remoteserverip`



## 👉 [Git Parameter plugin](https://plugins.jenkins.io/git-parameter/#plugin-content-project-configuration)

How to set the parameter ???? Fk jenkins. 





## Ref

[jenkins自动化部署：前后端分离](https://blog.csdn.net/qq_34775355/article/details/112209634)

