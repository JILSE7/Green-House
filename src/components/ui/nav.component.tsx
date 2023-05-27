import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const handleNavigate = (path: string) => navigate(path);
  console.log(pathname)
  return (
    <nav className='header_navbar cursor-pointer'>
      <ul className='flex'>
        <li className={pathname === "/home" ? 'active_path' : ''} onClick={() => handleNavigate("/home")}>Home</li>
        <li className={pathname === "/users" ? 'active_path' : ''} onClick={() => handleNavigate("/users")}>Users</li>
        <li className={pathname === "/glossary" ? 'active_path' : ''} onClick={() => handleNavigate("/glossary")}>Glossary</li>
        <li className={pathname === "/log" ? 'active_path' : ''} onClick={() => handleNavigate("/log")}>Log</li>
      </ul>
    </nav>
  )
}

export default Nav;