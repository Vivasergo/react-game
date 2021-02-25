import React, { FC } from 'react'

type PropsType = {
    currentPlayer: string
    winner: string
}

export const GameResultBlock: FC<PropsType> = (props) => {
    return (
        <div className="row my-3">
            {props.winner === "" && <h4>Current turn: Player "{props.currentPlayer}"</h4>}
            {(props.winner !== "" && props.winner !== "Tie") && <h4 className="winner-title fw-bold">The winner is: Player {props.winner}</h4>}
            {props.winner === "Tie" && <h4 className="tie-title fw-bold">Tie this time !</h4>}
        </div>
    )
}