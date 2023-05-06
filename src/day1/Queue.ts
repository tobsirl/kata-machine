type QueueNode<T> = {
    value: T;
    next?: QueueNode<T> | null;
};
export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {}
    deque(): T | undefined {}
    peek(): T | undefined {
        return this.head?.value;
    }
}
