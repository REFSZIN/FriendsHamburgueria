import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Perfil from './pages/Perfil';
import SignOut from './pages/SignOut';
import SignIn from './pages/SignIn';
import Cardapio from './pages/Cardapio';
import Cart from './pages/Cart';
import Avaliacao from './pages/Avaliacao';
import Pontos from './pages/Pontos';
import Panel from './pages/Panel';

const firebaseConfig = {
  apiKey: 'AIzaSyCcDocJmACaQnHwV7O7bxzHi45k9QWfBCU',
  authDomain: 'drivent-38bdd.firebaseapp.com',
  projectId: 'drivent-38bdd',
  storageBucket: 'drivent-38bdd.appspot.com',
  messagingSenderId: '1043691140799',
  appId: '1:1043691140799:web:57a907c5a4a7ae1f69f80a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastro" element={<SignOut />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/cart"
              element={
                <ProtectedRouteGuard>
                  <Cardapio />
                  <Cart />
                  <Panel />
                  <Avaliacao/>
                  <Pontos/>
                </ProtectedRouteGuard>
              }
            >
              <Route index path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>
    {children}
  </>;
}
