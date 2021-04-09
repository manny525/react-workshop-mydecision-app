import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ background: '#20222E', height: '100vh', overflow: 'hidden' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
