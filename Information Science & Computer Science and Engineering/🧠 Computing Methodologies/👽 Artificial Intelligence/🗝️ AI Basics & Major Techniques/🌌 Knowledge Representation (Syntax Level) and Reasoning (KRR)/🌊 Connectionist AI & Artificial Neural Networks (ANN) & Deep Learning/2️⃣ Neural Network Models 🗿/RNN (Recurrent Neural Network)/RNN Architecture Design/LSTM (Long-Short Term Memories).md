# LSTM (Long-Short Term Memories)

[TOC]



## Res
### Related Topics
↗ [Hidden Markov Model (HMM)](../../../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Hidden%20Markov%20Model%20(HMM).md)


### Other Resources
https://deeplearning.cs.cmu.edu/S23/document/readings/LSTM.pdf



## Intro
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac4fbdb-f7f4-83ec-99e8-a5b822dcbbea

> 🔗 https://en.wikipedia.org/wiki/Long_short-term_memory

Long short-term memory (LSTM)[1] is a type of recurrent neural network (RNN) aimed at mitigating the vanishing gradient problem[2] commonly encountered by traditional RNNs. Its relative insensitivity to gap length is its advantage over other RNNs, hidden Markov models, and other sequence learning methods. It aims to provide a short-term memory for RNN that can last thousands of timesteps (thus "long short-term memory").[1] The name is made in analogy with long-term memory and short-term memory and their relationship, studied by cognitive psychologists since the early 20th century.

An LSTM unit is typically composed of a cell and three gates: an input gate, an output gate,[3] and a forget gate.[4] The cell remembers values over arbitrary time intervals, and the gates regulate the flow of information into and out of the cell. Forget gates decide what information to discard from the previous state, by mapping the previous state and the current input to a value between 0 and 1. A (rounded) value of 1 signifies retention of the information, and a value of 0 represents discarding. Input gates decide which pieces of new information to store in the current cell state, using the same system as forget gates. Output gates control which pieces of information in the current cell state to output, by assigning a value from 0 to 1 to the information, considering the previous and current states. Selectively outputting relevant information from the current state allows the LSTM network to maintain useful, long-term dependencies to make predictions, both in current and future time-steps.

LSTM has wide applications in classification,[5][6] data processing, time series analysis tasks,[7] speech recognition,[8][9] machine translation,[10][11] speech activity detection,[12] robot control,[13][14] video games,[15][16] healthcare,[17] energy forecasting.[18]


### LSTM Architecture
![](../../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.03.32.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.04.09.png)


**LSTM is ↗ [ResNet (Residual Networks)](../../CNN%20(Convolutional%20Neural%20Network)/CNN%20Architecture%20Design/ResNet%20(Residual%20Networks).md) rotated 90 degrees!**
![](../../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.04.30.png)



## Ref
