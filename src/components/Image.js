import { useState } from 'react'
import cleanCode from '../../src/assets/images/cleanCode.png'
import cleanCoder from '../../src/assets/images/cleanCoder.png'
import cleanArchitecture from '../../src/assets/images/cleanArchitecture.jpeg'
import tdd from '../../src/assets/images/tdd.jpeg'
import refactoring from '../../src/assets/images/refactoring.jpeg'

const Image = () => {

    let booksData = [
        {id:0, price:50, imgSrc:cleanCode, alt:"A HandBook of Agile Software Craftmanship"},
        {id:1, price:50, imgSrc:cleanCoder,alt:"A Code of Conduct Professional Programmers"},
        {id:2, price:50, imgSrc:cleanArchitecture,alt:"A Craftman's Guide to Software Structure and Design"},
        {id:3, price:50, imgSrc:tdd,alt:"Test-Driven Development"},
        {id:4, price:50, imgSrc:refactoring,alt:"Working Effectively"}
    ];
  
    const getPrice =(id)=>{
        console.warn(id)
    }

    return (
        <div className="row">
           {
            booksData.map((bookDetail,index)=>{
                return(
                    <div className="col" key={index}>
                      <img src={bookDetail.imgSrc} alt={bookDetail.alt}   width="90%" height="100%" />  
                      <button className='btn btn-success buttonBuy' onClick={()=> getPrice(bookDetail.id)}>Buy</button>     
                    </div>
                )
           })}
        </div>
    )
}
export default Image