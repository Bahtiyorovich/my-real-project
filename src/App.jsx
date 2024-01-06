import { Routes, Route } from "react-router-dom"
import { About, Auth, Clients, Contact, Footer, Main, Navbar, Process, Services } from "./components"
import { useState } from "react"

const App = () => {

  const [user, setUser] = useState(false);

  if(!user) {
    return (
      <Auth/>
    )
  }

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