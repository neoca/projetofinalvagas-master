import api from '../../utils/api';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';

function Home() {
  const [vacants, setVacants] = useState([]);

  useEffect(() => {
    api.get('/vacants').then((response) => {
      setVacants(response.data.vacants);
    });
  }, []);

  return (
    <section>
      <div className={styles.vacant_home_header}>
        <h1>Aplique para a vaga</h1>
        <p>Veja os detalhes de cada vaga e alem disso conheça o reclutador</p>
      </div>
      
  

      <div className={styles.vacant_container}>
        {vacants.length > 0 &&
          vacants.map((vacant) => (
            <div className={styles.vacant_card} key={vacant._id}>
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/vacants/${vacant.images[0]})`,
                }}
                className={styles.vacant_card_image}
              ></div>
              <h3>{vacant.name}</h3>
              <p>
                <span className="bold">Empresa:</span> {vacant.company}
              </p>
              {vacant.available ? (
                <Link to={`/vacant/${vacant._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.application_text}>candidatou!</p>
              )}
            </div>
          ))}
        {vacants.length === 0 && (
          <p>Não há vagas cadastradas ou disponíveis no momento!</p>
        )}
      </div>
    </section>
  );
}

export default Home;
