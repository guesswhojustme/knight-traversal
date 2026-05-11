**understanding the problem:** 
 the goal is to traverse through the graph which is the chessboard, and find the shortest route between two nodes (starting and ending positions)
  -where start and end is the coordinate of the board (e.g. [0, 1] and [0, 0])
  -the board is a 8 x 8 matrix. 
  -vertex is the board ([x, y]) and the edge is the valid knight move.
  -valid knight move (1 step ahead and 2 step to the side or 2 step ahead and 1 step to the side)

**logic:**
	knight valid moves:
		moves changes based on the starting position. example: 
		 start [0, 0] = possible moves are 2 =  [x + 1, y + 2] and [x + 2, y + 1]
		 start [3, 3] = possible moves are 8 [x  - | + 1 | 2, y - | + 2 | 1]. 
	checking the start to end position
	traversing through the graph: 
		using bfs
	checking the coordinates if its going further or closer.
functions: 
	validMove(start):
		 value should only be between 0 to 7;
		 if x or y can be subtracted by 1 or 2 and the output is greater or equal 0, subtract x - y.
**pseudocode for valid move:** 
	1. deconstruct the given argument, declare empty array, list all 8 possible moves, (e.g. [x + 1, y + 2]) 
	2. loop through the list, and calculate all possible moves
	3. if value of x or y is > or = 0 and < or = to 7. 
	4. push to the new lists. 
	5. if the new lists length is = 2, push the new list into the moves array.
	6. return the possible moves. 
 **pseudocode for traversing:**
	 1.read the starting position,
	 2.register the possible moves, log and move
	 3.enqueue the moved coordinate 
	 4.dequeue the prev coordinate.
	 7.start with the first element in the queue. and repeat steps 2 to 4, until a possible move is = to end. 
pseudocode for checking coordinates:
	compare value of end (e.g. [1, 2])
	.loop through the possible moves
	.if current possible move x or y greater & less than 2 moves of end x and y  and end x = x and end y = y skip the move, 
  problem encountered:
	creates an infinite loop, because visited coordinates are visited again,
  solution:
	create a way to keep track of the visited coordinates
	 

coordinate [2,2] valid moves: 
[0,1], [0,3], [1,4], [3,4], [3,0], [4,3], [4,1], [1,0]