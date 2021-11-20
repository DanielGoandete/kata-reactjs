import React,{ useState } from 'react'
import {FaTimes} from 'react-icons/fa'

const Payment = ({nameOfBooks,onDelete}) => {

    const [getTotalValue , setTotalValue] = useState()
    const [getDiscountValue , setDiscountValue] = useState()

    const getCheckout = () =>{
       

        let pricePerID 
        let elem
        let count 
        let discount 
        for(let value = 0; value < nameOfBooks.length; value++){

            elem = nameOfBooks[value].idInsert
            count=0
            discount = 1
            pricePerID =1
            for(let j = 0; j < nameOfBooks.length; j++){
                if(elem !== nameOfBooks[j].idInsert){
                    discount ++
                    pricePerID++
                }
            }
        }

        showPrice(discount,pricePerID)
    }


    const showPrice =(discount,pricePerID)=>{
        
        let total = 0 
        let noDiscont = (nameOfBooks.length - discount)* 50 
        total = pricePerID * 50 // - discount * 50
        if(discount === 1){
             setTotalValue(total)
             setDiscountValue(0)
        }else if(discount === 2){
             discount = total * 0.05
             setTotalValue(total - discount + noDiscont)
             setDiscountValue(5)
        }else if(discount === 3){
             discount = total * 0.1
             setTotalValue(total - discount + noDiscont)
             setDiscountValue(10)
         }else if(discount === 4){
             discount = total * 0.2
             setTotalValue(total - discount + noDiscont)
             setDiscountValue(20)
         }else{
             discount = total * 0.25
             setTotalValue(total - discount + noDiscont)
             setDiscountValue(25)
         }
 
        
     }

    return (
        <div> 
        <button className='btn btn-success buttonBuy' id="checkout" onClick={()=> getCheckout()}>checkout</button>  
        <p>Books: </p>
        <p>Discount: {getDiscountValue}%</p>
        <p>Total to pay:{getTotalValue}</p>
              <table className="table table-dark">
              <thead>
              <tr>
                  <th scope="col">Your Basket:</th>
              </tr>
              </thead>
              <tbody>
              { nameOfBooks.map((arrValue,index)=> (
                  <tr key={index}>
                      <th scope="row">{arrValue.name} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={ () => onDelete(arrValue.id)}></FaTimes></th>
                  </tr>
              ))}
              </tbody>
          </table>       
        </div>
    )
}


export default Payment