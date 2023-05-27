import { Column } from "../interfaces/Column"
import { Row } from "../interfaces/Rows"
import Cell from "./Cell"

interface GameProps {
  row:Row
}

function GRow({
  row
}:GameProps 
):JSX.Element {
  return (
  
   <tr>
    {/* map and return a cell inside a certain column */}
    {row.columns.map((column:Column,i:number):JSX.Element =>(
      <Cell key={i} colIndex={i} col={column} />
      ))}
   </tr>
    
  )
}

export default GRow