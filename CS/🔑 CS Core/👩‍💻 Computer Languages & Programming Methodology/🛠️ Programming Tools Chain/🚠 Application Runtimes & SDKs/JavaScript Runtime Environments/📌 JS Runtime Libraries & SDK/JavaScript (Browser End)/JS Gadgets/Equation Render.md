# Equation Render for online mathematics

[TOC]

## Equation Rendering

The CodeCogs Equation Rendering webservice works behind the scenes to rapidly deliver equations to online website pages, through the use of a simple URL in the form:

```http
https://latex.codecogs.com/type.format?LaTeX-Markup
```

This is typically used within a single HTML image tag, which is the fastest and easiest way to add mathematics to any existing website e.g.:

```html
<img src="https://latex.codecogs.com/svg.image?1+sin^2(x)" />
```

See 📂 [Documentation](https://editor.codecogs.com/docs/) for further details.