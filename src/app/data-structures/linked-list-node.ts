
export class LinkedListNode<T> {
  private _data: any;
  private _next: LinkedListNode<T> = null;

  constructor(data: T) {
    this._data = data;
  }

  get next(): LinkedListNode<T> {
    return this._next;
  }

  set next(value: LinkedListNode<T>) {
    this._next = value;
  }


  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }
}
