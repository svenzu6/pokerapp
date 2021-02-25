// TODO: SET NAME AND VALUE FOR EACH POSITION AND USE NAME IN THE DIALOG TITLE

export const POSITIONS = {
    BigBlind: 'Big Blind',
    CutOff: 'Cut Off',
    Dealer: 'Dealer',
    MiddlePosition: 'Middle Position',
    SmallBlind: 'Small Blind',
    UnderTheGun: 'Under The Gun',
}

const cards = [
    {
        name: 'AA',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'AKs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'AQs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'AJs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'ATs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A9s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A8s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A7s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A6s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A5s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A4s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A3s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'A2s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'AKo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'KK',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'KQs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'KJs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'KTs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'K9s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'K8s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'K7s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'K6s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: 'K5s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: 'K4s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: 'K3s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: 'K2s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: 'AQo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'KQo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'QQ',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'QJs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'QTs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'Q9s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'Q8s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: 'Q7s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'Q6s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'Q5s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'Q4s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'Q3s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
        ],
    },
    {
        name: 'Q2s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind],

    },
    {
        name: 'AJo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],

    },
    {
        name: 'KJo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],

    },
    {
        name: 'QJo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],

    },
    {
        name: 'JJ',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],

    },
    {
        name: 'JTs',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],

    },
    {
        name: 'J9s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],

    },
    {
        name: 'J8s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'J7s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'J6s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'J5s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
        ],

    },
    {
        name: 'J4s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
        ],

    },
    {
        name: 'J3s',
        raise: [
        ],

    },
    {
        name: 'J2s',
        raise: [
        ],

    },
    {
        name: 'ATo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: 'KTo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'QTo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'JTo',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'TT',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.UnderTheGun, POSITIONS.MiddlePosition],
    },
    {
        name: 'T9s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.UnderTheGun, POSITIONS.MiddlePosition],
    },
    {
        name: 'T8s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.MiddlePosition],
    },
    {
        name: 'T7s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'T6s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'T5s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind],
    },
    {
        name: 'T4s',
        raise: [],
    },
    {
        name: 'T3s',
        raise: [],
    },
    {
        name: 'T2s',
        raise: [],
    },
    {
        name: 'A9o',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'K9o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'Q9o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'J9o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: 'T9o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: '99',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.UnderTheGun, POSITIONS.MiddlePosition, POSITIONS.CutOff],

    },
    {
        name: '98s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.CutOff],

    },
    {
        name: '97s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.MiddlePosition, POSITIONS.CutOff],

    },
    {
        name: '96s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: '95s',
        raise: [POSITIONS.BigBlind,
            POSITIONS.SmallBlind],

    },
    {
        name: '94s',
        raise: [],

    },
    {
        name: '93s',
        raise: [],

    },
    {
        name: '92s',
        raise: [],

    },
    {
        name: 'A8o',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'K8o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind],
    },
    {
        name: 'Q8o',
        raise: [],
    },
    {
        name: 'J8o',
        raise: [],
    },
    {
        name: 'T8o',
        raise: [POSITIONS.Dealer],
    },
    {
        name: '98o',
        raise: [POSITIONS.Dealer, POSITIONS.SmallBlind],
    },
    {
        name: '88',
        raise: [POSITIONS.UnderTheGun, POSITIONS.Dealer, POSITIONS.SmallBlind,
            POSITIONS.MiddlePosition, POSITIONS.CutOff, POSITIONS.BigBlind],
    },
    {
        name: '87s',
        raise: [POSITIONS.Dealer, POSITIONS.SmallBlind,
            POSITIONS.MiddlePosition, POSITIONS.CutOff, POSITIONS.BigBlind],
    },
    {
        name: '86s',
        raise: [POSITIONS.Dealer, POSITIONS.SmallBlind,
            POSITIONS.CutOff, POSITIONS.BigBlind],
    },
    {
        name: '85s',
        raise: [POSITIONS.Dealer, POSITIONS.SmallBlind,
            POSITIONS.BigBlind],
    },
    {
        name: '84s',
        raise: [POSITIONS.SmallBlind,
            POSITIONS.BigBlind],
    },
    {
        name: '83s',
        raise: [],
    },
    {
        name: '82s',
        raise: [],
    },
    {
        name: 'A7o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'K7o',
        raise: [],
    },
    {
        name: 'Q7o',
        raise: [],
    },
    {
        name: 'J7o',
        raise: [],
    },
    {
        name: 'T7o',
        raise: [],
    },
    {
        name: '97o',
        raise: [],
    },
    {
        name: '87o',
        raise: [],
    },
    {
        name: '77o',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: '76s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: '75s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: '74s',
        raise: [POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: '73s',
        raise: [],
    },
    {
        name: '72s',
        raise: [],
    },
    {
        name: 'A6o',
        raise: [POSITIONS.Dealer, POSITIONS.SmallBlind, POSITIONS.BigBlind],
    },
    {
        name: 'K6o',
        raise: [],
    },
    {
        name: 'Q6o',
        raise: [],
    },
    {
        name: 'J6o',
        raise: [],
    },

    {
        name: 'T6o',
        raise: [],
    },
    {
        name: '96o',
        raise: [],
    },

    {
        name: '86o',
        raise: [],
    },
    {
        name: '76o',
        raise: [],
    },
    {
        name: '66',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: '65s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: '64s',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: '63s',
        raise: [],
    },
    {
        name: '62s',
        raise: [],
    },
    {
        name: 'A5o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'K5o',
        raise: [],
    },
    {
        name: 'Q5o',
        raise: [],
    },
    {
        name: 'J5o',
        raise: [],
    },
    {
        name: 'T5o',
        raise: [],
    },
    {
        name: '95o',
        raise: [],
    },
    {
        name: '85o',
        raise: [],
    },
    {
        name: '75o',
        raise: [],
    },
    {
        name: '65o',
        raise: [],
    },
    {
        name: '55',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: '54s',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: '53s',
        raise: [],
    },
    {
        name: '52s',
        raise: [],
    },
    {
        name: 'A4o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'K4o',
        raise: [],
    },
    {
        name: 'Q4o',
        raise: [],
    },
    {
        name: 'J4o',
        raise: [],
    },
    {
        name: 'T4o',
        raise: [],
    },
    {
        name: '94o',
        raise: [],
    },
    {
        name: '84o',
        raise: [],
    },
    {
        name: '74o',
        raise: [],
    },
    {
        name: '64o',
        raise: [],
    },
    {
        name: '54o',
        raise: [],
    },
    {
        name: '44',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind, POSITIONS.UnderTheGun],
    },
    {
        name: '43s',
        raise: [],
    },
    {
        name: '42s',
        raise: [],
    },
    {
        name: 'A3o',
        raise: [POSITIONS.Dealer, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
    },
    {
        name: 'K3o',
        raise: [],
    },
    {
        name: 'Q3o',
        raise: [],
    },
    {
        name: 'J3o',
        raise: [],
    },
    {
        name: 'T3o',
        raise: [],
    },
    {
        name: '93o',
        raise: [],
    },
    {
        name: '83o',
        raise: [],
    },
    {
        name: '73o',
        raise: [],
    },
    {
        name: '63o',
        raise: [],
    },
    {
        name: '53o',
        raise: [],
    },
    {
        name: '43o',
        raise: [],
    },
    {
        name: '33',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.MiddlePosition, POSITIONS.SmallBlind],
    },
    {
        name: '32s',
        raise: [],
    },
    {
        name: 'A2o',
        raise: [POSITIONS.SmallBlind, POSITIONS.BigBlind],
    },
    {
        name: 'K2o',
        raise: [],
    },

    {
        name: 'Q2o',
        raise: [],
    },
    {
        name: 'J2o',
        raise: [],
    },
    {
        name: 'T2o',
        raise: [],
    },
    {
        name: '92o',
        raise: [],
    },
    {
        name: '82o',
        raise: [],
    },
    {
        name: '72o',
        raise: [],
    },
    {
        name: '62o',
        raise: [],
    },
    {
        name: '52o',
        raise: [],
    },
    {
        name: '42o',
        raise: [],
    },
    {
        name: '32o',
        raise: [],
    },
    {
        name: '22',
        raise: [POSITIONS.Dealer, POSITIONS.CutOff, POSITIONS.BigBlind,
            POSITIONS.SmallBlind],
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
            alert('You should RAISE')
        } else {
            alert('You should FOLD')
        }

        onClose()
    }

    return (
        <div className="dialog">
            <div className="cards-root">
                <div className="cards-header">
                    <p>
                        Choose Your Cards in the
                        {' '}
                        {selectedPosition}
                        {' '}
                        position
                        {/* SEE THE NOTE ABOUT POSITIONS */}

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
