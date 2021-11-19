import { useState } from 'react'
import cleanCode from '../../src/assets/images/cleanCode.png'
import cleanCoder from '../../src/assets/images/cleanCoder.png'
import cleanArchitecture from '../../src/assets/images/cleanArchitecture.jpeg'
import tdd from '../../src/assets/images/tdd.jpeg'
import refactoring from '../../src/assets/images/refactoring.jpeg'

const Image = () => {

    const [getprices , setprices] = useState([])
    const [getTotalValue , setTotalValue] = useState()
    const [getDiscountValue , setDiscountValue] = useState()
    const newList = []

    let booksData = [
        {id:0, price:50, imgSrc:cleanCode, alt:"A HandBook of Agile Software Craftmanship"},
        {id:1, price:50, imgSrc:cleanCoder,alt:"A Code of Conduct Professional Programmers"},
        {id:2, price:50, imgSrc:cleanArchitecture,alt:"A Craftman's Guide to Software Structure and Design"},
        {id:3, price:50, imgSrc:tdd,alt:"Test-Driven Development"},
        {id:4, price:50, imgSrc:refactoring,alt:"Working Effectively"}
    ];
  
    const getPriceById =(id)=>{
        
        const newBook = [id]
        if(getprices.length > 0){

            newList.push(newBook)
        }else {

          newList.push(newBook)
        }
        getprices.push(newList)
        setprices([...getprices])
        showPrice()
       // alert(getprices)
    }


    const showPrice =()=>{
        
       let total = 0 
       let pricePerID =0
       let noDiscont = 0
       let discount = 0
       let previouslyValue
       for(let valuesOfId of getprices.sort()){
          
        //give the discont in case is diferent id
           if(parseInt(valuesOfId) !== previouslyValue){
              discount ++
              pricePerID ++
              previouslyValue = parseInt(valuesOfId)
           } else{
            noDiscont++
            pricePerID ++
            previouslyValue = parseInt(valuesOfId)
           }
           
       }

        //Remove discount to make the calc of the corect discount
        total = pricePerID * 50 - noDiscont * 50
       alert(discount)
       if(discount === 1){
            setTotalValue(total)
            
       }else if(discount === 2){
            discount = total * 0.05
            setTotalValue(total - discount + noDiscont * 50)
            setDiscountValue(5)
       }else if(discount === 3){
            discount = total * 0.1
            setTotalValue(total - discount + noDiscont * 50)
            setDiscountValue(10)
        }else if(discount === 4){
            discount = total * 0.2
            setTotalValue(total - discount + noDiscont * 50)
            setDiscountValue(20)
            
        }else{
            discount = total * 0.25
            setTotalValue(total - discount + noDiscont * 50)
            setDiscountValue(25)
        }
       
       
     
    }

    return (
        <div className="row">
           {
            booksData.map((bookDetail,index)=>{
                return(
                    
                    <div className="col" key={index}>
                      <img src={bookDetail.imgSrc} alt={bookDetail.alt}   width="90%" height="100%" />  
                      <button className='btn btn-success buttonBuy' onClick={()=> getPriceById(bookDetail.id)}>Buy</button>     
                    </div>
                    
                )
                
           })}
           <div >
           <p>Prices: {getprices}</p>
           <p>Discount: {getDiscountValue}%</p>
           <p>Total to pay:{getTotalValue}</p>
           </div>
        </div>
    )
}
export default Image