import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from '@/hooks/useTheme'
import './index.css'
import './components/ui/counter.css'
import './components/ui/curved-loop.css'
import './components/ui/flowing-menu.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
