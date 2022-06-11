import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import './App.less';
import Cadastro from './components/Form';
import Container from "./components/Layout/Container";
import Contact from "./components/pages/Contact";
import Dogs from "./components/pages/Dogs";
import Home from "./components/pages/Home";
import Partners from "./components/pages/Partners";


const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Router>
      <Layout className='layout'>
        <Header className='App_header'>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/Home">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Dogs">Cães</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Partners">Parceiros</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Contact">Contato</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
        
          <Switch className= "rotas"  >  
          <Container >                    
               <Route path="/Home" element={<Home />}>
              <>Home</>
            </Route> 
            <Route path="/Dogs" element={<Dogs />}>
              <>Encontre um pet</>
            </Route>
            <Route path="/Partners" element={<Partners />}>
              <>Parceiros</>
            </Route>
            <Route path="/Contact" element={<Contact />}>
              <>Contato</>
            </Route>
            </Container>
            </Switch>         
            <Cadastro />        
        </Content>
        <Footer className='Footer'> Lues  2002 </Footer> 

      </Layout>
    </Router>
  );
  }

export default App;
