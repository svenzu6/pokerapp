import { useState } from 'react'

const useModalBigBlind = () => {
    const [isBBShowing, setIsBBShowing] = useState(false)

    function toggleBB() {
        setIsBBShowing(!isBBShowing)
    }

    return {
        isBBShowing: isBBShowing,
        toggleBB: toggleBB,
    }
}

export default useModalBigBlind