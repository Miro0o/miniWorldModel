# Error Control & EDAC

[TOC]



## Res
### Related Topics



## Intro
> ⚠  *Not to be confused with* [Error handling](https://en.wikipedia.org/wiki/Error_handling)*.*
>
> 🔗 https://en.wikipedia.org/wiki/Error_detection_and_correction

In [information theory](https://en.wikipedia.org/wiki/Information_theory) and [coding theory](https://en.wikipedia.org/wiki/Coding_theory) with applications in [computer science](https://en.wikipedia.org/wiki/Computer_science) and [telecommunication](https://en.wikipedia.org/wiki/Telecommunication), **error detection and correction** (**EDAC**) or **error control** are techniques that enable [reliable delivery](https://en.wikipedia.org/wiki/Reliability_(computer_networking)) of [digital data](https://en.wikipedia.org/wiki/Digital_data) over unreliable [communication channels](https://en.wikipedia.org/wiki/Communication_channel). Many communication channels are subject to [channel noise](https://en.wikipedia.org/wiki/Channel_noise), and thus errors may be introduced during transmission from the source to the. Error detection techniques allow detecting such errors, while error correction enables the reconstruction of the original data in many cases.

- *Error detection* is the detection of errors caused by noise or other impairments during transmission from the transmitter to the receiver.

- *Error correction* is the detection of errors and reconstruction of the original, error-free data.

The modern development of [error correction codes](https://en.wikipedia.org/wiki/Error_correction_code) is credited to [Richard Hamming](https://en.wikipedia.org/wiki/Richard_Hamming) in 1947. A description of [Hamming's code](https://en.wikipedia.org/wiki/Hamming_code) appeared in [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon)'s *A Mathematical Theory of Communication* and was quickly generalized by [Marcel J. E. Golay](https://en.wikipedia.org/wiki/Marcel_J._E._Golay).



## Error Detection Schemes
↗ [Error Detection Code (EDC)](Error%20Detection%20Code%20(EDC)/Error%20Detection%20Code%20(EDC).md)



## Error Correction Schemes
↗ [Error Correction Code (ECC)](Error%20Correction%20Code%20(ECC)/Error%20Correction%20Code%20(ECC).md)



## Error Control Applications
Applications that require low latency (such as telephone conversations) cannot use [automatic repeat request](https://en.wikipedia.org/wiki/Automatic_repeat_request) (ARQ); they must use [forward error correction](https://en.wikipedia.org/wiki/Forward_error_correction)(FEC). By the time an ARQ system discovers an error and re-transmits it, the re-sent data will arrive too late to be usable.

Applications where the transmitter immediately forgets the information as soon as it is sent (such as most television cameras) cannot use ARQ; they must use FEC because when an error occurs, the original data is no longer available.

Applications that use ARQ must have a [return channel](https://en.wikipedia.org/wiki/Return_channel); applications having no return channel cannot use ARQ.

Applications that require extremely low error rates (such as digital money transfers) must use ARQ due to the possibility of uncorrectable errors with FEC.

Reliability and inspection engineering also make use of the theory of error-correcting codes

1. Internet
2. Deep-Space Telecommunication
3. Satellite Broadcasting
4. Data Storage
5. Error-Correction Memory



## Ref
