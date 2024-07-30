import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {addToCart, delItem} from "../../redux/cartSlice";export default function Cart() {
    const dispatch=useDispatch();
    const cart = useSelector((state) => state.cart)
  return (
    <div>
        {
            cart.cartList.map(item =>(
                <div> 
                    <h1>{item.name}</h1>
                    <button onClick={()=>dispatch(delItem(item.id))}>Del</button>
                </div>
            ))
        }
    </div>
  )
}
