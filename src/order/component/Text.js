import { orderlists} from "./PostOrder"
import { Link } from 'react-router-dom'


const Text = () =>{
/*
    setInterval(function () {
        const dateNew = new Date();
    
        const hrs = document.getElementById('hrs')
        const mins = document.getElementById('mins')
        const sec = document.getElementById('sec')
    
        hrs.innerHTML = (dateNew.getHours() < 10?"0":"")+dateNew.getHours();
        mins.innerHTML = (dateNew.getUTCMinutes()< 10?"0":"")+dateNew.getUTCMinutes();
        sec.innerHTML = (dateNew.getUTCSeconds()< 10?"0":"")+dateNew.getUTCSeconds();
    })    

    */
    const content = (
        <div className="displaylist"> 
            {
                orderlists.map((order) =>(
                    <div>
                        <Link to={`/order/${order.id}`}> 
                            <img src={order.product} alt="product" width={175} height={260}/>
                        </Link>
                        <span className='displaycart'>
                        <p> {order.price}</p>
                        <p> {order.category}</p>
                        </span>
                    </div>
                ))
            }
        </div>
    )
    return (
        <div>
            {content}
        </div>
    )
}
export default Text