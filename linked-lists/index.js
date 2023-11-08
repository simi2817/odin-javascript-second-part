import LinkedList from "./linkedList.js";

const list = new LinkedList();
list.append('second!');
list.append('third!');
list.append('fourth!');
list.append('fifth!');
list.prepend('first!');

console.log(list.size()); //5

console.log(list.toString());
//( first! ) -> ( second! ) -> ( third! ) -> ( fourth! ) -> ( fifth! ) -> null

const head = list.head;
console.log(head);
/*
Node {
  value: 'first!',
  nextNode: Node {
    value: 'second!',
    nextNode: Node { value: 'third!', nextNode: [Node] }
  }
}
*/

const tail = list.tail();
console.log(tail); //Node { value: 'fifth!', nextNode: null }

const nodeAtIndex = list.at(3);
console.log(nodeAtIndex);
/*
Node {
  value: 'fourth!',
  nextNode: Node { value: 'fifth!', nextNode: null }
}
*/
const invalidIndex = list.at(7);
console.log(invalidIndex); //false

list.pop();
console.log(list.size()); //4 -> popped last element

let isValuePresent = list.contains('fourth!');
console.log(isValuePresent); //true
isValuePresent = list.contains('seventh!');
console.log(isValuePresent); //false

let indexOfNode = list.find('first!');
console.log(indexOfNode); //0
indexOfNode = list.find('third!');
console.log(indexOfNode); //2
indexOfNode = list.find('seventh!');
console.log(indexOfNode); //null (if no value present)

console.log(list.toString());
//( first! ) -> ( second! ) -> ( third! ) -> ( fourth! ) -> null

const insertedNode = list.insertAt('double-first!', 1);
console.log(insertedNode);
/*
Node {
  value: 'first!',
  nextNode: Node {
    value: 'double-first!',
    nextNode: Node { value: 'second!', nextNode: [Node] }
  }
}
*/
console.log(list.size()); //5
console.log(list.find('double-first!')); //1

console.log(list.toString());
//( first! ) -> ( double-first! ) -> ( second! ) -> ( third! ) -> ( fourth! ) -> null

const removedIndex = list.removeAt(1);
console.log(removedIndex);
/*
Node {
  value: 'first!',
  nextNode: Node {
    value: 'second!',
    nextNode: Node { value: 'third!', nextNode: [Node] }
  }
}
*/
console.log(list.size()); //4

console.log(list.toString());
//( first! ) -> ( second! ) -> ( third! ) -> ( fourth! ) -> null