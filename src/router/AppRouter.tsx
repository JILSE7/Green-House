
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/page';
import UserPage from '../pages/users/page';
import GlossaryPage from '../pages/glossary/page';
import { Header } from '../components';


const AppRouter = () => {
  return (
    <div className='app'>
      <BrowserRouter  basename={import.meta.env.DEV ? '/' : '/Green-House/'} >
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/glossary' element={<GlossaryPage />} />
          <Route path='/' element={<GlossaryPage />} />
          <Route path='/log' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter