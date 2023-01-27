class MinStack {
	stack : number[]
	auxStack : number[]
	constructor() {
		this.stack = new Array<number>();
		this.auxStack = new Array<number>();
	}

	push(x: number): void {
		this.stack.push(x);
		if( this.auxStack.length == 0 || this.auxStack[this.auxStack.length - 1] >= x ) // 这里用到单调栈的思想
		{
			this.auxStack.push(x);
		}
	}

	pop(): void {
		let num = this.stack.pop();
		if( num === this.auxStack[this.auxStack.length - 1] )
		{
			this.auxStack.pop()
		}
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	min(): number {
		return this.auxStack[this.auxStack.length - 1];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
