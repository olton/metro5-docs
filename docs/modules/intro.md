---
sidebar_position: 1
sidebar_label: Intro to Modules
---

# Introduction to Modules

Metro 5 contains 6 common modules:
- **Query** is a jQuery analog module, has almost all the necessary methods, with the same names and the same action as the mentioned jQuery.
- **Datetime** - the module contains functions for convenient work with dates
- **String** - the module contains functions for convenient work with strings
- **HTML** - the module contains JS projection functions on HTML elements, you can easily and simply write HTML code without going beyond JavaScript code
- **Animation** - the module contains functions for animation of HTML elements
- **Color** - the module contains functions for convenient work with colors

All modules registered as global objects:

```javascript
globalThis.Color
globalThis.Animation
globalThis.Datetime
globalThis.datetime
globalThis.Str
globalThis.string
globalThis.$
globalThis.Query
globalThis.query
globalThis.html
```

Modules are an integral part of the Metro 5 core. You don't need to do anything to connect the modules, 
they are connected automatically by the Metro 5 core. They also cannot be disabled.