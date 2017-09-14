import {env, sumNumbers} from './module.js'
console.log(env);
console.log(sumNumbers(3, 9));

// 2nd way of importing
import * as module from './module.js'
console.log(module.env);
console.log(module.sumNumbers(3, 9));
