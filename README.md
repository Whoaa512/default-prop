# Default Prop
Create an iterable function that assigns a default value to given property name

## Installation
  `npm install default-prop --save`

## Usage
```javascript
var defaultProp = require('default-prop')

var accounts = [{
    name: 'alice',
    inUse: true
  },{
    name: 'bob'
  },{
    name: 'charlie'
  }]

accounts.forEach(defaultProp('inUse', false))

console.log(accounts)
// =>
// accounts = [{
//     name: 'alice',
//     inUse: true
//   },{
//     name: 'bob',
//     inUse: false
//   },{
//     name: 'charlie',
//     inUse: false
//   }]
```

# License
MIT