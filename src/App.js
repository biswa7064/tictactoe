import React,{useState} from "react";
import Board from './components/Board'
import './styles/root.scss'
import { calculateWinner } from "./helpers";

const App = () => {
   const [board , setBoard] = useState(Array(9).fill(null));
   const [isXNext, setisXNext] = useState(false);

   const winner = calculateWinner(board);

   const message = winner? `Winner is ${winner}`: `Next player is : ${isXNext ? "X": "0"}`;

   const handleSquareclick = (position)=>{
       if(board[position] || winner){
           return;
       }
        setBoard((prev)=>{
            return prev.map((square,pos)=>{
                if(pos === position){
                    return isXNext?"X": '0';
                }
                return square;                
            });
        });
        setisXNext((prev)=>!prev)
    };
    return(
  <div className = "app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board = {board} handleSquareclick = {handleSquareclick} />
  </div>
);
}

export default App;