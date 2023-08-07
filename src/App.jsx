import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { AppContextProvider } from './context/app-context'

function App() {
  return (    
      <AppContextProvider>
        <Header />
        <Hero />
        <Footer />        
      </AppContextProvider>
  )
}

export default App
