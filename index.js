import { LinkedList, Node } from './linked-list.js'

let newList = LinkedList(Node(50)) // List with one head value is created: 50 -> null
console.log(newList.size()) // 1
newList.prepend(30) // Prepends the value 30 into the list: 30 -> 50 -> null
newList.append(32) // Appends the value 32 into the list: 30 -> 50 -> 32 -> null
newList.append(99) // Appends the value 99 into the list: 30 -> 50 -> 32 -> 99 -> null
newList.prepend(1) // Prepends the value 1 into the list: 1 -> 30 -> 50 -> 32 -> 99 -> null
console.log('to string :', newList.toString()) // 1 -> 30 -> 50 -> 32 -> 99 -> null
console.log(newList.head()) // {value: 1, nextNode: {value: 30, nextNode: ...}}
console.log(newList.tail()) // { value: 99, nextNode: null }
console.log(newList.size()) // 5
newList.prepend(0) // Prepends the value 0 into the list: 0 -> 1 -> 30 -> 50 -> 32 -> 99 -> null
newList.append(100) // Appends the value 100 into the list: 0 -> 1 -> 30 -> 50 -> 32 -> 99 -> 100 -> null
console.log('to string :', newList.toString()) // 0 -> 1 -> 30 -> 50 -> 32 -> 99 -> 100 -> null
console.log(newList.size()) // 7
console.log('at index: 4', newList.at(4)) //value: 32, nextNode: { value: 99, nextNode: { value: 100, nextNode: null } }}
console.log('where is value 32: ', newList.find(32)) // 4
console.log('contains 88?', newList.contains(88)) // false
console.log('contains 100? ', newList.contains(100)) // true
newList.pop()
console.log('List after pop: ', newList.toString()) // 0 -> 1 -> 30 -> 50 -> 32 -> 99 -> null
newList.insertAt(300, 4)
console.log('List after insert: ', newList.toString()) // 0 -> 1 -> 30 -> 50 -> 300 -> 32 -> 99 -> null
newList.removeAt(2)
console.log('List after removal: ', newList.toString()) // 0 -> 1 -> 50 -> 300 -> 32 -> 99 -> null
