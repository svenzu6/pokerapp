import { useState } from 'react'

const useModalSmallBlind = () => {
    const [isSBShowing, setIsSBShowing] = useState(false)

    function toggleSB() {
        setIsSBShowing(!isSBShowing)
    }

    return {
        isSBShowing: isSBShowing,
        toggleSB: toggleSB,
    }
}

export default useModalSmallBlind