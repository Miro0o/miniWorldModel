# Harbor

[TOC]



## Res
🏠 https://goharbor.io

📂 [Harbor 2.6 Documentation](https://goharbor.io/docs/2.6.0/)


> VM Harbor 🆚 Docker's [Registry](https://docs.docker.com/registry/introduction/) :
>
> The Docker's Registry Service is a storage and content delivery system, holding named Docker images, available in different tagged versions.
>
> Registry and VM Harbor are conterparts. 
>
> Also check out [dockerhub](www.hub.docker.com) 🐳.

Harbor is an **open source registry** that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. Harbor, a **CNCF Graduated project,** delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud native compute platforms like Kubernetes and Docker.


### Related Topics



## Intro
### 🌈 Set up
#### Installation

> 📂 [Harbor Installation and Configuration](https://goharbor.io/docs/2.5.0/install-config/)

1. Make sure that your target host meets the [Harbor Installation Prerequisites](https://goharbor.io/docs/2.5.0/install-config/installation-prereqs/).
2. [Download the Harbor Installer](https://goharbor.io/docs/2.5.0/install-config/download-installer/)
3. [Configure HTTPS Access to Harbor](https://goharbor.io/docs/2.5.0/install-config/configure-https/)
4. [Configure the Harbor YML File](https://goharbor.io/docs/2.5.0/install-config/configure-yml-file/)
5. [Configure Enabling Internal TLS](https://goharbor.io/docs/2.5.0/install-config/configure-internal-tls/)
6. [Run the Installer Script](https://goharbor.io/docs/2.5.0/install-config/run-installer-script/) (run `./install.sh`)
#### Configuration
> 📂 [Configure the Harbor YAML File](https://goharbor.io/docs/1.10/install-config/configure-yml-file/)

1. Modify hostname. (localhost/ 127.0.0.1 is banned. Harbor runs on a different host from client.)

> ⚠️ Use `vde` to establish LAN. 
>
> Here since i use `lima` as my docker server (working in a vhost way), i can simply use the lima instance as the host for Harbor. The problem is how to set the network where the physical host and virtual hosts works like a LAN.
>
> Inspired by tips from official throubleshootings page, i use `vde` and `vde_vmnet` to allow outside guest visit. See specifics of [The machanism of vde working.](../Docker/Lima.md) 
>
> 👀 See Troubleshootings in [Lima](../Docker/Lima.md) for further info. 

2. Modify http port number. (Optional)

- I go with `8082`

3. Inactivate https section. (Not needed at the time being)

4. check out password for default user. (Harbor12345)

5. Modify `data_volume` path. (Optional)

> The location on the target host in which to store Harbor's data. This data remains unchanged even when Harbor's containers are removed and/or recreated. You can optionally configure external storage, in which case disable this option and enable `storage_service`. The default is `/data`.
>
> By default Harbor uses local storage for the registry, but you can optionally configure the `storage_service` setting so that Harbor uses external storage. For information about how to configure the storage backend of a registry for different storage providers, see the [Registry Configuration Reference](https://docs.docker.com/registry/configuration/#storage) in the Docker documentation. 

Everytime `Harbor.yml` file modified, run `./prepare` . 

‼️MAKE SURE that lima has write access to the Harbor's location.  👀 See Troubleshootings: Attempting to mount a writable directory under a read-only directory doesn't work#873 for further info. 
#### Lifecycle Management
> 📂 [Reconfigure Harbor and Manage the Harbor Lifecycle](https://goharbor.io/docs/2.2.0/install-config/reconfigure-manage-lifecycle/)

You use `docker-compose` to manage the lifecycle of Harbor. This topic provides some useful commands. You must run the commands in the directory in which `docker-compose.yml` is located.

See the [Docker Compose command-line reference](https://docs.docker.com/compose/reference/)for more information about `docker-compose`.
#### Https Access

> 📂 [Configure HTTPS Access to Harbor](https://goharbor.io/docs/2.5.0/install-config/configure-https/) 
>
>  👍 [IP地址自签名证书](https://www.cnblogs.com/dirigent/p/15246731.html) 

1. Have a self-certificated CA
   1. Generate a CA certificate private key. `ca.key`
   2. Use private key to generate CA certificate. `ca.crt`

2. Have a CA certificated public-private key pair for host server. 
   1. Generate a private key for server. `harbor.key`
   2. Generate a certificate signing request(CSR) by this private key. `harbor.csr`
   3. Use private key + CSR + v3 extension file under specified configuration fule to generate a public key. `harbor.crt`

3. Assign Certificate to Harbor and Docker
   1. Harbor: `/data/cert/`
   2. Docker: `~/.docker/certs.d/ip[:port]`

4. Configure Harbor for https service
   1. `harbor.yml`

5. Reload Docker service & Harbor service
   1. Docker:
      1. `sudo launchctl restart docker` (macOS)
      2. `sudo systemctl restart docker` (Ubuntu)
   2. Harbor:
      1. `sudo ./prepare`
      2. `sudo docker compose down -v`
      3. `sudo docker compose up -d`

6. Trust Certificate on a OS level (optional, for harbor host)
   1. `cat intermediate-certificate.pem >> yourdomain.com.crt`
   2. ```shell
      cp yourdomain.com.crt /usr/local/share/ca-certificates/yourdomain.com.crt 
      update-ca-certificates
      ```


```shell
# Generate CA key pire
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 208 -key ca.key -out ca.crt
 
# Generate Server key pire
openssl genrsa -out server.key 4096 
openssl req -new -days 208 -key server.key -out server.csr -config openssl.cnf 

# Generate site certificate
openssl x509 -days 208 -req -sha256 -extfile v3.ext -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt

```
##### Other Explanations...
👍 **[数字签名与HTTPS详解](https://www.cnblogs.com/rinack/p/10743355.html)** (真的很详细)

1、服务端人员使用RSA算法生成两个密钥，一个用来加密一个用来解密。将负责加密的那个密钥公布出去，所以我们称之为公钥(Public Key)，而用来解密的那个密钥，不能对外公布，只有服务端持有，所以我们称之为私钥(Private Key)。服务端在将Public Key进行分发证书之前需要向CA机构申请给将要分发的公钥进行数字签名。(服务器公钥负责加密，服务器私钥负责解密)

2、生成数字签名公钥证书：对于CA机构来说，其也有两个密钥，我们暂且称之为CA私钥和CA公钥。CA机构将服务端的Public Key作为输入参数将其转换为一个特有的Hash值。然后使用CA私钥将这个Hash值进行加密处理，并与服务端的Public Key绑定在一起，生成数字签名证书。其实**数字签名证书的本质就是服务端的公钥+CA私钥加密的Hash值**。(CA私钥负责签名，CA公钥负责验证)

3、服务器获取到这个已经含有数字签名并带有公钥的证书，将该证书发送给客户端。当客户端收到该公钥数字证书后，会验证其有效性。大部分客户端都会预装CA机构的公钥，也就是CA公钥。客户端使用CA公钥对数字证书上的签名进行验证，这个验证的过程就是使用CA公钥对CA私钥加密的内容进行解密，将解密后的内容与服务端的Public Key所生成的Hash值进行匹配，如果匹配成功，则说明该证书就是相应的服务端发过来的。否则就是非法证书。

**[How to create a https server on localhost](https://stackoverflow.com/questions/43677457/how-to-create-a-https-server-on-localhost)** 

You need to do two things: 
- generate a self-signed SSL certificate and 
- add it to the trusted certificates

Managed to do this on a macOS like so:
- In order to **generate the SSL certificate**, run the follosing command in a terminal (according to the [instructions from Let's Encrypt](https://letsencrypt.org/docs/certificates-for-localhost/)):

```shell
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

- And to **add the certificate to the trusted certificates**, ran the following command (suggested on [this blog](https://derflounder.wordpress.com/2011/03/13/adding-new-trusted-root-certificates-to-system-keychain/)):

```shell
sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" "/private/tmp/certs/certname.cer"
```
#### Now you are ready to enjoy VM Harbor !
Pertaining VM Harbor usages go to [Harbor 2.6 Documentation](https://goharbor.io/docs/2.6.0/).
#### 🔗 Refs
[Harbor： Harbor卸载安装及基本使用教程]:https://blog.csdn.net/qq_42428264/article/details/120641414
[failed to login harbor dashboard #13630]:https://github.com/goharbor/harbor/issues/13630
[Harbor安装与配置及Https（包教包会）]:https://blog.csdn.net/JENREY/article/details/123360248
[Troubleshooting Harbor Installation]:https://goharbor.io/docs/1.10/install-config/troubleshoot-installation/#https



## Ref