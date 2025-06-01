import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Componente para proteger rotas que exigem autenticação
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  
  // Se não houver usuário autenticado, redireciona para a página de login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  // Se houver usuário autenticado, renderiza o conteúdo da rota
  return children;
};

export default PrivateRoute;
