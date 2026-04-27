import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, AppRoutes, Sidebar } from "./index"
import { Device } from "./styles/breakpoints"
import { useThemeStore } from "./store/ThemeStore"
import { useState } from "react"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyles } = useThemeStore()
  return (
    <ThemeProvider theme={themeStyles}>
      <ContenedorGeneral>
        <GlobalStyle />
        <section className="contentSidebar">
          <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
        </section>
        <section className="contentRouters">
          <AppRoutes />
        </section>
      </ContenedorGeneral>
    </ThemeProvider>
  )
}

const ContenedorGeneral = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.bgtotal};
  overflow: hidden;

  .contentSidebar {
    z-index: 100;
  }

  .contentRouters {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.bgtotal};
  }
`

export default App
