import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'

const CartProduct = ({order}) =>{

    const {cart, dispatch} = useContext(CartContext)

    const Increase = (id) =>{
        const Index = cart.findIndex(p => p.id === id)
        if (cart[Index].quantity < 10){
            dispatch({type: "Increase", id})
        }
    }

    const Decrease = (id) =>{
        const Index = cart.findIndex(p => p.id === id)
        if (cart[Index].quantity > 1){
            dispatch({type: "Decrease", id})
        }
    }

   
    return (

        <div className='cartFlex'>
            
            <img src={order.images}  alt='order' width={200} height={200} className='imagecart'/>
            <div className='cartInline'>
            <h4 className='price'>{order.category} </h4>
            <h4 className='price'>${order.price} </h4>
            <button className='decrease' onClick={() => Decrease(order.id)}> - </button>
            <button className='quantity'>{order.quantity} </button>
            <button className='increase' onClick={() => Increase(order.id)}> + </button>
            </div>
            <button className='removeButton' onClick={() => dispatch({type: "Remove", id: order.id})}> Remove </button>
        </div>
    )
}
export default CartProduct