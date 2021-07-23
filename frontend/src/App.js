
import Layout from './container/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes/index';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((i,key)=>(
              <Route key={key} {...i}></Route>
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
