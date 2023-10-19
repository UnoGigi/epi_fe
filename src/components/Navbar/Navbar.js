import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-3 px-10 text-white flex flex-wrap justify-between">
      <div>
        <h1 className="text-3xl">FACCIALIBRO</h1>
      </div>
      <ul className="flex gap-4 items-center">
        <li>MENU</li>
        <li><img src="https://thumbs.dreamstime.com/z/icona-dell-utente-di-vettore-7337510.jpg?w=768" alt="porfilo" className="w-10 h-10 rounded-full" /></li>
      </ul>

    </nav>
  )
}

export default Navbar