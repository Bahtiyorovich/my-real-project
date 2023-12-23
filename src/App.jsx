import { Routes, Route } from "react-router-dom"
import { About, Clients, Contact, Footer, Login, Main, Navbar, Process, Services } from "./components"

const App = () => {
  return (
    <>
      <Navbar/>
      
       <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/process" element={<Process/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes> 

      <Footer/>
    </>

  )
}

export default App