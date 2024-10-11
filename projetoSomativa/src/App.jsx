import './App.css'

import NavBar from './components/NavBar'

import Container from './components/Container'

import Home from './components/Home'

function App() {

  return (
    <>  
      
      {/* Estrutura de Navegação */}
      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element= {<NavBar/>}>
              <Route path='/' element= {<Home/>}/>
              <Route path='/listSneaker' element= {<ListSneaker/>}/>
              <Route path='/createSneaker' element= {<CreateSneaker/>}/>
            </Route>
            

          </Routes>

        </Container>

      </BrowserRouter>

    </>
  )
}

export default App
