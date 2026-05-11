function knightMoves(start, end) {
    const queue = [];
    const visited = [];

    // store: [position, moves]
    queue.push([start, 0]);
    visited.push(start);

    while (queue.length > 0) {
        const [current, count] = queue.shift();

        // reached target
        if (current[0] === end[0] && current[1] === end[1]) {
            return count;
        }

        const moves = validMove(current);

        for (let i = 0; i < moves.length; i++) {
            const nextMove = moves[i];

            // check if already visited
            let alreadyVisited = false;

            for (let j = 0; j < visited.length; j++) {
                if (
                    visited[j][0] === nextMove[0] &&
                    visited[j][1] === nextMove[1]
                ) {
                    alreadyVisited = true;
                    break;
                }
            }

            // add new positions
            if (!alreadyVisited) {
                visited.push(nextMove);
                queue.push([nextMove, count + 1]);
            }
        }
    }
}

function validMove(arr){
    const [x, y] = arr;
    const moves = [];
    const pm = [[x - 1, y - 2],
                [x - 2, y - 1],
                [x - 1, y + 2],
                [x - 2, y + 1],
                [x + 1, y + 2],
                [x + 2, y + 1],
                [x + 1, y - 2],
                [x + 2, y - 1]]
    for(let i = 0; i < pm.length; i++){
        const newArr = [];
        for(let j = 0; j < pm[i].length; j++){
            const elem = pm[i][j];
            if(elem >= 0 && elem <= 7){
                newArr.push(elem);
            }
        }
        if(newArr.length === 2){
            moves.push(newArr);
        }
    }
    
    return moves;
}

console.log(knightMoves([0, 0], [1, 0]));