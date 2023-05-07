type Node<T> = {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    public length: number;


    

    constructor() {
    }

    push(item: T): void {

}
    pop(): T | undefined {

}
    peek(): T | undefined {

}
}