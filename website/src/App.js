import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import Rodape from './components/Footer/Footer';
import Navbar from './components/Header';
import Container from './components/Layout/Container';
import Cadastre from './components/pages/Cadastre';
import Dogs from './components/pages/Dogs';
import Home from './components/pages/Home';
import Partners from './components/pages/Partners';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Navbar />
      <Content>
        <Switch>
          <Container>
          <Route path="#" element={<Home />}>
              <Home />
            </Route>
            <Route path="/Home" element={<Home />}>
              <Home />
            </Route>
            <Route path="/Dogs" element={<Dogs />}>
              <Dogs />
            </Route>
            <Route path="/Partners" element={<Partners />}>
              <Partners />
            </Route>
            <Route path="/Cadastre" element={<Cadastre />}>
              <Cadastre />
            </Route>
          </Container>
        </Switch>
      </Content>
      <Rodape />
    </Router>
  );
}

export default App;
