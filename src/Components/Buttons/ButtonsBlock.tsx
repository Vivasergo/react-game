import React, { FC } from 'react'
import classNames from "classnames"

type PropTypes = {
    startNewGame: () => void
    startAutoplay: () => void
    isAutoplay:boolean
}

export const ButtonsBlock: FC<PropTypes> = (props) => {

    const autoplayBtnCl = classNames("btn", "btn-outline-danger", "ms-3", {
        "active": props.isAutoplay
    })

    return (
        <div className="row my-3">
            <div className="col">
                <button onClick={props.startNewGame} type="button" className="btn btn-primary">New game</button>
                <button onClick={props.startAutoplay} type="button" className={autoplayBtnCl}>Auto play</button>
            </div>
        </div>
    )
}