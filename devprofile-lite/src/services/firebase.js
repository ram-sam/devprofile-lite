// Configuração do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase (estas credenciais serão substituídas pelas do usuário)
const firebaseConfig = {
  apiKey: "AIzaSyDummyApiKeyForDevProfileLite",
  authDomain: "devprofile-lite.firebaseapp.com",
  projectId: "devprofile-lite",
  storageBucket: "devprofile-lite.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços do Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
