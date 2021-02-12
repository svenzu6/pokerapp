import { useState } from 'react'

const useModalUnderTheGun = () => {
    const [isUTGShowing, setIsUTGShowing] = useState(false)

    function toggleUTG() {
        setIsUTGShowing(!isUTGShowing)
    }

    return {
        isUTGShowing: isUTGShowing,
        toggleUTG: toggleUTG,
    }
}

export default useModalUnderTheGun