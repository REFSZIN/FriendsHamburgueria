import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import useToken from './hooks/useToken';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import SignOut from './pages/SignOut';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Perfil from './pages/Perfil';
import Painel from './pages/Panel';
import useType from './hooks/useType';
import Cardapio from './pages/Cardapio';
import Pedidos from './pages/Pedidos';

const firebaseConfig = {
  apiKey: 'AIzaSyBwEcRwGiUAeP2undbRSLyJ5qvFxxS1uwM',
  authDomain: 'friends-hamburgueria.firebaseapp.com',
  projectId: 'friends-hamburgueria',
  storageBucket: 'friends-hamburgueria.appspot.com',
  messagingSenderId: '841283367970',
  appId: '1:841283367970:web:6c563e527ff1a68350c67b',
  measurementId: 'G-D0B92L4LF2'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default function App() {
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastro" element={<SignOut />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/meuspedidos" element={<Pedidos />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/login" element={<SignIn />} />
              <Route
                path="/painel"
                element={
                  <ProtectedRouteGuardAdmin>
                    <Painel />
                  </ProtectedRouteGuardAdmin>
                }
              />
              <Route
                path="/carrinho"
                element={
                  <ProtectedRouteGuard>
                    <Cart />
                  </ProtectedRouteGuard>
                }
              />
              <Route index path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </UserProvider>
      </CartProvider>
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

function ProtectedRouteGuardAdmin({ children }) {
  const token = useToken();
  const type = useType();
  if (!token) {
    return <Navigate to="/login" />;
  }
  if (type !== 999) {
    return <Navigate to="/login" />;
  }
  return <>
    {children}
  </>;
}
