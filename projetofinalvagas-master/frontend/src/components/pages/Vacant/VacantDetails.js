import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import styles from './VacantDetails.module.css'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function VacantDetails() {
  const [vacant, setVacant] = useState({})
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api.get(`/vacants/${id}`).then((response) => {
      setVacant(response.data.vacant)
    })
  }, [id])

  async function schedule() {
    let msgType = 'success'

    const data = await api
      .patch(`vacants/schedule/${vacant._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
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
    <>
      {vacant.name && (
        <section className={styles.vacant_details_container}>
          <div className={styles.vacantdetails_header}>
            <h1>Conhecendo a vaga: {vacant.name}</h1>
            <p>Se tiver interesse, verifique a vaga para se candidatar!</p>
          </div>
          <div className={styles.vacant_images}>
            {vacant.images.map((image, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_API}/images/vacants/${image}`}
                alt={vacant.name}
              />
            ))}
          </div>
          <p>
            <span className="bold">Empresa:</span> {vacant.company}
          </p>
          <p>
            <span className="bold">Salario:</span> {vacant.salary} reais
          </p>
          {token ? (
            <button onClick={schedule}>Candidatar</button>
          ) : (
            <p>
              Você precisa <Link to="/register">criar uma conta</Link> para
              se candidatar
            </p>
          )}
        </section>
      )}
    </>
  )
}

export default VacantDetails
