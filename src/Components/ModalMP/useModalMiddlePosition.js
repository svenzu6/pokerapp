import { useState } from 'react'

const useModalMiddlePosition = () => {
    const [isMPShowing, setIsMPShowing] = useState(false)

    function toggleMP() {
        setIsMPShowing(!isMPShowing)
    }

    return {
        isMPShowing: isMPShowing,
        toggleMP: toggleMP,
    }
}

export default useModalMiddlePosition