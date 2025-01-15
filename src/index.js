import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificar el estado de autenticación del usuario
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario ha iniciado sesión, redirigir a bienvenida.html
    window.location.href = 'bienvenida.html';
  } else {
    // Usuario no ha iniciado sesión, mostrar la página de inicio normal
    // ... (El código para mostrar las opciones de registro y login ya está en index.html) ...
  }
});

// Manejar el cierre de sesión (este código no necesita cambios)
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      console.log('Sesión cerrada');
      window.location.href = 'login.html';
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
      alert('Error al cerrar sesión');
    });
  });
}