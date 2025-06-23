let {add} = require("./add.js")
let {sub} = require("./sub.js")

add(1,2);
sub(2,1);      


module.exports.add = add;
module.exports.sub = sub;