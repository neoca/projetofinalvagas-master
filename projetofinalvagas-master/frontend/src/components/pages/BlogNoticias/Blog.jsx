import React from 'react';
import './Blog.css';
import datos from './dummyData';
import img1 from './imgnoticias/img1.png';
import img2 from './imgnoticias/img2.jpg';
import img3 from './imgnoticias/img3.jpg';
import img4 from './imgnoticias/img4.jpg';
import img5 from './imgnoticias/img5.jpg';
import img6 from './imgnoticias/img6.png';
import img7 from './imgnoticias/img7.jpg';
import img8 from './imgnoticias/img8.jpg';

function Blog() {
  return (

    <div id="Blog-root">
        <div className='container-noticia'>
         <div className='container-titul'>
          <div className='home-text'>
          <div className='title-l'>
           <h1>Unidos pelas Nossas Histórias</h1>

           <div className="subtitle">
           "Um espaço para compartilhar e celebrar a experiência imigrante" 
           </div>
           </div>
          </div>
         </div>
        <div className='fondo'>
        <div className='noticia-about'>
         <div className="contentBx">
            <div className='titleText'>
             <h2>"A importância dos imigrantes na nossa sociedade"   </h2>
            </div>


           <div>
             {datos.dato.map((item) => (
              <div key={item.id}>
               <h3>{item.titulo}</h3>
               <p className='destacado'>{item.contenido}</p>
              </div>
             ))}
           </div>        
         </div>    

         <div className="imgBx">
          <img src={img1} alt="Imagen"/>
         </div>
        </div>

        <div className='nome'>
              <h1>Noticias</h1>
        </div>

        <div className='post-not'>
        
            <div className='post-box' >
               {datos.noticias.map((item) => (
                <div key={item.id}>
                 <div>
                  <img src={img2} alt='' className='post-img' />
                 </div>
                 <h2 className='post-title'>{item.titulo}</h2>
                 <p className='destacado'>{item.descripcion}</p>
                 <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title' >Leia mais</a>
                </div>
                ))}
            </div>

            <div className='post-box' >
               {datos.noticiasl.map((item) => (
                <div key={item.id}>
                 <div>
                  <img src={img3} alt=''className='post-img'/>
                 </div>
                 <h2 className='post-title'>{item.titulo}</h2>
                 <p className='destacado'>{item.descripcion}</p>
                 <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title'>Leia mais</a>
                </div>
                ))}
            </div>

            <div className='post-box' >
               {datos.noticiasll.map((item) => (
                <div key={item.id}>
                 <div >
                  <img src={img4} alt='' className='post-img'/>
                 </div>
                 <h2 className='post-title'>{item.titulo}</h2>
                 <p className='destacado'>{item.descripcion}</p>
                 <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title'>Leia mais</a>
                </div>
                ))}
            </div>

            <div className='post-box' >
               {datos.noticiaslll.map((item) => (
                <div key={item.id}>
                 <div>
                  <img src={img5} alt='' className='post-img' />
                 </div>
                 <h2 className='post-title'>{item.titulo}</h2>
                 <p className='destacado'>{item.descripcion}</p>
                 <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title' >Leia mais</a>
                </div>
                ))}
            </div>

            <div className='post-box' >
               {datos.noticiasllll.map((item) => (
                <div key={item.id}>
                 <div>
                  <img src={img6} alt=''className='post-img'/>
                 </div>
                 <h2 className='post-title'>{item.titulo}</h2>
                 <p className='destacado'>{item.descripcion}</p>
                 <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title'>Leia mais</a>
                </div>
                ))}
            </div>

            <div className='post-box' >
               {datos.noticiaslllll.map((item) => (
                <div key={item.id}>
                 <div >
                  <img src={img7} alt='' className='post-img'/>
                 </div>
                 <h2 className='post-title'>{item.titulo}</h2>
                 <p className='destacado'>{item.descripcion}</p>
                 <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title'>Leia mais</a>
                </div>
                ))}
            </div>
          
        </div>

        <div className='nome'>
              <h1>Serviços e Ajuda para os Imigrantes</h1>
        </div>

        <div className='info' >
                <div className="content">
                  {datos.info.map((item) => (
                    <div key={item.id}>
                       <div className='imgl'>
                        <img src={img8} alt='' className='imgl'/>
                        </div>
                       <h2 className='post-title'>{item.titulo}</h2>
                       <a href={item.enlace} target='_blank' rel="noopener noreferrer" className='post-title' >Leia mais</a>
                    </div>
                  ))}
                </div> 
        </div>
        </div>
        </div>
      </div>
    
    )
    }
    

export default Blog;



