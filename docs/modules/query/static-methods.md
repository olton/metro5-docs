---
sidebar_position: 3
sidebar_label: Static Methods
---

# Query Static Methods

Query container a lot of useful static methods to facilitate interaction with various objects:

| Method                                      | Preparing                                    | Description                                                            |
|---------------------------------------------|----------------------------------------------|------------------------------------------------------------------------|
| `$.dataset`                                 |                                              | access to internal dataset                                             |
| `$.matches`                                 |                                              | wrapper for `matches` function                                         |
| `$.html`                                    | `$("html")`                                  | access to `html` element                                               |
| `$.doctype`                                 | `$("doctype")`                               | access to `doctype` element                                            |
| `$.head`                                    | `$("head")`                                  | access to `head` element                                               |
| `$.body`                                    | `$("body")`                                  | access to `body` element                                               |
| `$.document`                                | `$("document")`                              | access to `document` element                                           |
| `$.window`                                  | `$("window")`                                | access to `window` element                                             |
| `$.meta(name)`                              | `!name ? $("meta") : $("meta[name=$name]")`  | access to `meta` elements                                              |
| `$.metaBy(name)`                            | `!name ? $.meta : $("meta[$name]")`          | access to `meta` element                                               |
| `$.charset(val)`                            |                                              | access to `charset` or set new value                                   |
| `$.each(context, callback)`                 |                                              | function to iteration on array or object                               |
| `$.bind(function, context)`                 |                                              | change context for function                                            |
| `$.proxy(target, handler)`                  | `new Proxy(target, handler)`                 | create proxy element                                                   |
| `$.device`                                  |                                              | return `true` if this is mobile device                                 |
| `$.localhost(host)`                         |                                              | return `true` if host is localhost                                     |
| `$.isLocalhost`                             |                                              | return `true` if current host is localhost                             |
| `$.isPrivateAddress(ip_address)`            |                                              | return `true` if value is private IP address                           |
| `$.privateAddress()`                        |                                              | return `true` if value is private IP address                           |
| `$.touchable`                               |                                              | return `true` if current device is touchable                           |
| `$.script`                                  |                                              | return `true` if current host is localhost                             |
| `$.noop`                                    |                                              | empty function                                                         |
| `$.noop_true`                               |                                              | empty function, return `true`                                          |
| `$.noop_false`                              |                                              | empty function, return `false`                                         |
| `$.exec(context, callback)`                 |                                              | execute any type of code                                               |
| `$.dark`                                    |                                              | return `true` if current theme is `dark`                               |
| `$.isVisible(el)`                           |                                              | return `true` if element is `visible`                                  |
| `$.isHidden(el)`                            |                                              | return `true` if element is `hidden`                                   |
| `$.inViewport(el)`                          |                                              | return `true` if element in `viewport`                                 |
| `$.isSelector(val)`                         |                                              | return `true` if value is valid selector                               |
| `$.undef(val)`                              |                                              | return `true` if value is `null` or `undefined`                        |
| `$.iif(condition, value_true, value_false)` |                                              | return `value_true` if condition is `true` or `value_false` if `false` |
| `$.nvl(val, ifNullValue)`                   |                                              | if `val` is null or undefined, will return `ifNullValue`               |
| `$.coalesce(val, ifNullValue, ...)`         |                                              | function return first not null argument                                |
| `$.serialize(form or object)`               |                                              | function for serializing form or object                                |
| `$.script(val)`                             |                                              | inject javasctip into page                                             |
| `$.global()`                                |                                              | Setup global to $                                                      |
| `$.noConflict()`                            |                                              | Setup global to $                                                      |


