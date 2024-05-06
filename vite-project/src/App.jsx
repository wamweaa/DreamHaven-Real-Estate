import React from 'react'
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import PropertyListing from "./components/PropertyListing"
import Testimonials from "./components/Testimonials"
import Contacts from "./components/Contacts"

function App() {
  return (
    <div>
      <NavBar />
      <HomePage/>
      <PropertyListing/>
      <Testimonials/>
      <Contacts/>

    </div>
  )
}

export default App