import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!currentUser) return;
      
      try {
        // Buscar dados do perfil no Firestore usando o UID do usuário autenticado
        const profileRef = doc(db, 'userProfiles', currentUser.uid);
        const profileSnap = await getDoc(profileRef);
        
        if (profileSnap.exists()) {
          setProfile(profileSnap.data());
        } else {
          // Perfil não encontrado para este usuário
          setProfile(null);
        }
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        setError('Não foi possível carregar os dados do perfil.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      setError('Falha ao fazer logout.');
    }
  };

  if (loading) {
    return <div className="container">Carregando perfil...</div>;
  }

  return (
    <div className="container">
      <div className="profile-container">
        <h2>Meu Perfil</h2>
        
        {error && <div className="alert alert-error">{error}</div>}
        
        {profile ? (
          <div className="profile-content">
            <div className="profile-field">
              <h3>Nome Completo</h3>
              <p>{profile.nomeCompleto}</p>
            </div>
            
            <div className="profile-field">
              <h3>Biografia</h3>
              <p>{profile.bioCurta}</p>
            </div>
            
            <div className="profile-field">
              <h3>Portfólio</h3>
              <p>
                <a href={profile.linkPortfolio} target="_blank" rel="noopener noreferrer">
                  {profile.linkPortfolio}
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="profile-not-found">
            <p>Perfil ainda não configurado.</p>
            <p>Os dados do seu perfil precisam ser configurados no Firestore.</p>
          </div>
        )}
        
        <button onClick={handleLogout} className="btn btn-secondary">
          Sair
        </button>
      </div>
    </div>
  );
};

export default Profile;
