import React from 'react'
import './App.css'

/* ----- Pages ----- */
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer/Footer'
import Error_404 from './Pages/Error_404/Error_404'
import Search from './Pages/Search/Search'

/* ----- Components ----- */
import Books from './Components/Books/Books'
import Book from './Components/Book/Book'
import Admin from './Components/Admin/Admin'

/* ----- Router ----- */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<Book/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='*' element={<Error_404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App