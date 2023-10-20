import React from 'react';
import '../src/App.css';
import { useState } from 'react';

function Button({value,onClick}) {
  return (
     <button className='square' onClick={onClick}>{value}</button>
   )
}

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClike(i) {
   
    if (squares[i] || caculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }
  
  function caculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
      
    }

    return null;
  }

  let winner = caculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = 'Next player:' + (xIsNext ? 'X' : 'O');
  }
  
  return (
    <div>
      <div>
        {status}
      </div>
      <div className='row'>
        <Button value={squares[0]} onClick={()=>handleClike(0)} />
        <Button value={squares[1]} onClick={()=>handleClike(1)} />
        <Button value={squares[2]} onClick={()=>handleClike(2)} />
      </div>
      <div className='row'>
        <Button value={squares[3]} onClick={()=>handleClike(3)} />
        <Button value={squares[4]} onClick={()=>handleClike(4)} />
        <Button value={squares[5]} onClick={()=>handleClike(5)} />
      </div>
      <div className='row'>
        <Button value={squares[6]} onClick={()=>handleClike(6)} />
        <Button value={squares[7]} onClick={()=>handleClike(7)} />
        <Button value={squares[8]} onClick={()=>handleClike(8)} />
      </div>
    </div>
  )
}

export default App;