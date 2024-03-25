import './paginaprincipal.css'
import saibaods from './src/assets/ods.png'
import saibamim from './src/assets/foto.jpg'


function Paginaprincipal (){
    return (
        <>
        <div id="barraNav">
            

        </div>
        <div id="container">
          
        </div>
        <h1 id="textoods">Trabalho Decente e Crescimento Econômico</h1>

        <a href="/ods" id="saibaods">
            <img src={saibaods} />
        </a>

        <a href="/mim" id="saibamim">
            <img src={saibamim} />
    
        </a>
        <div id="container2">
                
                </div>

                <div id="container3">
              

                </div>

                <div id="container4">

                </div>
                <div id="separador">

                </div>
                <h2 id="ods8">Clique abaixo para saber mais sobre a ods 8</h2>
                <h3 id="sobremim">Clique abaixo para saber mais sobre o criador da pagina </h3>

        </>
    )
}

export default Paginaprincipal
