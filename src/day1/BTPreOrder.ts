function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path; // base case no node

    // recursive case
    // pre
    path.push(curr.value);

    // recurse
    walk(curr.left, path); // left
    walk(curr.right, path); // right

    // post
    return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
