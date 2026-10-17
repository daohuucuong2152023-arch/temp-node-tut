const _ = require('lodash'); // '_' là tên biến đại diện cho thư viện lodash
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items); // làm phẳng mảng
console.log(newItems);