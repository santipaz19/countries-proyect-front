import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Detail from "./components/detail/Detail";
import Countries from "./components/countries/Countries";
import Form from './components/form/form';
import { About } from './components/about/about';


function App() {


  const { pathname } = useLocation()

  return (
    <div className="App">
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Countries />} />
        <Route path="/countries/:idPais" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-activity" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
