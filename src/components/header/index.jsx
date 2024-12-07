import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

// Components
import Cart from "../cart/index"

// Styles
import * as Styles from "./styles"

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  console.log(currentUser)
  
  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true)
  }

  const handleLoginClick = () => {
    dispatch({
      type: 'user/login',
      payload: { name: 'João Carlos', email: 'joaocarlosjoe74@gmail.com' }
    })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  )
}

export default Header
