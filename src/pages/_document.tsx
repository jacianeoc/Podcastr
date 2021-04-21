/*aqui nos podemos configurar, qual é o formato do documento
do html que fica por volta da aplicação 
 */
import Document, {Html, Head, Main, NextScript} from 'next/document';

/*por padrão o next só aceita com classes, essa classe my document, serve
para quando o _app for clamado as configs do html, vai ser carregado 
apenas uma vez
*/
export default class MyDocument extends Document{
  render(){
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main></Main>
          <NextScript/>
        </body>
      </Html>
    );
  }
}