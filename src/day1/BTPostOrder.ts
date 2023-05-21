function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path; // base case no node

    // recursive case
    // pre

    // recurse
    walk(curr.left, path); // left
    walk(curr.right, path); // right
    path.push(curr.value);

    // post
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
