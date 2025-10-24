"use client";
import { isServerMobile } from "@/helpers/helperFunctions";
import { useCallback, useState } from "react"

const useMobileDetector = () => {
    const [isMobile, setMobile] = useState(false)
    useCallback(() => {
        async function getMobileState() {
            return await isServerMobile() ? setMobile(true) : setMobile(false)
        }
        getMobileState()
    }, [])

    return isMobile
}


export default useMobileDetector