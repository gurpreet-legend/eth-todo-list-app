const Task = ({taskNumber, taskContent, completed, toggleCompleted}) => {

    return (
        <>
            < div onClick={()=> toggleCompleted(taskNumber)} className="relative bg-white border border-gray-300 hover:ring-2 hover:ring-indigo-500 rounded-lg p-4 flex cursor-pointer" >
                <div className="flex-1 flex">
                    <div className="flex flex-col">
                        <span id="project-type-0-label" className="block text-sm font-medium text-gray-900"> Task {taskNumber} : </span>
                        <span id="project-type-0-description-0" className={completed?"mt-1 flex items-center text-sm text-gray-500 line-through": "mt-1 flex items-center text-sm text-gray-500"}> {taskContent} </span>
                    </div>
                </div>
                {
                    completed? 
                    <svg className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg> :
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                }
                <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
            </div >
        </>
    )
}

export default Task;
