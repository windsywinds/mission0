
function App() {
  

  return (
    <div className="flex flex-col w-full h-screen ">
      <nav className="flex flex-row w-full min-h-[10vh] shadow-xl justify-between px-4 sticky top-0 z-10 bg-white">
        <div className="flex flex-row items-center">
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="grey" />
    </svg>
        <p>My Company</p>
        </div>
          {/*Start of menu display */}
        <div className="flex flex-row">

          {/* Desktop menu display */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <button className="inline-block px-2 py-1 font-semibold border-2 border-slate-800  drop-shadow-md" >Login</button>
            </div>

              {/* Mobile menu display */}
            <div className="flex md:hidden items-center">              
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
            </div>
        </div>
        {/* End of menu display */}

      </nav>
      <section className="flex flex-col w-full h-1/2 bg-[url('/src/assets/splash.jpg')] bg-cover text-white items-center drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)] ">
        <div className="flex flex-col justify-start w-2/3">
        <p className="text-4xl md:text-6xl font-bold ml-8 mt-12 " style={{ textShadow: '0 0.35rem 0.35rem rgba(0, 0, 0, 0.55)' }}>Lorem Ipsum </p>
        <p className="text-4xl md:text-6xl font-bold pl-8  pb-4" style={{ textShadow: '0 0.35rem 0.35rem rgba(0, 0, 0, 0.55)' }}>dolar sit amet</p> 
        </div>

        <div className="flex  justify-center pb-8 w-[80%] sm:max-w-[30%] items-end h-full">
          <div className="relative flex flex-col md:flex-row">
            <input className="bg-slate-300 flex-grow" />

            <button className="inline-block px-2 py-1 font-semibold bg-gradient-to-r from-slate-600 to-slate-700 drop-shadow-md mt-2 md:mt-0">
              SEARCH
            </button>
          </div>
        </div>
      </section>

        {/* Start of card area */}
      <section className="flex pt-8 pb-8 w-full justify-center items-center">
      <div className="flex flex-col w-[90%] md:flex-row items-center justify-center ">

        
            
            <div className="grid md:w-auto w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

              {/* Card 1 */}

            <div className="border-2 border-slate-500 rounded-md overflow-hidden " >
                  <img src="/src/assets/splashlg.jpg" className="w-full min-h-36 md:h-48 object-cover curser-pointer" />
    <div className="w-full p-4 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold" > Title</h3>
        <h3 className="text-lg md:text-sm mb-2 md:mb-3" > slug</h3>
    </div>
    </div>


      {/* Card 2 */}
    <div className="border-2 border-slate-500 rounded-md overflow-hidden" >
                  <img src="/src/assets/splashlg.jpg" className="w-full min-h-36 md:h-48 object-cover curser-pointer" />
    <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold" > Title</h3>
        <h3 className="text-lg md:text-sm mb-2 md:mb-3" > slug</h3>
    </div>
    </div>
      {/* Card 3 */}
    <div className="border-2 border-slate-500 rounded-md overflow-hidden" >
                  <img src="/src/assets/splashlg.jpg" className="w-full min-h-36 md:h-48 object-cover curser-pointer" />
    <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold" > Title</h3>
        <h3 className="text-lg md:text-sm mb-2 md:mb-3" > slug</h3>
    </div>
    </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default App
