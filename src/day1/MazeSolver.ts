const dir = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // 1. base case off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // 2. base case hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. base case found the end
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    // 4. recursive case
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 recursive cases
    // pre
    path.push(curr);
    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    // post
    path.pop();
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
