import logo from './images/images5.png'
import SideBar from '../SideBar'
import UserPage from './UserPage'
import Footer from '../dashboard/Footer'
const HomeUser = ({users, userDelete, comment, uservideos}) =>{
    
    return(

        <div className='sidebar'>
        <div className="usersidebar">
           <UserPage users={users} uservideos={uservideos} userDelete={userDelete} comment={comment} />

        </div>
       
        <div className='navHome' style={{
            height:'230vh'
        }}>
        <div style={{
        display: 'flex',
        flexDirection:'column',
        translate: '90px',
    }}>
    <img src={logo} style={{
        translate: '50px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p style={{
        translate: '30px',
        color: 'blue',
        width: '20ch',
        fontWeight: 'bold'
    }}> User Page</p>
    </div>
    <div>
        <SideBar />
        <Footer />
        </div>
        </div>
        </div>
    )
}
export default HomeUser