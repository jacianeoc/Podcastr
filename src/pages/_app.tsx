import '../styles/global.scss';
//esse arquivo é um arquivo que por padrão fica por volta por todas as paginas 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
