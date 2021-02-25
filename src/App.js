import * as React from 'react'

import {
    CardsDialog,
    POSITIONS,
} from './Components/CardsDialog/CardsDialog'

export const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedPosition, setSelectedPosition] = React.useState('')

    const handlePositionSelect = (event) => {
        setIsOpen(!isOpen)
        setSelectedPosition(event.target.value)
    }

    const handleDialogClose = () => {
        setIsOpen(false)
    }

    return (
        <>

            <div className="table">
                <button
                    className="button"
                    onClick={handlePositionSelect}
                    value={POSITIONS.BigBlind}
                >
                    BIG BLIND
                </button>
                <button
                    className="button"
                    onClick={handlePositionSelect}
                    value={POSITIONS.UnderTheGun}
                >
                    UNDER THE GUN
                </button>
                <button
                    className="button"
                    onClick={handlePositionSelect}
                    value={POSITIONS.MiddlePosition}
                >
                    MIDDLE POSITION
                </button>
                <button
                    className="button"
                    onClick={handlePositionSelect}
                    value={POSITIONS.SmallBlind}
                >
                    SMALL BLIND
                </button>
                <button
                    className="button"
                    onClick={handlePositionSelect}
                    value={POSITIONS.Dealer}
                >
                    DEALER
                </button>
                <button
                    className="button"
                    onClick={handlePositionSelect}
                    value={POSITIONS.CutOff}
                >
                    CUT OFF
                </button>
            </div>
            {isOpen
                ? (
                    <CardsDialog
                        onClose={handleDialogClose}
                        selectedPosition={selectedPosition}
                    />
                )
                : null}
        </>
    )
}
