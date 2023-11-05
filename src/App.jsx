
import Blog from "./pages/Blog";
import { Routes,Route } from "react-router-dom";
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <Layout>
     <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
     </Layout>
  )
}

export default App
