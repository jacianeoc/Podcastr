import '../styles/global.scss';
import { Header } from '../components/Header';
import styles from '../styles/app.module.scss';
import { Player } from '../components/Player';

//esse arquivo é um arquivo que por padrão fica por volta por todas as paginas 
function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      
      <main>
        <Header/>
        <Component{...pageProps}/>
      </main>

      <Player/>
    </div>

  );
  
}

export default MyApp
