// TODO: SET NAME AND VALUE FOR EACH POSITION AND USE NAME IN THE DIALOG TITLE
export const POSITIONS = {
    BigBlind: 'bigBlind',
    CutOff: 'cutOff',
    Dealer: 'dealer',
    MiddlePosition: 'middlePosition',
    SmallBlind: 'smallBlind',
    UnderTheGun: 'underTheGun',
}

const cards = [
    {
        name: 'AA',
        raise: [POSITIONS.Dealer],
    },
    {
        name: 'AKs',
        raise: [POSITIONS.CutOff, POSITIONS.Dealer],
    },
    {
        name: 'AQs',
        raise: [POSITIONS.CutOff, POSITIONS.BigBlind],
    },
    {
        name: 'AJs',
        raise: [POSITIONS.MiddlePosition],
    },
]

export const CardsDialog = (props) => {
    const {
        onClose,
        selectedPosition,
    } = props

    // TODO: SHOULD ONLY BE ONE
    // const [isDialogOpen, setIsDialogOpen] = React.useState(false)

    const handleCardClick = (event) => {
        const selectedCard = event.target.value
        let shouldRaise = false

        cards.forEach((card) => {
            if (card.name === selectedCard) {
                card.raise.forEach((raisePosition) => {
                    if (raisePosition === selectedPosition) {
                        shouldRaise = true
                    }
                })
            }
        })

        if (shouldRaise) {
            alert('You should raise')
        } else {
            alert('You should not raise')
        }

        onClose()
    }

    return (
        <div className="dialog">
            <div className="cards-root">
                <div className="cards-header">
                    <p>
                        Choose Your Cards in the
                        {/* SEE THE NOTE ABOUT POSITIONS */}
                        {selectedPosition}
                        position
                    </p>
                </div>
                <div className="card-container">
                    {cards.map((card) => {
                        return (
                            <button
                                className="card-button"
                                key={card.name}
                                onClick={handleCardClick}
                                value={card.name}
                            >
                                {card.name}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
