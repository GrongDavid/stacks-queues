/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	push(val) {
		let node = new Node(val)

		if (!this.first) {
			this.first = node
			this.last = node
		} else {
			let tmp = this.first
			this.first = node
			this.first.next = tmp
		}

		this.size++
	}

	pop() {
		if (!this.first) throw new Error("Can't pop from an empty stack.")

		let temp = this.first

		if (this.first == this.last) {
			this.last = null
		}

		this.first = this.first.next
		this.size--
		return temp.val
	}

	peek() {
		return this.first.val
	}

	isEmpty() {
		return this.size === 0
	}
}

module.exports = Stack
