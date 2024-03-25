import './paginaprincipal.css'
import sods from "../src/assets/ods.png"
import smim from "../src/assets/foto.jpg"


function Paginaprincipal (){
    return (
        <>
        <div id="barraNav">
            

        </div>
        <div id="container">
          
        </div>
        <h1 id="textoods">Trabalho Decente e Crescimento Econômico</h1>

        <a href="/ods" id="saibaods">
            <img src={sods} />
        </a>

        <a href="/mim" id="saibamim">
            <img src={smim} />
    
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
