import { useState } from 'react';
import Cards from './components/cards/cards'
import Form from './components/form/form'
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
    tipo: ""
  })
  
  return (
    <>
      <MyContext.Provider value={{novaEntrada, setNovaEntrada}}>
        <Title />
        <Cards />
        <Form />
      </MyContext.Provider>
    </>
  )
}

export default App