import React from 'react'
import {render} from "@testing-library/react";
import Image from './Image'
import Payment from './Payment'


describe("initial renders", ()=>{

    it("buttons ",()=>{
        const {getAllByTestId} = render(<Image/>)
        const button = getAllByTestId("buy")
        expect(button).toBeTruthy()
    })

    it("images ",()=>{
        const {getAllByTestId} = render(<Image/>)
        const img = getAllByTestId("img")
        expect(img).toBeTruthy()
    })

    it("Snapshot Image test",()=>{
         expect(Image).toMatchSnapshot();
    })
    it("Snapshot Payment test",()=>{
         expect(Payment).toMatchSnapshot();
    })

    it("List Basket",()=>{
        const {getByTestId} = render(<Payment/>)
        const elem = getByTestId("basket")
        expect(elem.textContent).toBe("Your Basket:")
    })

    it("total payment ",()=>{
        const {getByTestId} = render(<Payment/>)
        const payment = getByTestId("totalPayment")
        expect(payment.textContent).toBe("0")
    })

    it("total discount ",()=>{
        const {getByTestId} = render(<Payment/>)
        const discount = getByTestId("totalDiscount")
        expect(discount.textContent).toBe("0")
    })
    

})