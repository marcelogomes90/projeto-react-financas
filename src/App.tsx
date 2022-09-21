import { useState } from 'react';
import Cards from './components/cards/cards'
import Form from './components/form/form'
import Entradas from './components/entradas/entradas';
import Title from './components/title/title'
import MyContext from './context/MyContext'

interface Entrada {
  nome: string;
  valor: string;
  categoria: string;
  tipo: string;
}

function App() {

  const [novaEntrada, setNovaEntrada] = useState<Entrada>({
    nome: "",
    valor: "",
    categoria: "",
    tipo: "",
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