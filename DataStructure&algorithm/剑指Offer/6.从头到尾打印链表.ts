/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
				this.val = (val===undefined ? 0 : val)
		    this.next = (next===undefined ? null : next)
	}
}
function reversePrint(head: ListNode | null): number[] {
	if( head == null)
		return [];
	let ans = [head.val];
	while( head.next != null)
	{
		ans.unshift(head.next.val);
		head = head.next;
	}

	return ans;
}
