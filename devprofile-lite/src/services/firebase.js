// Configuração do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase (estas credenciais serão substituídas pelas do usuário)
const firebaseConfig = {
  apiKey: "AIzaSyBG9UDj4nz4O0cu8BrE3AlYvIb_rflehuQ",
  authDomain: "devprofile-lite-9eda7.firebaseapp.com",
  projectId: "devprofile-lite-9eda7",
  storageBucket: "devprofile-lite-9eda7.firebasestorage.app",
  messagingSenderId: "109189908691",
  appId: "1:109189908691:web:3788b6c3f3934a46912c26"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços do Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
