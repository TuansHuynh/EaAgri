import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/index.scss'
import { router } from './routers/Router.tsx'
import { RouterProvider } from 'react-router-dom'
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
