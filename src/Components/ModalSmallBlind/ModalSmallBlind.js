const cards = ['AA', 'AKs', 'AQs', 'AJs']

export const ModalSmallBlind = (props) => {
    const { onClose } = props

    const handleCardClick = () => {
        onClose()
    }

    return (
        <div className="dialog">
            <div className="cards-root">
                <div className="cards-header">
                    <p>
                        Choose Your Cards in the Small Blind position
                    </p>
                </div>
                <div className="card-container">
                    {cards.map((card) => {
                        return (
                            <button
                                className="card-button"
                                key={card}
                                onClick={handleCardClick}
                            >
                                {card}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
