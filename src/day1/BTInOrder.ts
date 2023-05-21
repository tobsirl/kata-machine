function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path; // base case no node

    // recursive case
    // pre

    // recurse
    walk(curr.left, path); // left
    path.push(curr.value);
    walk(curr.right, path); // right

    // post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
