import './App.css'
import ListUpMenu from "./components/header/ListUpMenu.jsx"
//
function App() {
  return (
    <>
      <header>
        <nav className="topMenu">
        <img src="https://kauanap.github.io/Excel/img/excel.png" width="40px" height="40px" alt="Blue Excel Logo" />
          <ListUpMenu />
        </nav>
        <div className='menuFunctions'>
          <div className='primaryFunctions'></div>
          <div></div>
        </div>
      </header>
      <main>
        <input type="text" />
        
      </main>
    </>
  )
}
//
export default App