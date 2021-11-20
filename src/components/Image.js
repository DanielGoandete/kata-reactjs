import React,{ useState } from 'react'
import cleanCode from '../../src/assets/images/cleanCode.png'
import cleanCoder from '../../src/assets/images/cleanCoder.png'
import cleanArchitecture from '../../src/assets/images/cleanArchitecture.jpeg'
import tdd from '../../src/assets/images/tdd.jpeg'
import refactoring from '../../src/assets/images/refactoring.jpeg'
import Payment from './Payment'

const Image = () => {

    const [getprices , setprices] = useState([])
    const [getNames , setNames] = useState([])
    const [getNameAndId , setNameAndId] = useState([])
    const listIds = []
    const listNames =[]

    let booksData = [
        {id:Math.floor(Math.random() * 10000) +1, idInsert:0, name:'Clean Code' ,imgSrc:cleanCode, alt:"A HandBook of Agile Software Craftmanship"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:1, name:'Clean Coder' ,imgSrc:cleanCoder,alt:"A Code of Conduct Professional Programmers"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:2, name:'Clean Architecture' ,imgSrc:cleanArchitecture,alt:"A Craftman's Guide to Software Structure and Design"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:3, name:'TDD' ,imgSrc:tdd,alt:"Test-Driven Development"},
        {id:Math.floor(Math.random() * 10000) +1, idInsert:4, name:'Refactoring' ,imgSrc:refactoring,alt:"Working Effectively"}
    ];
  
    const getPriceById =(id,name,idInsert)=>{
        
        if(getprices.length > 0){

            listIds.push([id])
            listNames.push([name])
        }else {
            listIds.push([id])
            listNames.push([name])
        }
        getprices.push(listIds)
        setprices([...getprices])
        getNames.push(listNames)
        setNames([...getNames])
        const newNameId = {id , name,idInsert}
        getNameAndId.push(newNameId)
        setNameAndId([...getNameAndId])


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
       // alert(document.getElementById("discount").innerHTML);
        document.getElementById("checkout").click();
    }

    const test = ()=>{


    }

    return (
        <div className="row">
           {
            booksData.map((bookDetail,index)=>{
                return(
                    
                    <div className="col" key={index}>
                      <img src={bookDetail.imgSrc} alt={bookDetail.alt}   width="90%" height="100%" />  
                      <button className='btn btn-success buttonBuy' onClick={()=> getPriceById(bookDetail.id,bookDetail.name,bookDetail.idInsert)}>Buy</button>     
                    </div>
                    
                )
                
           })}
           <section className='section'>
           <Payment nameOfBooks={getNameAndId} onDelete={deleteBook}></Payment>
          
           </section>
        </div>
    )
}
export default Image