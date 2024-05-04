import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import PageLayout from './Layouts/PageLayout/PageLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PageLayout>
      <Routes>
        <Route path = '/home' element = {<HomePage />}/>
        <Route path = '/login' element = {<LoginPage />}/>
      </Routes>
    </PageLayout>
  );
}

export default App
