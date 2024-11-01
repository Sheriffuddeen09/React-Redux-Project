import { Link } from "react-router-dom"
const SideBarOrder = () =>{
   
    return (
        <div>
        <div className='menu'>

        <ul className='' style={{
        display: 'flex',
        flexDirection:'column',
    }}>
            <li>
            <Link to='/user' className='sidedash sidelink'>UserPage</Link>
            </li>
            <li>
            <Link to='/mes' className="sidedash">Message</Link>
            </li>
            <li>
            <Link to='/video' className="sidedash">Video</Link>
            </li>
            <li>
            <Link to='/form' className="sidedash">ShipForm</Link>
            </li>
            <li>
            <Link to={'/order'} className="sidedash">Order</Link>
            </li>
            <li>
            <Link to='/about' className='sidedash'>About</Link>
            </li>
            <li>
            <Link to='privacy' className="sidedash">Policy</Link>
            </li>
            
            </ul>
        
        </div>
  
  </div>
    )
}
export default SideBarOrder