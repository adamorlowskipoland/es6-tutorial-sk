'use strict';

var _module2 = require('./module.js');

var _module = _interopRequireWildcard(_module2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_module2.env);
console.log((0, _module2.sumNumbers)(3, 9));

// 2nd way of importing

console.log(_module.env);
console.log(_module.sumNumbers(3, 9));
