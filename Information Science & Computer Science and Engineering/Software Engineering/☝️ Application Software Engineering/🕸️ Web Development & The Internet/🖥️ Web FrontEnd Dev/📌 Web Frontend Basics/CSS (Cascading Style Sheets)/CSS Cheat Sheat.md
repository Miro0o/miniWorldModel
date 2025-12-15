# CSS Cheat Sheat

[TOC]



## CSS Values and Units
> 🔗 https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#test_your_skills!


### Rem
In CSS rem stands for “root em”, a unit of measurement that represents the font size of the root element. This means that `1rem` equals the font size of the `html` element, which for most browsers has a default value of 16px. Using rem can help ensure consistency of font size and spacing throughout your UI.

According to the [W3C spec](https://www.w3.org/TR/2013/CR-css3-values-20130730/#font-relative-lengths) the definition for one rem unit is:

> Equal to the computed value of `font-size` on the root element. When specified on the `font-size` property of the root element, the rem units refer to the property’s initial value.

The difference between rem units and em units is that [em units](https://www.sitepoint.com/power-em-units-css/) are relative to the font size of their **own** element, not the **root** element. As such they can cascade and cause unexpected results.


### Ref
[Rem in CSS: Understanding and Using rem Units]: https://www.sitepoint.com/understanding-and-using-rem-units-in-css/



## CSS Selector

### RE in CSS Selector
> 🔗 https://stackoverflow.com/a/49782582/16542494

As complement of [this answer](https://stackoverflow.com/a/8903451/6484286) you can use `$` to get the end matches and `*` to get matches anywhere in the value name.

Matches anywhere: `.col-md`, `.left-col`, `.col`, `.tricolor`, etc.
```css
[class*="col"]
```
Matches at the beginning: `.col-md`, `.col-sm-6`, etc.
```css
[class^="col-"]
```
Matches at the ending: `.left-col`, `.right-col`, etc.
```css
[class$="-col"]
```


### 🔗 Ref
[CSS 选择器，一篇就够了]: https://segmentfault.com/a/1190000013424772

[@media 查询]: https://www.runoob.com/cssref/css3-pr-mediaquery.html



## CSS Layout

### 🔗 Ref
[CSS-水平居中、垂直居中、水平垂直居中]: https://segmentfault.com/a/1190000014116655

[一文搞懂grid布局 和 flex 布局及其区别]: https://juejin.cn/post/6940627375537258527#heading-3
