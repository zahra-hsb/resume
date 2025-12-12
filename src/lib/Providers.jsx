
"use client"
import Main from "@/components/Main"
import ProjectBtn from "@/components/Projects/ProjectsBtn"
import { createContext, useContext, useState } from "react"


const ProjectsContext = createContext(null)



const Providers = ({ children }) => {
    const [isShowProjects, setShowProjects] = useState(false)
    return (
        <ProjectsContext.Provider value={{ isShowProjects, setShowProjects }}>
            <Main />
            {children}
            
        </ProjectsContext.Provider>
    )
}

export const useProjectContext = () => useContext(ProjectsContext)
export default Providers