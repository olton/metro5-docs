---
sidebar_position: 4
sidebar_label: Internal Methods
---

# Query Internal Methods

Internal methods are used to interact with the elements whose array was created when the instance was initialized.
```javascript
// Create Query instance
const win = $("window") 

// Setup event
win.on("resize", function(e){
    // this - window element
    console.log(this.width, this.height)
})
```

### Init

| Method   |  Description               |
|----------|----------------------------|
| `init()` |  Initiate a query instance |

> You will not have to use this method yourself. It is used automatically when an instance is created.

### Attributes
Methods are designed to work with element attributes.

| Method                    | Description                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| `attr(name, value)`       | Set or get attribute value                                                      |
| `hasAttr(name)`           | Check if element has attribute with specified name                              | 
| `hasAttrs(name)`          | Check if element has attributes with specified names. Argument must be an array |
 | `removeAttr(name)`        | Remove attribute from element with a specified name                             |
| `toggleAttr(name, value)` | Toggle attribute with specified name and value                                  |
 | `id(value)`               | Set or get value for element ID attribute                                       | 

### Classes
Methods are designed to work with element classes.

| Method                    | Description                                     |
|---------------------------|-------------------------------------------------|
| `addClass(val)`           | Add specified `classes` to element              |
| `removeClass(val)`        | Remove specified `classes` from element         |
| `toggleClass(val)`        | Toggle specified `classes` for element          |
| `containsClass(val)`      | Check if specified `classes` present in element |
| `itemClass(val)`          |                                                 |
| `hasClass(val)`           | Check if element has specified classes          |
| `clearClass(val)`         | Remove all classes from element                 |
| `classes(index, asArray)` | Extract classes from element                    |
| `classesCount(index)`     | Get count of classes for specified element      |
| `removeClassBy(val)`      | Remove classes by mask                          |


### Contains

| Method                         | Description                                                                        |
|--------------------------------|------------------------------------------------------------------------------------|
| `index(selector, global=true)` | Return index for element in element set                                            |
| `get(index)`                   | Return HTML element for set by index                                               |  
| `eq(index)`                    | Return Query element from set by index                                             |  
| `is(selector or element)`      | Return true if selector or element in set                                          |  
| `same(element)`                | Return true if element present in set                                              |  
| `last()`                       | Return last element from set                                                       |  
| `first()`                      | Return first element from set                                                      |  
| `filter(func)`                 | Filter set                                                                         |  
| `odd(selector)`                | Return odd elements from set, can be specified with selector                       |  
| `even(selector)`               | Return even elements from set, can be specified with selector                      |  
| `find(selector)`               | Find among all child elements specified with selector                              |  
| `contains(selector)`           | Return true, if element, specified by selector present in among all child elements |  
| `children(selector)`           | Returns the set of direct descendants of the specified selector.                   |  
| `parent(selector)`             | Returns the parent for element(s) with the specified selector.                     |  
| `parents(selector)`            | Returns the parents for element(s) with the specified selector.                    |  
| `siblings(selector)`           | Returns the siblings elements with the specified selector.                         |  
| `prev(selector)`               | Returns the prev element with the specified selector.                              |  
| `next(selector)`               | Returns the next element with the specified selector.                              |  
| `prevAll(selector)`            | Returns the all prev elements with the specified selector.                         |  
| `nextAll(selector)`            | Returns the all next elements with the specified selector.                         |  
| `closest(selector)`            | Returns the first element from parents with the specified selector.                |  
| `has(selector)`                |                                                                                    |  
| `back(to_start=false)`         |                                                                                    |  

### CSS

| Method                | Description                                        |
|-----------------------|----------------------------------------------------|
| `style(name, pseudo)` | Return value for specified style property          |
| `removeStyle(name)`   | Remove style property specified with name argument |
| `css(key, val)`       | Set style for elements set                         |
| `css({...}})`         | Set styles for elements set                        |


### Events

| Method                                          | Description                  |
|-------------------------------------------------|------------------------------|
| `load(func, options)`                           | `$("window").load()`         |
| `unload(func, options)`                         | `$("window").unload()`       |
| `beforeunload(func, options)`                   | `$("window").beforeunload()` |
| `ready(func, options)`                          | `$("document").ready()`      |
| `on(eventsList, selector?, callback, options)`  |                              |
| `one(eventsList, selector?, callback, options)` |                              |
| `off(eventsList, selector?, options)`           |                              |
| `trigger(name, data)`                           |                              |
| `fire(name, data)`                              |                              |
| `hover(fnOver, fnOut, options)`                 |                              |
| `blure(selector?, callback, options)`           |                              |
| `focus(selector?, callback, options)`           |                              |
| `resize(selector?, callback, options)`          |                              |
| `scroll(selector?, callback, options)`          |                              |
| `click(selector?, callback, options)`           |                              |
| `dblclick(selector?, callback, options)`        |                              |
| `mousedown(selector?, callback, options)`       |                              |
| `mouseup(selector?, callback, options)`         |                              |
| `mousemove(selector?, callback, options)`       |                              |
| `mouseenter(selector?, callback, options)`      |                              |
| `mouseleave(selector?, callback, options)`      |                              |
| `mouseover(selector?, callback, options)`       |                              |
| `touchstart(selector?, callback, options)`      |                              |
| `touchend(selector?, callback, options)`        |                              |
| `touchmove(selector?, callback, options)`       |                              |
| `touchcancel(selector?, callback, options)`     |                              |
| `change(selector?, callback, options)`          |                              |
| `select(selector?, callback, options)`          |                              |
| `submit(selector?, callback, options)`          |                              |
| `keyup(selector?, callback, options)`           |                              |
| `keydown(selector?, callback, options)`         |                              |
| `keypress(selector?, callback, options)`        |                              |
| `contextmenu(selector?, callback, options)`     |                              |

### Manipulations

### Position

### Properties

### Scripts

### Scroll

### Serialize

### Size

### Visibility
