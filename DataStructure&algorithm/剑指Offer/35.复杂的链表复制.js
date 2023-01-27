/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */


function Node(val, next, random) {
	 this.val = val;
   this.next = next;
   this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
let copyRandomList = function(head) {
	if( head === null ) return null;

	let cur = head;
	let newHead = new Node();
	let newCur = newHead;
	let dic = new Map();

	while( cur ) // 复制并建立对应关系
	{
		newCur.val = cur.val;
		newCur.next = cur.next ? new Node() : null;

		dic.set(cur, newCur);

		newCur = newCur.next;
		cur = cur.next;
	}

	newCur = newHead;
	while( head )
	{
		newCur.random = head.random ? dic.get(head.random) : null; // 使用map完成random 节点的构建
		head = head.next;
		newCur = newCur.next;
	}

	return newCur;
};

copyRandomList(new Node(1, 1, 1));
