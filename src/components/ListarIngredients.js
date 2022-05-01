import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../assets/image.png'
import '../styles/Ingredients.css'
import { listIngredientAsyn } from '../redux/actions/ingredientsActions'
import { logoutAsync } from '../redux/actions/userActions'


const ListarIngredients = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAsync())
    navigate("/iniciarSesion")
  }

  const [total, settotal] = useState(0)
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(function list() {
    dispatch(listIngredientAsyn())
  }, [dispatch])

  const { ingredient } = useSelector(store => store.ingredient)

  const checked = ({ target }) => {
    const checked = target.checked
    const price = target.value
    if (checked) {
      if (total >= 0) {
        settotal(total + Number(price))
      }
    }
    else {
      settotal(total - Number(price))
    }
  }

  const SeleccionarTodo = () => {
    const checbox = document.getElementsByName('checbox')
    for (let i = 0, n = checbox.length; i < n; i++) {
      checbox[i].checked = checked;
    }
    const totalPay = ingredient.reduce((sum, value) => (typeof Number(value.price) == "number" ? sum + Number(value.price) : sum), 0)
    settotal(totalPay)
  }

  const deseleccionarTodo = () => {
    const checbox = document.getElementsByName('checbox')
    for (let i = 0, n = checbox.length; i < n; i++) {
      checbox[i].checked = !checked;
    }
    settotal(0)
  }

  const pagoProducts = () => {
    Swal.fire(
      'Compra Realizada',
      ' 😁 Vuelve pronto 😁'
    )
    deseleccionarTodo()
  }

  return (
    <div>
      <img className='logoList' alt='LogoRestaurant' src={logo}/>
      <button className='btnLogout' onClick={handleLogout}>logOut</button>
      <div className='ingredientCont'>
        <div>
          <span>Plato</span>
          <h4>Risotto de setas (vegano)</h4>
        </div>
        <div className='flex '>
          <Button className='btnsCheck' variant="link"
            onClick={() => SeleccionarTodo()}
          >Seleccionar Todo</Button>
          <Button className='btnsCheck' variant="link"
            onClick={() => deseleccionarTodo()}
          >Deseleccionar Todo</Button>
        </div>
        <hr />
        {
          ingredient?.map((ing, index) => (
            <div key={index}>
              <div className='ingredient'>
                <input type="checkbox" name="checbox"
                  onClick={checked}
                  value={ing.price}
                />
                <div>
                  
                  <h5>{ing.product}</h5>
                  <span>{ing.brand}</span>
                  <span>{ing.quantity}</span>
                </div>
                <div>
                  <h4>$ {ing.price}</h4>
                </div>
              </div>
              <hr />
            </div>
          ))
        }
        <div>
          <Button variant="centrar"
            onClick={() => pagoProducts()}
          >Pagar $ {total}</Button>
        </div>
        <div className='d-grid gap-2 mt-3'>
          <Button variant=" centrar"
            onClick={() => { Navigate('/ingredients') }}
          >Editar Ingredientes</Button>
        </div>
      </div>
      <small>Lizeth Paola Delgadillo Robayo</small>
    </div>
  )
}

export default ListarIngredients