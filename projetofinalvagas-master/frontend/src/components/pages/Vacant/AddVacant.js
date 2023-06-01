import api from '../../../utils/api'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './AddVacant.module.css'

import VacantForm from '../../form/VacantForm'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function AddVacant() {
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()
  const history = useHistory()

  async function registerVacant(vacant) {
    let msgType = 'success'

    const formData = new FormData()

    const vacantFormData = await Object.keys(vacant).forEach((key) => {
      if (key === 'images') {
        for (let i = 0; i < vacant[key].length; i++) {
          formData.append(`images`, vacant[key][i])
        }
      } else {
        formData.append(key, vacant[key])
      }
    })

    formData.append('vacant', vacantFormData)

    const data = await api
      .post(`vacants/create`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
    history.push('/vacant/myvacants')
  }

  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Cadastre uma vaga</h1>
        <p>Depois ela ficará disponível para os usuarios</p>
      </div>
      <VacantForm handleSubmit={registerVacant} btnText="Cadastrar" />
    </section>
  )
}

export default AddVacant
