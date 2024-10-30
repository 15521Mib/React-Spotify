import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import ConteudoPrincipal from "./components/ConteudoPrincipal";
import generos from "../server/models/Generos";
import idades from "../server/models/Idades";

function App() {

  const [artistas, setArtistas] = useState([]);

  const [generos, setGeneros] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))

      fetch('http://localhost:3000/generos')
      .then(res => res.json())
      .then(data => setGeneros(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))

      fetch('http://localhost:3000/idades')
      .then(res => res.json())
      .then(data => setIdades(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <ConteudoPrincipal>       
          <>
          <h1 >Compositor</h1>
            {
            artistas
            .map(artista => (
              <div key={artista.id} className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <h1>{artista.nome}</h1>
              </div>
            ))}
          <h1 >Generos</h1>
            {
            generos
            .map(generos => (
              <div key={generos.id} className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <h1>{generos.nome}</h1>
              </div>
            ))}
          <h1 >Idades</h1>
            {
            idades
            .map(idades => (
              <div key={idades.id} className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <h1>{idades.idade}</h1>
              </div>
            ))}
          </>
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App