function knightMoves(start, end){
    let queue = [];
    validMove(start);
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


console.log(validMove([7,7]));
