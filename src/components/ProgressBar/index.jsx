const ProgressBar = ({ skill, percent, }) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex w-full justify-between">
                    <h3>{skill}</h3>
                    <h4 className="text-cyan">{percent}%</h4>
                </div>
                <div>
                    <div className="w-full h-1 bg-gray-500 rounded relative overflow-hidden">
                        <div className={`absolute top-0 left-0 h-1 bg-cyan-400 z-50`} style={{ width: `${percent}%` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar