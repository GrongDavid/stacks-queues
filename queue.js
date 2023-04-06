/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	enqueue(val) {
		let node = new Node(val)

		if (!this.first) {
			this.first = node
			this.last = node
		} else {
			this.last.next = node
			this.last = node
		}

		this.size++
	}

	dequeue() {
		if (!this.first) throw new Error("Can't dequeue from an empty queue.")

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

module.exports = Queue
