const Node = (value = null, nextNode = null) => {
	return { value, nextNode }
}

const LinkedList = (nodeHead = null) => {
	// head returns the first node in the list
	const head = () => {
		return nodeHead
	}

	//prepend(value) adds a new node containing value to the start of the list
	const prepend = (value = null) => {
		if (value != null) {
			let oldHead = null
			if (nodeHead != null) oldHead = nodeHead
			nodeHead = Node(value)
			nodeHead.nextNode = oldHead
		}
	}

	// append(value) adds a new node containing value to the end of the list
	const append = (value = null, node = head()) => {
		if (node.nextNode != null) return append(value, node.nextNode)
		node.nextNode = Node(value)
	}

	//tail returns the last node in the list
	const tail = (node = head()) => {
		if (node.nextNode != null) {
			return tail(node.nextNode)
		}
		return node
	}

	//size returns the total number of nodes in the list
	const size = (node = head(), counter = 1) => {
		if (node.nextNode != null) {
			return size(node.nextNode, counter + 1)
		}
		return counter
	}

	//at(index) returns the node at the given index
	const at = index => {
		let counter = 0
		let node = head()
		while (counter <= size()) {
			if (counter == index) {
				return node
			} else node = node.nextNode
			counter++
		}
		return null
	}

	//find(value) returns the index of the node containing value, or null if not found.
	const find = value => {
		let index = 0
		let node = head()
		while (index <= size()) {
			if (node.value == value) {
				return index
			} else {
				node = node.nextNode
				index++
			}
		}
		return null
	}

	//contains(value) returns true if the passed in value is in the list and otherwise returns false.
	const contains = (value, node = head()) => {
		if (node.value == value) return true
		else if (node.nextNode != null) {
			return contains(value, node.nextNode)
		}
		return false
	}

	//toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
	const toString = (node = head()) => {
		if (node != null) {
			return `${node.value} -> ${toString(node.nextNode)}`
		}
		return null
	}

	//pop removes the last element from the list
	const pop = (node = head()) => {
		if (node.nextNode != tail()) {
			return pop(node.nextNode)
		}
		console.log('Deleted last element: ', node.nextNode)
		node.nextNode = null
	}

	//EXTRA CREDIT:

	// insertAt(value, index) that inserts a new node with the provided value at the given index.
	const insertAt = (value, index) => {
		if (index <= 0 || index > size()) {
			console.log(
				`Cant insert at position ${index}, you're either out of bounds or trying to modify the head / tail of the list.`
			)
			return
		}
		let prev = at(index - 1)
		let current = at(index)
		let newNode = Node(value)
		prev.nextNode = newNode
		newNode.nextNode = current
	}

	//removeAt(index) that removes the node at the given index.
	const removeAt = index => {
		if (index < 0 || index > size()) {
			console.log(
				`Cant remove at position ${index}, you're either out of bounds or trying to modify the head / tail of the list.`
			)
			return
		}
		let prev = at(index - 1)
		let current = at(index)
		let next = at(index + 1)
		prev.nextNode = next
		current = null
	}

	return { prepend, append, head, tail, size, at, find, contains, toString, pop, insertAt, removeAt }
}

export { LinkedList, Node }
