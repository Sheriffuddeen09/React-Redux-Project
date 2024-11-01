import { useContext } from "react";
import { useState } from "react"
import { useParams } from 'react-router-dom';
import { orderlists } from './PostOrder';
import Text from "./Text";
import { CartContext } from "../Features/ContextProvider";
const OrderPage = () =>{

    const {id} = useParams()
    const order = orderlists.find(order => (order.id).toString() === id)

    const [isImage, setIsImage] = useState(false)

    const {dispatch} = useContext(CartContext)
    const [toggle, setToggle] = useState(1)

    const handleToggle = (id) => {
        setToggle(id)
    }
    const toggleFlex = () =>{
        setIsImage(!isImage)
    }

    return(
        <div className='postbodyme allpostblog' style={{width: '100%', overflow:'hidden', marginTop:'2px'}}>
            <section className="sideorder">
                <main className="mainorder">
        {order &&
        <div style={{
            translate:'140px',
            display:'flex'
        }}>        
            <div className='productpage'>
        <div>
            <div className={toggle === 1 ? "imagepageview" : "imagecontent"} onClick={toggleFlex}>
                 <img src={order.product} alt='phone' height={300} width={300} />
            </div>
            <div className={toggle === 2 ? "imagepageview" : "imagecontent"} onClick={toggleFlex}>
            <img src={order.producta} alt='phone' height={300} width={300} />
            </div>
            <div className={toggle === 3 ? "imagepageview" : "imagecontent"} onClick={toggleFlex}>
            <img src={order.productb} alt='phone' height={300} width={300} />
            </div>
            <div className={`'menu-imageorder' ${isImage ? 'menu-imageorder' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={order.product} alt='phone' height={400} width={400} className="blogflex"/>
       </div>
       <div className={`'menu-imageorder' ${isImage ? 'menu-imageorder' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={order.producta} alt='phone' height={400} width={400} className="blogflex"/>
       </div>
       <div className={`'menu-imageorder' ${isImage ? 'menu-imageorder' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={order.productb} alt='phone' height={400} width={400} className="blogflex"/>
       </div>
         </div>
            <span>
            <img src={order.product} alt='phone' onClick={() => handleToggle(1)} height={50} width={40} className={toggle === 1 ? "imagepageview" : ''}/>
            <img src={order.producta} alt='phone' onClick={() => handleToggle(2)} height={50} width={40} className={toggle === 2 ? "imagepageview" : ''}/>
            <img src={order.productb} alt='phone' onClick={() => handleToggle(3)} height={50} width={40} className={toggle === 3 ? "imagepageview" : ''}/>
            </span>
           
       </div>

       <div className="ordertrace">
            <p>
                {order.price}
            </p>
            <p>
                {order.category}
            </p>
            <button className={`'cartbutton' ${isImage ? 'orderimage' : 'cartbutton'}`} onClick={() => dispatch({type:"Add", order:order})}> Add To Cart</button>
        
        </div>
        </div>
            }
    <Text />
<table>
                <caption className="caption">
                    Specification Table 
                </caption>
            <tr>
                <th>Product</th>
                <th>Describtion</th>
            </tr>
            <tr>
                <td>Iphone </td>
                <td>three camera with good censor </td>
            </tr>
        </table>
            </main>
            <div className=" sidebarorder">
                sidebar
            </div>
            </section>
        </div>
    )
}
export default OrderPage