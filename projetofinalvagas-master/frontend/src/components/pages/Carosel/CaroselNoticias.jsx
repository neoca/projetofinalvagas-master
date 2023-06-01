import React from 'react';
import './Carosel.css';
import img01 from './imgcard/01.jpg';
import img02 from './imgcard/02.jpg';
import img03 from './imgcard/03.jpg';
import img04 from './imgcard/04.jpg';
import backg from './imgcard/backg.jpeg';


function CaroselNoticias() {
  return (
    
    <div id="Carosel-root">
      <input type="radio" name="slider" className="d-none" id="s1" defaultChecked />
      <input type="radio" name="slider" className="d-none" id="s2" />
      <input type="radio" name="slider" className="d-none" id="s3" />
      <input type="radio" name="slider" className="d-none" id="s4" />
      <input type="radio" name="slider" className="d-none" id="s5" />

      <div className="cards">
        <label htmlFor="s1" id="slide1">
          <div className="card">
            <div className="image">
            <img src={img01} alt="" />
              <div className="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">TOTI DIVERSIDADE</span>
              <span className="lorem">Somos a primeira plataforma brasileira de ensino e inclusão de pessoas refugiadas e migrantes no mercado de trabalho de tecnologia.</span>
            </div>
            <a href="https://totidiversidade.com.br/" className="btn-contact">olhar mais</a>
            <div className="socials">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s2" id="slide2">
          <div className="card">
            <div className="image">
            <img src={img02} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
         
            </div>
            <div className="infos">
              <span className="name">Agência da ONU para as Migrações</span>
              <span className="lorem">Como a principal organização intergovernamental que promove migração humana e ordenana..</span>
            </div>
            <a href="https://brazil.iom.int/pt-br" className="btn-contact">olhar mais</a>
            <div className="socials">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s3" id="slide3">
          <div className="card">
            <div className="image">
            <img src={img03} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Imigração 'traz dinheiro e'</span>
              <span className="lorem">Um estudo divulgado nesta quarta-feira pela University College London</span>
            </div>
            <a href="https://www.bbc.com/portuguese/noticias/2014/11/141105_imigra_grana_fd" className="btn-contact">olhar mais</a>
            <div className="socials">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s4" id="slide4">
          <div className="card">
            <div className="image">
            <img src={img04} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Brasil reconhece mais de 21 mil venezuelanos</span>
              <span className="lorem">​​​Rio de janeiro - O governo brasileiro anunciou</span>
            </div>
            <a href="http://www.caritas-rj.org.br/brasil-reconhece-mais-de-21-mil-venezuelanos-como-refugiados-de-uma-so-vez.html" className="btn-contact">olhar mais</a>
            <div className="socials">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </label>

        <label htmlFor="s5" id="slide5">
          <div className="card">
            <div className="image">
            <img src={backg} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Blog-Noticias</span>
              <span className="lorem">Descubra histórias inspiradoras de migrantes e as vantagens de contratar talentos globais. 
                                      Acesse nosso blog e amplie sua visão sobre diversidade e inclusão no ambiente de trabalho.</span>
            </div>
            <a href="/BlogNoticias/Blog.jsx"  className="btn-contact">olhar mais</a>
            <div className="socials">
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

export default CaroselNoticias;
