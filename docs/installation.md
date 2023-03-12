---
sidebar_position: 1.1
slug: install
sidebar_label: Installation
---

# Installation

You can use Metro UI in two ways:

### 1. Precompiled
Load Metro UI from `cdn`

#### DocType and Responsive
Metro UI requires the use of the `HTML5 doctype`.
```html
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```
and responsive meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Metro UI -->
    <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v5/metro-ui.min.css">
</head>
<body>
<h1>Hello, world!</h1>

<!-- Metro UI -->
<script src="https://cdn.korzh.com/metroui/v5/metro-ui.min.js"></script>
</body>
</html>
```

### 2. Npm
#### Install
```shell
npm install @olton/metro5
```
#### Using
```javascript
import {Metro5} from "@olton/metro5/src/core/metro"

globalThis.Metro5 = Metro5
globalThis.Metro = new Metro5({
    onInit: ()=>{

    }
})

// Required import
import * as ResetCss from "@olton/metro5/src/common/reset"

// Imposrt Common Css files
import * as ColorCss from "@olton/metro5/src/common/colors"

// Import components
import * as Container from "@olton/metro5/src/components/container"

```

