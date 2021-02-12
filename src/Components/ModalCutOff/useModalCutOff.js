import { useState } from 'react'

const useModalCutOff = () => {
    const [isCOShowing, setIsCOShowing] = useState(false)

    function toggleCO() {
        setIsCOShowing(!isCOShowing)
    }

    return {
        isCOShowing: isCOShowing,
        toggleCO: toggleCO,
    }
}

export default useModalCutOff