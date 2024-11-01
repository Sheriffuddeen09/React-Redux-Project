import Logo from './images/image-3.jpeg'
import Logos from './images/image-1.jpeg'
import {useState} from 'react'
import './user.css'
import UserListVideo from './UserVideo'
import UserMap from './UserMap'
const UserPage = ({users, userDelete, comment, uservideos}) =>{

    const [isImage, setIsImage] = useState(false)
    const [isView, setIsView] = useState(true)
    const [isImages, setIsImages] = useState(false)

    const toggleFlex = () =>{
        setIsImage(!isImage)
    }
    
    const toggleview = () =>{
        setIsView(!isView)
    }
    const toggleFlexs = () =>{
        setIsImages(!isImages)
    }
    
    return (
    <div className='usermain'>
    <span onClick={toggleFlex} className={`'position' ${isImage ? 'imageposition' : 'position'}`}>
        <img src={Logo} alt='phone' height={400} width={600} style={{
            backgroundColor:'black',
        }} className="blogimg"/>
     </span>
    <div className={`'menu-images' ${isImage ? 'menu-images' : 'button-menu'}`}>
    <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
        X
        </button>
    <img src={Logo} alt='phone' height={400} width={400} className="userflex"/>
    <span>

    </span>
    </div>

    <div>
    <span onClick={toggleFlexs} className={`'imageposition' ${isImage ? 'imageposition' : 'absolute'}`}>
        <img src={Logos} alt='phone' height={200} width={200} className="userimg"/>
     </span>
    <div className={`'menu-images' ${isImages ? 'menu-images' : 'button-menu'}`}>
    <button onClick={toggleFlexs} className={`'close-bar' ${isImages ? 'closed' : 'close-bar'}`}> 
        X
        </button>
    <img src={Logos} alt='phone' height={400} width={400} className="userflex"/>
    <span>
    </span>
    </div>
    </div>
    <p className='namepara'> Sheriffuddeen Olawale Love </p>
    <div className='namepar'>
        <p> Works at AGS</p>
        <p> Computer engineering as course of study</p>
        <p> Went to Community Grammar School, Ipaja Lagos</p>
        <p> Lives in Lagos, Nigeria</p>
        <p> Single</p>
        <p onClick={toggleview} className='namepa'> See more about yourself</p>
        <div className={`'view' ${isView ? 'view' : 'viewname'}`}>
        <p className='disc'>- Islam as a religion</p>
        <p>- Address: Agbamu Coker Bus-Stop Orile Surulere Lagos</p>
        <p>- State of Origin: Ogun State </p>
        <p>- Phone Number: 07012554154, 09150965341</p>
        <p>- Email: odukoyasheriff@gmail.com</p>
        <p>- Gender: Male</p>
    </div>  
    </div>
        {
            users.map((post) => (
                <UserMap post={post} userDelete={userDelete} comment={comment} />
            ))
        }
         <div>
        {
            uservideos.map((post) =>(
             <UserListVideo post={post} userDelete={userDelete} comment={comment} />
        ))
        }
        </div>
    </div>
    )
}

export default UserPage