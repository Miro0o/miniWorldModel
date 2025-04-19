# Google TPU (Tensor Processing Unit)

[TOC]



## Res
🏠 https://cloud.google.com/tpu


### Related Topics
↗ [Google TPU (Tensor Processing Unit)](Google%20TPU%20(Tensor%20Processing%20Unit).md)
↗ [Google](../../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/📌%20Comprehensive%20Electronics%20&%20Information%20Technology%20Services/Google.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Tensor_Processing_Unit

**Tensor Processing Unit (TPU)** is an AI accelerator application-specific integrated circuit (ASIC) developed by Google for neural network machine learning, using Google's own TensorFlow software. Google began using TPUs internally in 2015, and in 2018 made them available for third-party use, both as part of its cloud infrastructure and by offering a smaller version of the chip for sale.

|                                                                                                                   | TPUv1                                                               | TPUv2                                                                                     | TPUv3      | TPUv4      | TPUv5e                | TPUv5p                | Edge v1 |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------- | ---------- | --------------------- | --------------------- | ------- |
| Date introduced                                                                                                   | 2015                                                                | 2017                                                                                      | 2018       | 2021       | 2023                  | 2023                  | 2018    |
| [Process node](https://en.wikipedia.org/wiki/Semiconductor_device_fabrication "Semiconductor device fabrication") | 28 nm                                                               | 16 nm                                                                                     | 16 nm      | 7 nm       | Unstated              | Unstated              |         |
| [Die](https://en.wikipedia.org/wiki/Die_(integrated_circuit) "Die (integrated circuit)") size (mm2)               | 331                                                                 | < 625                                                                                     | < 700      | < 400      | 300-350               | Unstated              |         |
| On-chip memory (MiB)                                                                                              | 28                                                                  | 32                                                                                        | 32         | 32         | 48                    | 112                   |         |
| Clock speed (MHz)                                                                                                 | 700                                                                 | 700                                                                                       | 940        | 1050       | Unstated              | 1750                  |         |
| Memory                                                                                                            | 8 GiB [DDR3](https://en.wikipedia.org/wiki/DDR3_SDRAM "DDR3 SDRAM") | 16 GiB [HBM](https://en.wikipedia.org/wiki/High_Bandwidth_Memory "High Bandwidth Memory") | 32 GiB HBM | 32 GiB HBM | 16 GB HBM             | 95 GB HBM             |         |
| Memory bandwidth                                                                                                  | 34 GB/s                                                             | 600 GB/s                                                                                  | 900 GB/s   | 1200 GB/s  | 819 GB/s              | 2765 GB/s             |         |
| [TDP](https://en.wikipedia.org/wiki/Thermal_design_power "Thermal design power") (W)                              | 75                                                                  | 280                                                                                       | 220        | 170        | Not Listed            | Not Listed            | 2       |
| TOPS (Tera Operations Per Second)                                                                                 | 23                                                                  | 45                                                                                        | 123        | 275        | 197 (bf16) 393 (int8) | 459 (bf16) 918 (int8) | 4       |
| TOPS/W                                                                                                            | 0.31                                                                | 0.16                                                                                      | 0.56       | 1.62       | Not Listed            | Not Listed            | 2       |



## Ref
[简单谈谈Google TPUv6 | 微信公众号]: https://mp.weixin.qq.com/s/ddhY4zB7wjNXYg_pIxsGJQ

|v4|v5e|v5p|v6e|
|---|---|---|---|
|chips per pod|4096|256|8960|256|
|chip bf16 TFLOPS|275|197|459|926|
|HBM(GB)|32|16|95|32|
|HBM BW(GB/s)|1228|820|2765|1640|
|ICI BW per chip(Gb/s)|2400|1600|4800|3200|

[Tensor Processing Unit (TPU) | Semiconductor Engineering]: https://semiengineering.com/knowledge_centers/integrated-circuit/ic-types/processors/tensor-processing-unit-tpu/
