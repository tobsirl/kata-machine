type QueueNode<T> = {
    value: T;
    next?: QueueNode<T> | null;
};
export default class Queue<T> {
    public length: number;

    constructor() {}

    enqueue(item: T): void {}
    deque(): T | undefined {}
    peek(): T | undefined {}
}
