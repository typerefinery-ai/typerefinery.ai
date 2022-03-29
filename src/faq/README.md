---
sidebar: auto
---

# FAQ

## Why can’t `palette.styl` and `index.styl` merge into one API?

The `palette.styl` is responsible for global color settings. During compilation, theme color constants should be resolved by the preprocessor first and then be applied to the global context.

But for `index.styl`, its job is to override the default styles of application. According to the priority principle of CSS, the later style has a higher priority, so it should be generated at the end of the CSS file.

A simple diagram describing the Stylus compiler’s compilation order as follows:

@flowstart
stage1=>operation: palette.styl
stage2=>operation: default app styles
stage3=>operation: index.styl

stage1->stage2->stage3
@flowend

<br>

