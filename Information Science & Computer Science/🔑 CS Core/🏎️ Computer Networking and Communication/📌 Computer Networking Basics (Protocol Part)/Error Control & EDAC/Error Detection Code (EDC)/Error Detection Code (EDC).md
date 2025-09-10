# Error Detection

[TOC]



## Res
### Related Topics


### Learning Resources
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=20&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
> Checksum, parity bit, CRC



## 🔎 Major Types of Error Detection
There are three major types of error detection. 

### 1️⃣ Automatic Repeat Request
[Automatic repeat request](https://en.wikipedia.org/wiki/Automatic_repeat_request) (ARQ) is an error control method for data transmission that makes use of error-detection codes, acknowledgment and/or negative acknowledgment messages, and [timeouts](https://en.wikipedia.org/wiki/Timeout_(computing)) to achieve reliable data transmission. An *acknowledgment* is a message sent by the receiver to indicate that it has correctly received a [data frame](https://en.wikipedia.org/wiki/Frame_(networking)).


### 2️⃣ Forward Error Correction
[Forward error correction](https://en.wikipedia.org/wiki/Forward_error_correction) (FEC) is a process of adding [redundant data](https://en.wikipedia.org/wiki/Redundancy_(information_theory)) such as an [error-correcting code](https://en.wikipedia.org/wiki/Error-correcting_code) (ECC) to a message so that it can be recovered by a receiver even when a number of errors (up to the capability of the code being used) are introduced, either during the process of transmission or on storage. Since the receiver does not have to ask the sender for the retransmission of the data, a [backchannel](https://en.wikipedia.org/wiki/Backchannel) is not required in forward error correction. Error-correcting codes are used in [lower-layer](https://en.wikipedia.org/wiki/Physical_layer) communication such as [cellular network](https://en.wikipedia.org/wiki/Cellular_network), high-speed [fiber-optic communication](https://en.wikipedia.org/wiki/Fiber-optic_communication) and [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) as well as for reliable storage in media such as [flash memory](https://en.wikipedia.org/wiki/Flash_memory), [hard disk](https://en.wikipedia.org/wiki/Hard_disk) and [RAM](https://en.wikipedia.org/wiki/ECC_memory).

Error-correcting codes are usually distinguished between [convolutional codes](https://en.wikipedia.org/wiki/Convolutional_code) and [block codes](https://en.wikipedia.org/wiki/Block_code):

- *Convolutional codes* are processed on a bit-by-bit basis. They are particularly suitable for implementation in hardware, and the [Viterbi decoder](https://en.wikipedia.org/wiki/Viterbi_decoder) allows [optimal decoding](https://en.wikipedia.org/wiki/Maximum_likelihood_decoding).
- *Block codes* are processed on a [block-by-block](https://en.wikipedia.org/wiki/Block_(telecommunications)) basis. Early examples of block codes are [repetition codes](https://en.wikipedia.org/wiki/Repetition_code), [Hamming codes](https://en.wikipedia.org/wiki/Hamming_code) and [multidimensional parity-check codes](https://en.wikipedia.org/wiki/Multidimensional_parity-check_code). They were followed by a number of efficient codes, [Reed–Solomon codes](https://en.wikipedia.org/wiki/Reed–Solomon_code) being the most notable due to their current widespread use. [Turbo codes](https://en.wikipedia.org/wiki/Turbo_code) and [low-density parity-check codes](https://en.wikipedia.org/wiki/Low-density_parity-check_code) (LDPC) are relatively new constructions that can provide almost [optimal efficiency](https://en.wikipedia.org/wiki/Category:Capacity-approaching_codes).

[Shannon's theorem](https://en.wikipedia.org/wiki/Shannon's_theorem) is an important theorem in forward error correction and describes the maximum [information rate](https://en.wikipedia.org/wiki/Information_rate) at which reliable communication is possible over a channel that has a certain error probability or [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) (SNR). This strict upper limit is expressed in terms of the [channel capacity](https://en.wikipedia.org/wiki/Channel_capacity). More specifically, the theorem says that there exist codes such that with increasing encoding length the probability of error on a [discrete memoryless channel](https://en.wikipedia.org/wiki/Channel_model) can be made arbitrarily small, provided that the [code rate](https://en.wikipedia.org/wiki/Code_rate) is smaller than the channel capacity. The code rate is defined as the fraction *k/n* of *k* source symbols and *n* encoded symbols.

The actual maximum code rate allowed depends on the error-correcting code used and may be lower. This is because Shannon's proof was only of existential nature, and did not show how to construct codes that are both optimal and have [efficient](https://en.wikipedia.org/wiki/Polynomial_time) encoding and decoding algorithms.


### 3️⃣ Hybrid schemes
> 📄 Main article: [Hybrid ARQ](https://en.wikipedia.org/wiki/Hybrid_ARQ)

[Hybrid ARQ](https://en.wikipedia.org/wiki/Hybrid_ARQ) is a combination of ARQ and forward error correction. There are two basic approaches:

- Messages are always transmitted with FEC parity data (and error-detection redundancy). A receiver decodes a message using the parity information and requests retransmission using ARQ only if the parity data was not sufficient for successful decoding (identified through a failed integrity check).
- Messages are transmitted without parity data (only with error-detection information). If a receiver detects an error, it requests FEC information from the transmitter using ARQ and uses it to reconstruct the original message.

The latter approach is particularly attractive on an [erasure channel](https://en.wikipedia.org/wiki/Binary_erasure_channel) when using a [rateless erasure code](https://en.wikipedia.org/wiki/Fountain_code).



## Error Detections Schemes
### 📏 Principle: Hash Function
Error detection is most commonly realized using a suitable [hash function](https://en.wikipedia.org/wiki/Hash_function) (or specifically, a [checksum](https://en.wikipedia.org/wiki/Checksum), [cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check), or other algorithms).
- A hash function adds a fixed-length *tag* to a message, which enables receivers to verify the delivered message by recomputing the tag and comparing it with the one provided.
- There exists a vast variety of different hash function designs. However, some are of particularly widespread use because of either their simplicity or their suitability for detecting certain kinds of errors (e.g., the cyclic redundancy check's performance in detecting [burst errors](https://en.wikipedia.org/wiki/Burst_error)).


### Error Correction Code, ECC
> 📄 Main article: [Error correction code](https://en.wikipedia.org/wiki/Error_correction_code)
>
> 👉 [Error Conrrection](Error Conrection/Error Conrection.md)
>
> Error Detection also refers to ECC sometimes. (?)

Any error-correcting code can be used for error detection. A code with *minimum [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance)*, *d*, can detect up to *d* − 1 error in a code word. Using minimum-distance-based error-correcting codes for error detection can be suitable if a strict limit on the minimum number of errors to be detected is desired.

Codes with minimum Hamming distance *d* = 2 are degenerate cases of error-correcting codes and can be used to detect single errors. The parity bit is an example of a **single-error-detecting code**.


### Minimum Distance Coding
A random-error-correcting code based on [minimum distance coding](https://en.wikipedia.org/wiki/Minimum_distance_coding) can provide a strict guarantee on the number of detectable errors, but it may not protect against a [preimage attack](https://en.wikipedia.org/wiki/Preimage_attack).


### Repetition codes
A [repetition code](https://en.wikipedia.org/wiki/Repetition_code) is a coding scheme that repeats the bits across a channel to achieve error-free communication. Given a stream of data to be transmitted, the data are divided into blocks of bits. Each block is transmitted some predetermined number of times. For example, to send the bit pattern "1011", the four-bit block can be repeated three times, thus producing "1011 1011 1011". If this twelve-bit pattern was received as "1010 1011 1011" – where the first block is unlike the other two – an error has occurred.

**cons**
A repetition code is very inefficient and can be susceptible to problems if the error occurs in exactly the same place for each group (e.g., "1010 1010 1010" in the previous example would be detected as correct). 

**pros**
The advantage of repetition codes is that they are extremely simple, and are in fact used in some transmissions of [numbers stations](https://en.wikipedia.org/wiki/Numbers_station).


### Parity bit
> 📄 Main article: [Parity bit](https://en.wikipedia.org/wiki/Parity_bit)

A *parity bit* is a bit that is added to a group of source bits to ensure that the number of set bits (i.e., bits with value 1) in the outcome is even or odd. It is a very simple scheme that can be used to detect single or any other odd number (i.e., three, five, etc.) of errors in the output. An even number of flipped bits will make the parity bit appear correct even though the data is erroneous.

Parity bits added to each "word" sent are called [transverse redundancy checks](https://en.wikipedia.org/wiki/Transverse_redundancy_check), while those added at the end of a stream of "words" are called [longitudinal redundancy checks](https://en.wikipedia.org/wiki/Longitudinal_redundancy_check). 

There are also other bit-grouping techniques.


### Checksum
> 📄 Main article: [Checksum](https://en.wikipedia.org/wiki/Checksum)

A *checksum* of a message is a [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic) sum of message code words of a fixed word length (e.g., byte values). The sum may be negated by means of a [ones'-complement](https://en.wikipedia.org/wiki/Ones'_complement) operation prior to transmission to detect unintentional all-zero messages.

Checksum schemes include parity bits, [check digits](https://en.wikipedia.org/wiki/Check_digit), and [longitudinal redundancy checks](https://en.wikipedia.org/wiki/Longitudinal_redundancy_check). Some checksum schemes, such as the [Damm algorithm](https://en.wikipedia.org/wiki/Damm_algorithm), the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm), and the [Verhoeff algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm), are specifically designed to detect errors commonly introduced by humans in writing down or remembering identification numbers.


### Cyclic Redundancy Check
> 📄 Main article: [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)
> 
> Details at ↗ [CRC (Cyclic Redundancy Check)](CRC%20(Cyclic%20Redundancy%20Check).md)

A *cyclic redundancy check* (CRC) is a non-secure [hash function](https://en.wikipedia.org/wiki/Hash_function) designed to detect accidental changes to digital data in computer networks. It is not suitable for detecting maliciously introduced errors. It is characterized by the specification of a *generator polynomial*, which is used as the [divisor](https://en.wikipedia.org/wiki/Divisor) in a [polynomial long division](https://en.wikipedia.org/wiki/Polynomial_long_division) over a [finite field](https://en.wikipedia.org/wiki/Finite_field), taking the input data as the [dividend](https://en.wikipedia.org/wiki/Dividend). The [remainder](https://en.wikipedia.org/wiki/Remainder) becomes the result.

A CRC has properties that make it well-suited for detecting [burst errors](https://en.wikipedia.org/wiki/Burst_error). CRCs are particularly easy to implement in hardware and are therefore commonly used in [computer networks](https://en.wikipedia.org/wiki/Computer_network) and storage devices such as [hard disk drives](https://en.wikipedia.org/wiki/Hard_disk_drives).

> 💡 The parity bit can be seen as a special-case 1-bit CRC.


### Cryptographic Hash Function, Message Digest
> 📄 Main article: [Cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

The output of a *cryptographic hash function*, also known as a *message digest*, can provide strong assurances about [data integrity](https://en.wikipedia.org/wiki/Data_integrity), whether changes of the data are accidental (e.g., due to transmission errors) or maliciously introduced. Any modification to the data will likely be detected through a mismatching hash value. Furthermore, given some hash value, it is typically infeasible to find some input data (other than the one given) that will yield the same hash value. 

If an attacker can change not only the message but also the hash value, then a *keyed hash* or [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) (MAC) can be used for additional security. Without knowing the key, it is not possible for the attacker to easily or conveniently calculate the correct keyed hash value for a modified message.



## Ref

