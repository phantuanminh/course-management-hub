import "./App.css"
import CardContainer from './components/CardContainer'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <CardContainer />
      <br />
      <Footer />
    </div>
  )
}

export default App
