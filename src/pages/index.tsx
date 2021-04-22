

//as paginas que estão dentro de pages, precisam necessariamente do default
export default function Home(props) {
  return (
    <div >
    <h1>lala</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}
//consumindo uma api na home
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props:{
      episodes: data
    }, 
    revalidate: 60*60*8
  }
  
}
