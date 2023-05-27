
import { useState } from "react";

import { Board } from "../interfaces/Board.ts";
import { COLUMN7, ROWS6 } from "../utils/const.ts";
import { Row } from "../interfaces/Rows.ts";
import GRow from "./GRow.tsx";

function GameBoard(): JSX.Element {
  //Drawing the board as Array of Objects
  const initialBoard:Board = {
    rows: Array.from({ length: ROWS6 }, (_, i) => ({
      columns: Array.from({ length: COLUMN7 }, (_, i) => ({
        player: null,
      })),
    })),
  };
  
  
  const [board, setBoard] = useState<Board>(initialBoard);
  return <>
  {/* Mapping the the rows inside the board to get the correct row */}
    {board.rows.map((row:Row,i:number)=>(
      <GRow key={i} row={row}/>
    ))}
  </>
}

export default GameBoard;
