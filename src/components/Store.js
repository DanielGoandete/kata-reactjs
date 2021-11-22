import React,{ useState } from 'react'
import cleanCode from '../../src/assets/images/cleanCode.png'
import cleanCoder from '../../src/assets/images/cleanCoder.png'
import cleanArchitecture from '../../src/assets/images/cleanArchitecture.jpeg'
import tdd from '../../src/assets/images/tdd.jpeg'
import refactoring from '../../src/assets/images/refactoring.jpeg'
import Payment from './Payment'

const Store = () => {

    const [getprices , setprices] = useState([])
    const [getNames , setNames] = useState([])
    const [getNameAndId , setNameAndId] = useState([])
    const [getCheckoutNumber , setCheckoutNumber] = useState(0)
    const listIds = []
    const listNames =[]

    let booksData = [
        {id:Math.floor(Math.random() * 10000) +1, idInsert:0, name:'Clean Code' ,imgSrc:cleanCode, alt:"A HandBook of Agile Software Craftmanship"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:1, name:'Clean Coder' ,imgSrc:cleanCoder,alt:"A Code of Conduct Professional Programmers"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:2, name:'Clean Architecture' ,imgSrc:cleanArchitecture,alt:"A Craftman's Guide to Software Structure and Design"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:3, name:'TDD' ,imgSrc:tdd,alt:"Test-Driven Development"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:4, name:'Refactoring' ,imgSrc:refactoring,alt:"Working Effectively"}
    ];
  
    const getBookById =(id,name,idInsert)=>{
        
        listIds.push([id])
        listNames.push([name])
        getprices.push(listIds)
        setprices([...getprices])
        getNames.push(listNames)
        setNames([...getNames])
        const newNameId = {id , name,idInsert}
        getNameAndId.push(newNameId)
        setNameAndId([...getNameAndId])
        document.getElementById("checkout").click();
        setCheckoutNumber(getNameAndId?.length)
    }

 
    const deleteBook = (id)=>{

        setNameAndId(getNameAndId.filter((nameAndId)=> nameAndId.id !==id))
        for(let listOFPrices of getprices){
            
           // will remove the elem from the list 
             if(parseInt(listOFPrices) === id){
                let array  = getNameAndId.indexOf(id)
                getNameAndId.splice(array)
            }
        }
        document.getElementById("checkout").click();
        setCheckoutNumber(getNameAndId?.length)
    }

    //redirect to payment
    const toPay = ()=>{
        document.getElementById('payment').scrollIntoView();
    }
    //redirect to store
    const toBuy = ()=>{
        document.getElementById('toBuy').scrollIntoView();
     }


    return (
        <div id='toBuy'>
            <div  className="screen">
                <div className="row ">
                {
                    booksData?.map((bookDetail,index)=>{
                        return(
                            <div className="col"  key={index}>
                            <img src={bookDetail.imgSrc} alt={bookDetail.alt} data-testid="img"  width="90%" height="100%" />  
                            <button className='btn btn-success buttonBuy' data-testid="buy" onClick={()=> getBookById(bookDetail.id,bookDetail.name,bookDetail.idInsert)}>Buy</button>     
                            </div>
                        )
                })}
                </div>
                <p data-testid="basketItens" style={{display:"none"}}>{getCheckoutNumber}</p> 
                <button className='btn btn-success buttoCheckout' onClick={toPay}>{getCheckoutNumber} item(s): click in here to go Checkout</button>
            </div>
            <div className='section screen center' id="payment">
                <Payment nameOfBooks={getNameAndId} onDelete={deleteBook}></Payment>
                <button className='btn btn-success buttoCheckout' onClick={toBuy}>Back to Store</button>
            </div> 
        </div>
        
    )
}
export default Store