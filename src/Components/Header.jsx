import logo from '../assets/new_logo.svg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css'

function Header() {
    const navigate = useNavigate();
  return (
    <div className='header'>
        <img src={logo} alt=""/>
        <div className='header-connect'>
            <Button onClick={() => navigate('/')}>Home</Button>
        </div>
    </div>
  )
}
export default Header
