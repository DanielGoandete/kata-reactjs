import { useState } from 'react'
import cleanCode from '../../src/assets/images/cleanCode.png'
import cleanCoder from '../../src/assets/images/cleanCoder.png'
import cleanArchitecture from '../../src/assets/images/cleanArchitecture.jpeg'
import tdd from '../../src/assets/images/tdd.jpeg'
import refactoring from '../../src/assets/images/refactoring.jpeg'

const Image = () => {

    const [getprices , setprices] = useState([])
    const [getTotalValue , setTotalValue] = useState([])
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
       if(discount == 1){

       }else if(discount == 2){

       }else if(discount == 3){
           alert('test')
           //colocar os discontos na ordem correta amanha
           setTotalValue((discount * 50) *  0.1 + noDiscont * 50)
       }else if(discount == 4){

       }else{

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
           <p>Total {getprices}</p>
           <p>{getTotalValue}</p>
           </div>
        </div>
    )
}
export default Image