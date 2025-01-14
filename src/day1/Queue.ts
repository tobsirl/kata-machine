type QueueNode<T> = {
    value: T;
    next?: QueueNode<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { value: item } as QueueNode<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // dequeue removes the head node and returns its value
    deque(): T | undefined {
        // check if the queue is empty
        if (!this.head) {
            return undefined;
        }
        this.length--;
        // save the value of the head node
        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;
        return head.value;
    }

    // peek returns the value of the head node
    peek(): T | undefined {
        return this.head?.value;
    }
}
