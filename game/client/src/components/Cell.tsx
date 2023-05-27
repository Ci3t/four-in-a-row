import { Column } from "../interfaces/Column"

interface GameProp{
    colIndex:number,
    col:Column
}

function GColumn({colIndex,col}:GameProp):JSX.Element {
    //empty slot
    let tStatus = "open"
    //the players circle set
    if(col.player === 1){
        tStatus = "player1"
    }else if(col.player === 2) {
        tStatus ="player2"
    }
  return (
    <td>
        {/* this div for background draw */}
        <div className="gameBg">
            {/*drawing the circles inside the board + the players circle*/}
            <div className={[tStatus,"circle"].join(" ")}>

            </div>
        </div>
    </td>
  )
}

export default GColumn