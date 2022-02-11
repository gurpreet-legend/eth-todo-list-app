const Navbar = ({account}) => {
    return (

        <nav className="bg-slate-900">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    
                    <div className="flex">
                        <div className="flex items-center grow">
                            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            <span className="text-white text-2xl font-bold ml-2">Eth-Todo-List</span>
                        </div>
                
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      
                        <div className="text-gray-400 hidden md:block">Your Account: {account}</div>
                        <div className="ml-3 relative">
                            <div>
                                <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <a target="_blank" href="https://gurpreetsingh.me/"><img className="h-8 w-8 rounded-full object-cover" src="/my.jpeg" alt="" /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
