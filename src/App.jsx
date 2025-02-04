import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import firebaseConfig from './Authentication/firebase.config'
import Todo from './Todo/Todo'

function App() {
  return (
    <>
      <Todo/>
    </>
  )
}

export default App
