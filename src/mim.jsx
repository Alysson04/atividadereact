import './mim.css'
import fotominha from '../src/assets/foto.jpg'

function Mim (){
    return (
<>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>ALYSSON RAFAEL</title>
          <link rel="stylesheet" href="css/style.css" /> {/* Importe seu arquivo de estilos CSS */}
        </head>
        <body id="corpo">
          <header>
            <h1 id="nome">SOBRE MIM</h1>
          </header>
          <main>
            <table>
              <tr>
                <td>
                  <img src={fotominha} alt="Foto Alysson" width="200px" />
                </td>
                <td>
                  <h1>Alysson Rafael</h1>
                  <p>Tenho 20 anos</p>
                  <p>Moro em Recife, PE</p>
                  <p>Veja meu <a href="https://www.linkedin.com/in/alysson-rafael-0941ba1b3/">LinkedIn</a></p>
                </td>
              </tr>
            </table>

            <h2 id="dados pessoais">DADOS PESSOAIS:</h2>
            <hr id="hrr" />
            <p><b>Nome:</b> ALYSSON RAFAEL FREIRE SILVA SANTOS</p>
            <p><b>E-mail:</b> alysson2rafael@gmail.com</p>
            <p><b>Sexo:</b> Masculino</p>
            <p><b>Estado Civil:</b> Solteiro</p>
            <p><b>Data de nascimento:</b> 14/04/2002</p>
            <p><b>Cidade:</b> Recife</p>
            <p><b>Endereço:</b> Rua alto do novo mundo, º97</p>
            <p><b>Bairro:</b> Vasco da gama</p>
            <p><b>CEP:</b> 52081-050</p>
            <p><b>Celular:</b> (81)97116-7437</p>
           

            <h3 id="areadeatuacao">ÁREA DE ATUAÇÃO:</h3>
            <hr />
            <p><b>Nível de atuação:</b> Jovem aprendiz</p>
            <p><b>Faixa Salarial:</b> 600 R$</p>
            <p><b>Forma de Contratação:</b> estágio</p>
            <p><b>Horário disponível:</b> Tarde/noite</p>

            <h4 id="formacao"> FORMAÇÃO ACADÊMICA:</h4>
            <hr />
            <p><b>Nível de escolaridade:</b> Ensino Médio</p>
            <p><b>Instituição:</b> Erem Ageu Magalhães</p>
            <p><b>Ano de Conclusão:</b> 2018</p>
            <p><b>Nível de escolaridade:</b> Ensino Superior</p>
            <p><b>Curso:</b> SISTEMAS PARA INTERNET</p>
            <p><b>Instituição:</b> UNICAP</p>
            <p><b>Ano de Conclusão:</b> 2025</p>

            <h5 id="experiencia">EXPERIÊNCIA PROFISSIONAL:</h5>
            <hr />
            <p><b>Ramo de Atividade:</b> Varejo/Lojas C&A</p>
            <p><b>Data de Admissão:</b> 02/12/2022</p>
            <p><b>Data da Dispensa:</b> 18/04/2023</p>
            <p><b>Função:</b> Operador de caixa</p>
            <p><b>Responsabilidades:</b> Um operador de caixa é responsável por realizar as transações financeiras, como pagamentos, verificações e, em alguns casos, saques ou depósitos.</p>
            <head>
              <meta charset="UTF-8" />
              <a href="contato.html">Entre em contato</a>
            </head>
          </main>
        </body>
      </html>
    </>
    )
}

    export default Mim
