import Hero from './components/Hero.jsx'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LargeInputField from './components/LargeInputField.jsx'

function App() {

  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/csvjson" element={<LargeInputField />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  )
}

export default App
