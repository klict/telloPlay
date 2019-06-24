import {LinkedListNode} from './linked-list-node';

export class LinkedList<T> {
  private head: LinkedListNode<T> = null;

  constructor() {
  }

  /**
   * add value to end of the list
   * @param value value to be added
   */
  addLast(value: T): void {

    if (this.head != null) {
      // set first node
      let node: LinkedListNode<T> = this.head;

      // loop through until find last node
      while (node.next != null) {
        node = node.next;
      }

      // create new node and added to end of the list
      node.next = new LinkedListNode(value);
    } else {

      // create new node and set as head
      this.head = new LinkedListNode(value);
    }
  }

  /**
   * add value to the start of the list
   * @param value value to be added
   */
  addFirst(value: T): void {
    if (this.head == null) {
      this.head = new LinkedListNode(value);

    } else {
      // create new temporary node
      const tempHeadNode = new LinkedListNode(value);

      // add current head note to next new node
      tempHeadNode.next = this.head;

      // set new node as head node
      this.head = tempHeadNode;
    }

  }

  /**
   * Remove all elements from the list
   */
  clear(): void {
    this.head = null;
  }

  /**
   * Retrieves and removes the head (first element) of this list.
   */
  poll(): T {
    if (this.head) {
      const requestedNode = this.head;

      /**
       *  check if there is next node in the list
       */
      if (requestedNode.next) {
        /**
         *  set the next node as head note
         */
        this.head = requestedNode.next;
      } else {
        this.head = null;
      }

      return requestedNode.data;

    } else {
      return null;
    }
  }


  /**
   * Retrieves without removing the head (first element) of this list.
   */
  peek(): T {
    if (this.head) {
      const requestedNode = this.head;
      return requestedNode.data;

    } else {
      return null;
    }
  }
}
