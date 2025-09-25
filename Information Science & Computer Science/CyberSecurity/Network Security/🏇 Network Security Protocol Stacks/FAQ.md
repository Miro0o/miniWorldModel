# FAQ

[TOC]



## 👉 Access Https on Localhost
#https #localhost

This is really a good question and there are actually A LOT of solusion online. Here i only list a few: 

### 👍 IP地址自签名证书
> 🔗 https://www.cnblogs.com/dirigent/p/15246731.html

1. Have a self-certificated CA
   1. Generate a CA certificate private key. `ca.key`
   2. Use private key to generate CA certificate. `ca.crt`

2. Have a CA certificated public-private key pair for host server. 
   1. Generate a private key for server. `server.key`
   2. Generate a certificate signing request(CSR) by this private key. `server.csr`
   3. Use private key + CSR + v3 extension file under specified configuration fule to generate a public key. `server.crt`

3. Assign Certificate to targeted service. (Skipped. Depending on different scenarios.)

4. Configure for https service (Skippd. depending on different scenarios.)

5. Trust Certificate on a OS level (optional)
   1. `cat intermediate-certificate.pem >> yourdomain.com.crt`

```shell
cp yourdomain.com.crt /usr/local/share/ca-certificates/yourdomain.com.crt 
update-ca-certificates
```

One Runner:
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

#### Other Explanations...
1️⃣ **[数字签名与HTTPS详解](https://www.cnblogs.com/rinack/p/10743355.html)** (真的很详细)

1、服务端人员使用RSA算法生成两个密钥，一个用来加密一个用来解密。将负责加密的那个密钥公布出去，所以我们称之为公钥(Public Key)，而用来解密的那个密钥，不能对外公布，只有服务端持有，所以我们称之为私钥(Private Key)。服务端在将Public Key进行分发证书之前需要向CA机构申请给将要分发的公钥进行数字签名。(服务器公钥负责加密，服务器私钥负责解密)

2、生成数字签名公钥证书：对于CA机构来说，其也有两个密钥，我们暂且称之为CA私钥和CA公钥。CA机构将服务端的Public Key作为输入参数将其转换为一个特有的Hash值。然后使用CA私钥将这个Hash值进行加密处理，并与服务端的Public Key绑定在一起，生成数字签名证书。其实**数字签名证书的本质就是服务端的公钥+CA私钥加密的Hash值**。(CA私钥负责签名，CA公钥负责验证)

3、服务器获取到这个已经含有数字签名并带有公钥的证书，将该证书发送给客户端。当客户端收到该公钥数字证书后，会验证其有效性。大部分客户端都会预装CA机构的公钥，也就是CA公钥。客户端使用CA公钥对数字证书上的签名进行验证，这个验证的过程就是使用CA公钥对CA私钥加密的内容进行解密，将解密后的内容与服务端的Public Key所生成的Hash值进行匹配，如果匹配成功，则说明该证书就是相应的服务端发过来的。否则就是非法证书。


**2️⃣ MAC Specifically:**
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
#### 🔗 Links
[Certificates for localhost](https://letsencrypt.org/docs/certificates-for-localhost/)


### 🤔 How to create a https server on localhost using delpoyment tools
> 🔗 https://stackoverflow.com/questions/43677457/how-to-create-a-https-server-on-localhost
#### [ngrok](https://ngrok.com)

#### [Http-server](https://www.npmjs.com/package/http-server)

#### [local-ssl-proxy](https://www.npmjs.com/package/local-ssl-proxy)



## 👉 Why i'm using HTTPS while the browser still shows that the website is insecure?
#https #certificate
