import MainPage from './components/MainPage/MainPage'
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/' component={MainPage} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
