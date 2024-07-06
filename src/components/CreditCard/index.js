import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer, 
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardHolderNameText,
  CardHolderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,    
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [CardHolderName, setCardHolderName] = useState('')
  const CardholderNameInUppercase = CardholderNameInUppercase()

  const onChangeholderName = event => {
    setCardHolderName(event.target.value) 
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <MainContainer>
     <CreditCardDetailsContainer>
      <CardHolderName>
       <CreditCardHeading>CREDIT</CreditCardHeading>
       <HorizontalLine />
      </CreditCardHeadingContainer>
      <CardContainer>
       <Card date-testid="CreditCard">
        <CardNumber>{cardNumber}</CardNumber>
        <CardHolderNameText>CARD HOLDER NAME</CardHolderNameText>
        <CardholderName>{CardholderNameInUppercase}</CardholderName>
       </Card>
      </CardContainer> 
     </CardDetailsContainer>
     <PaymentContainer>
      <PaymentMethodContainer>
       <paymentMethodHeaing>Payment Method</paymentMethodHeaing>
       <Input
         type="text"
         placeholder="Card Number"
         value={cardNumber}
         onChange={onChangeCardNumber}
       />
       <Input
         type="text"
         placeholder="CardholderName}
       />    
      </paymentMethodContainer>
     </paymentContainer> 
    </MainContainer>
  )
}     

export default CreditCard
     