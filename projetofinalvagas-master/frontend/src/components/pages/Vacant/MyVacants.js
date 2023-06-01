import api from '../../../utils/api'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Dashboard.module.css'

import RoundedImage from '../../layout/RoundedImage'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function MyVacants() {
  const [vacants, setVacants] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    api
      .get('/vacants/myvacants', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setVacants(response.data.vacants)
      })
  }, [token])

  async function removeVacant(id) {
    let msgType = 'success'

    const data = await api
      .delete(`/vacants/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedVacants = vacants.filter((vacant) => vacant._id !== id)
        setVacants(updatedVacants)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  async function concludeApplication(id) {
    let msgType = 'success'

    const data = await api
      .patch(`/vacants/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
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
      <div className={styles.vacantslist_header}>
        <h1>Minhas vagas cadastradas</h1>
        <Link to="/vacant/add">Cadastrar vaga</Link>
      </div>
      <div className={styles.vacantslist_container}>
        {vacants.length > 0 &&
          vacants.map((vacant) => (
            <div key={vacant._id} className={styles.vacantlist_row}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/vacants/${vacant.images[0]}`}
                alt={vacant.name}
                width="px75"
              />
              <span className="bold">{vacant.name}</span>
              <div className={styles.actions}>
                {vacant.available ? (
                  <>
                    {vacant.application && (
                      <button
                        className={styles.conclude_btn}
                        onClick={() => {
                          concludeApplication(vacant._id)
                        }}
                      >
                        Concluir canditura
                      </button>
                    )}

                    <Link to={`/vacant/edit/${vacant._id}`}>Editar</Link>
                    <button
                      onClick={() => {
                        removeVacant(vacant._id)
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <p>Já se canditou nesta vaga</p>
                )}
              </div>
            </div>
          ))}
        {vacants.length === 0 && <p>Ainda não há vagas cadastradas!</p>}
      </div>
    </section>
  )
}

export default MyVacants
