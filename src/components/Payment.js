import React,{ useState } from 'react'
import {FaTimes} from 'react-icons/fa'

const Payment = ({nameOfBooks,onDelete}) => {

    const [getTotalValue , setTotalValue] = useState(0)
    const [getDiscountValue , setDiscountValue] = useState(0)
    const [showCheckout , setshowCheckout] = useState(false)
   
    
    const getCheckout = () =>{
       
        
        setshowCheckout(true);
        let elem
        let count 
        let discount 
        if(nameOfBooks.length > 0){
            for(let i = 0; i < nameOfBooks.length; i++){
                elem = nameOfBooks[i].idInsert
                count=0
                discount = 1
                for(let j = 0; j < nameOfBooks.length; j++){
                   
                    if(elem !== nameOfBooks[j].idInsert){
                        console.log('elem',elem)
                        console.log('nameOfBooks[j].idInsert',nameOfBooks[j].idInsert)
                        discount ++
                    }else{

                    }
                }
            }
        }
       
      //function that will show the prices on checkout  
      showPrice(discount)
    }


    const showPrice =(discount)=>{
        let pricePerID
        let total = 0 
        let noDiscont
        if(nameOfBooks.length > 0){
            //if there is books will set the values on the checkout
            noDiscont  = (nameOfBooks.length - discount)* 50 
            pricePerID = nameOfBooks.length * 50
        }else{
            //if there is no books on the basket then will set 0 on the checkout
            noDiscont = 0
            pricePerID = 0
            discount = 1
            setshowCheckout(false);
        }
        total = pricePerID - noDiscont 
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
        <div > 
            <table className="table table-dark">
              <thead>
                <tr>
                    <th  data-testid="basket" scope="col">Your Basket:</th>
                </tr>
              </thead>
              <tbody>
                { nameOfBooks?.map((arrValue,index)=> (
                    <tr key={index}>
                        <th scope="row">{arrValue.name} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={ () => onDelete(arrValue.id)}></FaTimes></th>
                    </tr>
                ))}
              </tbody>
            </table>   
            <button style={{display:"none"}} className='btn btn-success buttonBuy' id="checkout" onClick={()=> getCheckout()}>checkout</button> 
            {showCheckout  ? 
                (<>
                    <p id="discount" >Discount: {getDiscountValue}%</p>
                    <p>Total to pay:{getTotalValue} €</p>
                </>)
                : ''
            }
        </div>
    )
}


export default Payment