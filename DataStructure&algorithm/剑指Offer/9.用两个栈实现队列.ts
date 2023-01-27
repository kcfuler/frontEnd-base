class CQueue {
	inQue: number[]
	outQue: number[]
	constructor() {
		this.inQue = new Array<number>();
		this.outQue = new Array<number>();
	}

	appendTail(value: number): void {
		this.inQue.push(value);
	}

	deleteHead(): number {
		if( this.inQue.length === 0 ) return -1;

		this.outQue = [...this.inQue].reverse();
		let value = this.outQue.pop();
		this.inQue = [...this.outQue].reverse();
		return value;
	}
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
