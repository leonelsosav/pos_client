import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Empleados from './pages/Empleados'
import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import Venta from './pages/Venta'
import Ticket from './pages/Ticket'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Empleados}></Route>
          <Route path="/clientes" component={Clientes}></Route>
          <Route path="/productos" component={Productos}></Route>
          <Route path="/venta" component={Venta}></Route>
          <Route path="/ticket" component={Ticket}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
