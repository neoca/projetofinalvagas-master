import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import styles from './Dashboard.module.css'

import RoundedImage from '../../layout/RoundedImage'

function MyApplications() {
  const [vacants, setVacants] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api
      .get('/vacants/myapplications', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setVacants(response.data.vacants)
      })
  }, [token])

  return (
    <section>
      <div className={styles.vacantslist_header}>
        <h1>Minhas candidaturas</h1>
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
              <div className={styles.contacts}>
                <p>
                  <span className="bold">Ligue para:</span> {vacant.user.phone}
                </p>
                <p>
                  <span className="bold">Fale com:</span> {vacant.user.name}
                </p>
              </div>
              <div className={styles.actions}>
                {vacant.available ? (
                  <p>Candidatura em processo</p>
                ) : (
                  <p>Parabéns por concluir a sua candidatura</p>
                )}
              </div>
            </div>
          ))}
        {vacants.length === 0 && <p>Ainda não se candidatou numa vaga!</p>}
      </div>
    </section>
  )
}

export default MyApplications
