# Peephole Optimization

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Peephole_optimization

Peephole optimization is an optimization technique performed on a small set of compiler-generated instructions, known as a peephole or window, that involves replacing the instructions with a logically equivalent set that has better performance.

For example:
- Instead of pushing a register onto the stack and then immediately popping the value back into the register, remove both instructions.
- Instead of multiplying x by 2, do x << 1.
- Instead of multiplying a floating-point register by 8, add 3 to the floating-point register's exponent.

The term peephole optimization was introduced by William Marshall McKeeman in 1965.[4]


## Ref
