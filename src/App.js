import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Counter from './components/Counter'
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Counter />
        <Section />
      </div>
      <Footer />
    </div>
  )
}

export default App
