# Fouriers Seires & Fouriers Transformation

[TOC]



## Res
### Related Topics


### Other Resources



## Intro



## Fourier Transformation
> 🔗 https://en.wikipedia.org/wiki/Fourier_transform

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), the **Fourier transform** (**FT**) is an [integral transform](https://en.wikipedia.org/wiki/Integral_transform "Integral transform") that takes a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") as input, and outputs another function that describes the extent to which various [frequencies](https://en.wikipedia.org/wiki/Frequency "Frequency") are present in the original function. The output of the transform is a [complex](https://en.wikipedia.org/wiki/Complex_number "Complex number")-valued function of frequency. The term _Fourier transform_ refers to both the [mathematical operation](https://en.wikipedia.org/wiki/Operation_\(mathematics\) "Operation (mathematics)") and to this complex-valued function. When a distinction needs to be made, the output of the operation is sometimes called the [frequency domain](https://en.wikipedia.org/wiki/Frequency_domain "Frequency domain") representation of the original function. The Fourier transform is analogous to decomposing the [sound](https://en.wikipedia.org/wiki/Sound "Sound") of a musical [chord](https://en.wikipedia.org/wiki/Chord_\(music\) "Chord (music)") into the [intensities](https://en.wikipedia.org/wiki/Sound_intensity "Sound intensity") of its constituent [pitches](https://en.wikipedia.org/wiki/Pitch_\(music\) "Pitch (music)").

The Fourier transform relates the time domain, in red, with a function in the domain of the frequency, in blue. The component frequencies, extended for the whole frequency spectrum, are shown as peaks in the domain of the frequency.

Functions that are localized in the time domain have Fourier transforms that are spread out across the frequency domain and vice versa, a phenomenon known as the [uncertainty principle](https://en.wikipedia.org/wiki/Fourier_transform#Uncertainty_principle). The [critical](https://en.wikipedia.org/wiki/Critical_point_\(mathematics\) "Critical point (mathematics)") case for this principle is the [Gaussian function](https://en.wikipedia.org/wiki/Gaussian_function "Gaussian function"), of substantial importance in [probability theory](https://en.wikipedia.org/wiki/Probability_theory "Probability theory") and [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics") as well as in the study of physical phenomena exhibiting [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution "Normal distribution") (e.g., [diffusion](https://en.wikipedia.org/wiki/Diffusion "Diffusion")). The Fourier transform of a Gaussian function is another Gaussian function. [Joseph Fourier](https://en.wikipedia.org/wiki/Joseph_Fourier "Joseph Fourier") introduced [sine and cosine transforms](https://en.wikipedia.org/wiki/Sine_and_cosine_transforms "Sine and cosine transforms") (which [correspond to the imaginary and real components](https://en.wikipedia.org/wiki/Sine_and_cosine_transforms#Relation_with_complex_exponentials "Sine and cosine transforms") of the modern Fourier transform) in his study of [heat transfer](https://en.wikipedia.org/wiki/Heat_transfer "Heat transfer"), where Gaussian functions appear as solutions of the [heat equation](https://en.wikipedia.org/wiki/Heat_equation "Heat equation").

The Fourier transform can be formally defined as an [improper](https://en.wikipedia.org/wiki/Improper_integral "Improper integral") [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral "Riemann integral"), making it an integral transform, although this definition is not suitable for many applications requiring a more sophisticated integration theory. For example, many relatively simple applications use the [Dirac delta function](https://en.wikipedia.org/wiki/Dirac_delta_function "Dirac delta function"), which can be treated formally as if it were a function, but the justification requires a mathematically more sophisticated viewpoint.

The Fourier transform can also be generalized to functions of several variables on [Euclidean space](https://en.wikipedia.org/wiki/Euclidean_space "Euclidean space"), sending a function of 3-dimensional "position space" to a function of 3-dimensional momentum (or a function of space and time to a function of [4-momentum](https://en.wikipedia.org/wiki/4-momentum "4-momentum")). This idea makes the spatial Fourier transform very natural in the study of waves, as well as in [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics"), where it is important to be able to represent wave solutions as functions of either position or momentum and sometimes both. In general, functions to which Fourier methods are applicable are complex-valued, and possibly [vector-valued](https://en.wikipedia.org/wiki/Vector-valued_function "Vector-valued function"). Still further generalization is possible to functions on [groups](https://en.wikipedia.org/wiki/Group_\(mathematics\) "Group (mathematics)"), which, besides the original Fourier transform on [**R**](https://en.wikipedia.org/wiki/Real_number#Arithmetic "Real number") or **Rn**, notably includes the [discrete-time Fourier transform](https://en.wikipedia.org/wiki/Discrete-time_Fourier_transform "Discrete-time Fourier transform") (DTFT, group = [**Z**](https://en.wikipedia.org/wiki/Integers "Integers")), the [discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform "Discrete Fourier transform") (DFT, group = [**Z** mod _N_](https://en.wikipedia.org/wiki/Cyclic_group "Cyclic group")) and the [Fourier series](https://en.wikipedia.org/wiki/Fourier_series "Fourier series") or circular Fourier transform (group = [_S_1](https://en.wikipedia.org/wiki/Circle_group "Circle group"), the unit circle ≈ closed finite interval with endpoints identified). The latter is routinely employed to handle [periodic functions](https://en.wikipedia.org/wiki/Periodic_function "Periodic function"). The [fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform "Fast Fourier transform") (FFT) is an algorithm for computing the DFT.



## Ref
[Fourier transform| wikiepdia]: https://en.wikipedia.org/wiki/Fourier_transform
[Discrete Fourier transform | wikipedia]: https://en.wikipedia.org/wiki/Discrete_Fourier_transform
