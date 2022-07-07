import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Reserva from '../components/Reserva/Reserva'
import Home from "../components/Home/Home";
import RecursoSeleccionado from "../components/RecursoSeleccionado/RecursoSeleccionado";
import Calendar from "../components/Calendar/Calendar";
function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/reserva' element={<Reserva/>}></Route>
      {/* <Route path='/recurso-seleccionado/:recurso' element={<RecursoSeleccionado/>}></Route> */}
      <Route path="/calendar" element={<Calendar/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
