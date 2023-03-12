---
sidebar_position: 2
sidebar_label: Overview
---

# Query Module

This module is designed to manipulate the DOM and is similar to jQuery with similar methods.

## Target
Query Module is created as a replacement for jQuery, it has methods similar in name and action. The purpose of creating Query is to remove dependence on third-party libraries.

## Definition
The Metro UI core registers Query as a global object:

```
globalThis.Query - Query Class
globalThis.query - function-initializator
globalThis.$ - short version of initializetor
```

The user does not need to use the class, all calls can be made using the initializer function.
```javascript
const element = $("#element_id")
const element = $(".element_class")
```

Query contains Internal Methods and Static Methods.