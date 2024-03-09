let array = [5, 3, 4, 2];
let additation = 0;
let key = -1;
for (let index in array) {
  key++;
}

for (let i = 0; i <= key ; i++) {
  additation = additation + array[i];
}
console.log(additation)