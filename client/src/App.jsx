import Hero from './components/Hero.jsx'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Convert from './components/convert/Convert.jsx'

function App() {

  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/csvjson" element={<Convert input={'CSV'} output={'JSON'}/>} />
            <Route path="/jsoncsv" element={<Convert input={'JSON'} output={'CSV'}/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  )
}

export default App
