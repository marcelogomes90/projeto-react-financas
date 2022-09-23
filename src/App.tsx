import { useState } from 'react';
import Cards from './components/cards/cards'
import Form from './components/form/form'
import Entradas from './components/entradas/entradas';
import Title from './components/title/title'
import MyContext from './context/MyContext'


function App() {

  const [novaEntrada, setNovaEntrada] = useState({
    nome: "",
    valor: "",
    categoria: "",
    tipo: "",
    id: 0,
  })

  return (
    <>
      <MyContext.Provider value={{novaEntrada, setNovaEntrada}}>
        <Title />
        <Cards />
        <Form />
        <Entradas />
      </MyContext.Provider>
    </>
  )
}

export default App