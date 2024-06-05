//counting truthy
let truthy = [true, false, true, false, true, false, true, false, true, false, true, false,true,true];
let count = truthy.filter(Boolean).length;
console.log(count);