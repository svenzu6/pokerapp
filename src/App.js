import useModalBigBlind from './Components/ModalBB/useModalBigBlind.js'
import useModalDealer from './Components/ModalDealer/useModalDealer.js'
import useModalMiddlePosition from './Components/ModalMP/useModalMiddlePosition'
import useModalSmallBlind from './Components/ModalSB/useModalSmallBlind'
import useModalUnderTheGun from './Components/ModalUTG/useModalUnderTheGun'
import useModalCutOff from './Components/ModalCutOff/useModalCutOff'

// test;sdkljnhslkdnhklsndh
function App() {
    const { isCOShowing, toggleCO } = useModalCutOff()
    const { isBBShowing, toggleBB } = useModalBigBlind()
    const { isDShowing, toggleD } = useModalDealer()
    const { isSBShowing, toggleSB } = useModalSmallBlind()
    const { isMPShowing, toggleMP } = useModalMiddlePosition()
    const { isUTGShowing, toggleUTG } = useModalUnderTheGun()

    return (
        <div className="pozadina">
            <div className="table-2">
                <button
                    className="btn-bigblind"
                    onClick={toggleBB}
                >
                    BIG BLIND
                </button>
                <ModalBigBlind
                    hideBB={toggleBB}
                    isBBShowing={isBBShowing}
                />
                <button
                    className="btn-underthegun"
                    onClick={toggleUTG}
                >
                    UNDER THE GUN
                </button>
                <ModalUnderTheGun
                    hideUTG={toggleUTG}
                    isUTGShowing={isUTGShowing}
                />
                <button
                    className="btn-middleposition"
                    onClick={toggleMP}
                >
                    MIDDLE POSITION
                </button>
                <ModalMiddlePosition
                    hideMP={toggleMP}
                    isMPShowing={isMPShowing}
                />
                <button
                    className="btn-smallblind"
                    onClick={toggleSB}
                >
                    SMALL BLIND
                </button>
                <ModalSmallBlind
                    hideSB={toggleSB}
                    isSBShowing={isSBShowing}
                />
                <button
                    className="btn-dealer"
                    onClick={toggleD}
                >
                    DEALER
                </button>
                <ModalDealer
                    hideD={toggleD}
                    isDShowing={isDShowing}
                />
                <button
                    className="btn-cutoff"
                    onClick={toggleCO}
                >
                    CUT OFF
                </button>
                <ModalCutOff
                    hideCO={toggleCO}
                    isCOShowing={isCOShowing}
                />

            </div>
        </div>
    )
}

export default App
