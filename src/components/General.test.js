import React from 'react'
import {render} from "@testing-library/react";
import Store from './Store'
import Payment from './Payment'


describe("initial renders", ()=>{

    it("check all  buttons buy ",()=>{
        const {getAllByTestId} = render(<Store/>)
        const button = getAllByTestId("buy")
        expect(button).toBeTruthy()
    })

    it("check all images ",()=>{
        const {getAllByTestId} = render(<Store/>)
        const img = getAllByTestId("img")
        expect(img).toBeTruthy()
    })

    it("check if basket Itens starts with 0 ",()=>{
        const {getByTestId} = render(<Store/>)
        const discount = getByTestId("basketItens")
        expect(discount.textContent).toBe("0")
    })

    it("check if my basket name is in there",()=>{
        const {getByTestId} = render(<Payment/>)
        const elem = getByTestId("basket")
        expect(elem.textContent).toBe("Your Basket:")
    })

    it("Snapshot Image test",()=>{
        expect(Store).toMatchSnapshot();
   })

   it("Snapshot Payment test",()=>{
        expect(Payment).toMatchSnapshot();
   })
    

})