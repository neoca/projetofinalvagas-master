import React from 'react';
import styles from './Carosel.module.css'

function Carosel() {
  return (
    <div className={styles.container}>
      <input type="radio" name="slider" className={styles.hiddenRadio} id="s1" checked />
      <input type="radio" name="slider" className={styles.hiddenRadio} id="s2" />
      <input type="radio" name="slider" className={styles.hiddenRadio} id="s3" />
      <input type="radio" name="slider" className={styles.hiddenRadio} id="s4" />
      <input type="radio" name="slider" className={styles.hiddenRadio} id="s5" />

      <div className={styles.cards}>
        <label htmlFor="s1" id="slide1">
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="img/01.jpg" alt="" />
              <div className={styles.dots}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={styles.infos}>
              <span className={styles.name}>TOTI DIVERSIDADE</span>
              <span className={styles.lorem}>
                Somos a primeira plataforma brasileira de ensino e inclusão de pessoas refugiadas e migrantes no mercado de trabalho de tecnologia.
              </span>
            </div>
            <a href="https://totidiversidade.com.br/" className={styles.btnContact}>
              olhar mais
            </a>
            <div className={styles.socials}>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s2" id="slide2">
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="img/02.jpg" alt="" />
              <div className={styles.dots}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>
              </div>
            </div>
            <div className={styles.infos}>
              <span className={styles.name}>Agência da ONU para as Migrações</span>
              <span className={styles.lorem}>
                Como a principal organização intergovernamental que promove migração humana e ordenana..
              </span>
            </div>
            <a href="https://brazil.iom.int/pt-br" className={styles.btnContact}>
              olhar mais
            </a>
            <div className={styles.socials}>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s3" id="slide3">
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="img/03.jpg" alt="" />
              <div className={styles.dots}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>
              </div>
            </div>
            <div className={styles.infos}>
              <span className={styles.name}>Imigração 'traz dinheiro e'</span>
              <span className={styles.lorem}>Um estudo divulgado nesta quarta-feira pela University College London</span>
            </div>
            <a href="https://www.bbc.com/portuguese/noticias/2014/11/141105_imigra_grana_fd" className={styles.btnContact}>
              olhar mais
            </a>
            <div className={styles.socials}>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s4" id="slide4">
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="img/04.jpg" alt="" />
              <div className={styles.dots}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>
              </div>
            </div>
            <div className={styles.infos}>
              <span className={styles.name}>Brasil reconhece mais de 21 mil venezuelanos</span>
              <span className={styles.lorem}>​​​Rio de janeiro - O governo brasileiro anunciou</span>
            </div>
            <a href="http://www.caritas-rj.org.br/brasil-reconhece-mais-de-21-mil-venezuelanos-como-refugiados-de-uma-so-vez.html" className={styles.btnContact}>
              olhar mais
            </a>
            <div className={styles.socials}>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s5" id="slide5">
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="img/05.jpg" alt="" />
              <div className={styles.dots}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>
              </div>
            </div>
            <div className={styles.infos}>
              <span className={styles.name}>canal da Toti no Youtube</span>
              <span className={styles.lorem}>
                No canal da Toti você irá ver ótimos conteúdos sobre contratações, diversidade na tecnologia e muito mais!
              </span>
            </div>
            <a href="https://www.youtube.com/c/TotiDiversidade" className={styles.btnContact}>
              olhar mais
            </a>
            <div className={styles.socials}>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Carosel;
