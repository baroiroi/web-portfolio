const array = [1,2,3];
const collection = [];

for(let i=array.length; i>=0; i--) {
  if(array[i]>=2) {
     collection.push(array[i]);
     array.splice(i,1);
  }
}

console.log(collection); //returns [3,2]
console.log(array); //returns [1] 