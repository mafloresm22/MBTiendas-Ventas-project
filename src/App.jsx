import styled from "styled-components"
import { GlobalStyle, AppRoutes, Sidebar } from "./index"
import { Device } from "./styles/breakpoints"

function App() {

  return (
    <ContenedorGeneral>
      <GlobalStyle />
      <section className="contentSidebar">
        <Sidebar />
      </section>
      <section className="contentPrincipal">Principal</section>
      <section className="contentRouters">
        <AppRoutes />
      </section>
    </ContenedorGeneral>
  )
}

const ContenedorGeneral = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;

  .contentSidebar{
    display: none;
    background-color: blue;
  }
  .contentPrincipal{
    position: absolute;
    background-color: red;
  }
  .contentRouters{
    background-color: green;
    grid-column: 1;
    width: 100%;
  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;

    .contentSidebar{
      display: initial;
    }
    .contentPrincipal{
      display: none;
    }
    .contentRouters{
      grid-column: 2;
    }
  }
`

export default App
