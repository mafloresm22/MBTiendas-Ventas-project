import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, AppRoutes, Sidebar, useAuthStore } from "./index"
import { useThemeStore } from "./store/ThemeStore"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyles } = useThemeStore()
  const { pathname } = useLocation()
  const { observarSesion } = useAuthStore()

  useEffect(() => {
    observarSesion()
  }, [])

  return (
    <ThemeProvider theme={themeStyles}>
      <ContenedorGeneral className={sidebarOpen ? "active" : ""}>
        <GlobalStyle />

        {pathname !== "/login" && (
          <section className="contentSidebar">
            <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
          </section>
        )}

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
