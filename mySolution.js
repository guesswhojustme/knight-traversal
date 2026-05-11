//This almost.
function knightMoves(start, end){
    const queue = [];
    const visited = [];
    queue.push(start);
    let notFound = true;

    while(notFound){
        const move = validMove(queue[0]);
        console.log(visited);
        for(let i = 0; i < move.length; i++){
            if(move[i][0] === end[0] && move[i][1] === end[1]){
                notFound = false;
                return count;
            }
            
            for(let j = 0; j < visited.length - 1; j++){
                if(move[i][0] !== visited[i][0] && move[i][1] !== visited[i][1]){
                    queue.push(move);
                    break;
                }
            }
        }
        console.log(queue[0]);
        queue.push()
        visited.push(queue[0]);
        queue.shift();
    }
    return count;
}

//Got this right.
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


console.log(validMove([1, 2]));
