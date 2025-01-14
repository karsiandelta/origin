import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario ha iniciado sesión
    const name = user.displayName; 
    const email = user.email; 

    document.getElementById('user-name').textContent = name;
    document.getElementById('user-email').textContent = email;
  } else {
    // Usuario no ha iniciado sesión
    // Redirigir a la página de login
    window.location.href = 'login.html';
  }
});

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Redirigir a la página de login
    window.location.href = 'login.html';
  }).catch((error) => {
    console.error('Error al cerrar sesión:', error);
  });
});