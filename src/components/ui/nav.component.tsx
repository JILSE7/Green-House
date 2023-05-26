import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => navigate(path);

  return (
    <nav className='header_navbar cursor-pointer'>
      <ul className='flex'>
        <li onClick={() => handleNavigate("/home")}>Home</li>
        <li onClick={() => handleNavigate("/users")}>Users</li>
        <li onClick={() => handleNavigate("/glossary")}>Glossary</li>
        <li onClick={() => handleNavigate("/log")}>Log</li>
      </ul>
    </nav>
  )
}

export default Nav;