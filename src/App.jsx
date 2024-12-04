import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

// Componentes lazy
const Home = () => <div><h1>Página Principal</h1><p>Bienvenido a mi aplicación de prueba</p></div>
const About = () => <div><h1>Acerca de</h1><p>Esta es una página de prueba</p></div>

// Componente Layout
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div>Error!</div>}
    >
      <Route
        index
        lazy={async () => {
          return { Component: Home }
        }}
      />
      <Route
        path="/about"
        lazy={async () => {
          return { Component: About }
        }}
      />
    </Route>
  ),
  {
    basename: '/'
  }
)

// Debug helper
router.subscribe((state) => {
  console.log('Navigation state:', state);
});

function App() {
  return <RouterProvider router={router} />
}

export default App
