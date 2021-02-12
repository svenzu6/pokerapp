import { useState } from 'react'

const useModalDealer = () => {
    const [isDShowing, setIsDShowing] = useState(false)

    function toggleD() {
        setIsDShowing(!isDShowing)
    }

    return {
        isDShowing: isDShowing,
        toggleD: toggleD,
    }
}

export default useModalDealer