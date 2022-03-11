const Header = () => {
    return (
        <div className="h-screen bg-left-bottom bg-[url('https://cdn.discordapp.com/attachments/813998309038620682/950946353029189662/gip.png')]">
            <div className="h-screen w-full bg-gray-900/[0.25] absolute"></div>
            <div className="px-6 sm:px-0 sm:container sm:mx-auto">
                <div className="flex items-center h-screen">
                    <div className="sm:w-3/6 align-middle text-left z-[2]">
                        <h1 className="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-gray-50">GHOST ID Project</h1>
                        <p className="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-300">Game about fighting the ghost using weapon. This game is inspired by zombie game in Roblox.</p>
                        <div className="block text-center sm:text-left">
                            <a target="_blank" href="https://ba-ka.org/gip" className="inline-block mt-8 mb-6 sm:mb-0 text-lg border border-gray-50 py-2 px-6 bg-transparent text-gray-50 hover:bg-gray-50 hover:text-gray-900 duration-200">
                                <span className="text-md sm:text-lg duration-200">play</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
