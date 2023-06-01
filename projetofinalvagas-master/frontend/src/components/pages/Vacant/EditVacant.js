import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './AddVacant.module.css'

import VacantForm from '../../form/VacantForm'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function EditVacant() {
  const [vacant, setVacant] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    api
      .get(`/vacants/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setVacant(response.data.vacant)
      })
  }, [token, id])

  async function updateVacant(vacant) {
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
      .patch(`vacants/${vacant._id}`, formData, {
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
  }

  return (
    <section>
      <div className={styles.addvacant_header}>
        <h1>Editando a vaga: {vacant.name}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {vacant.name && (
        <VacantForm handleSubmit={updateVacant} vacantData={vacant} btnText="Editar" />
      )}
    </section>
  )
}

export default EditVacant
