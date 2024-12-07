import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

// Components
import Cart from "../cart/index"

// Styles
import * as Styles from "./styles"
import { userLogin, userLogout } from "../../redux/user/actions"

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const { currentUser } = useSelector(selector => selector.userReducer)
  
  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true)
  }

  const handleLoginClick = () => {
    dispatch(
      userLogin({
        name: 'João Carlos',
        email: 'joaocarlosjoe74@gmail.com'
      })
    )
  }

  const handleLogoutClick = () => {
    dispatch(
      userLogout()
    )
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {!!currentUser
          ? <div onClick={handleLogoutClick}>Sair</div>
          : <div onClick={handleLoginClick}>Login</div>
        }
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  )
}

export default Header
