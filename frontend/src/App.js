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
