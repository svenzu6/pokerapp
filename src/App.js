import * as React from 'react'

import { ModalSmallBlind } from './Components/ModalSmallBlind'

export const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDialog = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="table">
                <button
                    className="button"
                    onClick={toggleDialog}
                >
                    BIG BLIND
                </button>
                <button
                    className="button"
                    onClick={toggleDialog}
                >
                    UNDER THE GUN
                </button>
                <button
                    className="button"
                    onClick={toggleDialog}
                >
                    MIDDLE POSITION
                </button>
                <button
                    className="button"
                    onClick={toggleDialog}
                >
                    SMALL BLIND
                </button>
                <button
                    className="button"
                    onClick={toggleDialog}
                >
                    DEALER
                </button>
                <button
                    className="button"
                    onClick={toggleDialog}
                >
                    CUT OFF
                </button>
            </div>
            {isOpen
                ? (
                    <ModalSmallBlind onClose={toggleDialog} />
                )
                : null}
        </>
    )
}
