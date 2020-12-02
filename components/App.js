import React from 'react'
import NavBar from './NavBar';
import Search from './Search';
import '../index.css';

const formFields = [{title:'Foto-search'}, {placeholder:'Search for fotos'}]

const App = () => {


  return (
    <div >
        <Search formFields={formFields} />
    </div>
  )
}

export default App
