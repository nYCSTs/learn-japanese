import './App.css';
import Routes from './Routes'
import UserProvider from './Context';

function App() {
  return (
    <div >
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;

/* 
    background: url('../image/wallpaper-index.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
*/
