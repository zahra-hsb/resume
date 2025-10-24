"use client";
import { isMobileDevice } from "@/helpers/helperFunctions";
import { useCallback, useEffect, useState } from "react"

const useMobileDetector = () => {
    const [isMobile, setMobile] = useState(false)
    useEffect(() => {
        async function getMobileState() {
            console.log(await isMobileDevice())
            return await isMobileDevice() ? setMobile(true) : setMobile(false)
        }
        getMobileState()
    }, [])

    return isMobile
}


export default useMobileDetector