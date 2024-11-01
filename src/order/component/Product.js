const Product = ({order}) =>{

    return(
        <div>
            <div className="product"> 
             <img src={order.images} alt='order' width={180} height={260}/>
             <div className="">
                <p> {order.category}</p>
                <p> ${order.price}</p>
            </div>
            </div>
        </div>
    )
}
export default Product