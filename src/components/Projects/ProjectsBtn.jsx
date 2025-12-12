"use client"
import { useProjectContext } from "@/lib/Providers"
import { useContext } from "react"
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"


const ProjectBtn = () => {
    const { setShowProjects, isShowProjects } = useProjectContext()
    function handleShowProjects() {
        setShowProjects(prev => !prev)
    }
    return (
        <button
            onClick={handleShowProjects}
            className="flex flex-col items-center justify-center hover: gap-2 rounded-full p-2 backdrop-blur-md bg-opacity-15 w-[150px]  bg-cyan-300"
        >
            {isShowProjects ?
                "بازگشت"
                :
                "پروژه ها"
            }
            {isShowProjects ?
                <MdOutlineKeyboardDoubleArrowUp size={20} className="animate-bounce"/>
                :
                <MdOutlineKeyboardDoubleArrowDown size={20} className="animate-bounce" />

            }
        </button>
    )
}

export default ProjectBtn