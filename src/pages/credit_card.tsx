import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
// import GalaxPay from '../utils/galaxpayCheckout'

import { Input } from '../components/Input/index'

export default function CreditCardPage() {
  const [creditCard, setCreditCard] = useState<string | null>('teste')

  function hashCard() {
    // const token = 'asdakdmasldasdm'
    // const galaxPay = new GalaxPay(token, true)
    // const card = galaxPay.newCard({
    //   number: '4174010006001383',
    //   holder: 'Rafael Do Carmo da Silva',
    //   expiresAt: '2024-11',
    //   cvv: '123'
    // })
    // galaxPay.hashCreditCard(
    //   card,
    //   (hash) => {
    //     console.log(
    //       '🚀 ~ file: credit_card.tsx ~ line 52 ~ CreditCardPage ~ hash',
    //       hash
    //     )
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // )
  }

  return (
    <div>
      <div className="container mx-auto">
        <button id="button">Teste</button>
        <Script
          src="https://js.galaxpay.com.br/checkout.min.js"
          strategy="lazyOnload"
        />
        <Script
          id="galaxPay"
          dangerouslySetInnerHTML={{
            __html: `
          document.getElementById("button").addEventListener("click", async () => {
            const token = 'asdakdmasldasdm'
            document.getElementById("cartao").value
            console.log(document.getElementById("cartao").value)
          })
        `
          }}
        />
        <Input
          valueInput={creditCard}
          setValue={setCreditCard}
          type="text"
          label="Cartao"
          id="cartao"
        />
        <input type="text" id="hash" />
      </div>
    </div>
  )
}
