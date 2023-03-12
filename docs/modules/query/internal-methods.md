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

### CSS

### Events

### Manipulations

### Position

### Properties

### Scripts

### Scroll

### Serialize

### Size

### Visibility
