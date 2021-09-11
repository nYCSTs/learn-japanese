import './App.css';
import Routes from './Routes'
import UserProvider from './Context';
import AppDiv from './AppDiv';

function App() {
  return (
    <UserProvider>
      <AppDiv>
        <Routes />
      </AppDiv>
    </UserProvider>
  );
}

export default App;