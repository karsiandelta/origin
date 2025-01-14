import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const loginLink = document.querySelector('a[href="login.html"]'); 

  if (user) {
    // Usuario ha iniciado sesión
    const displayName = user.displayName;
    const email = user.email;

    document.getElementById('user-name').textContent = displayName || 'Nombre no disponible';
    document.getElementById('user-email').textContent = email;

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

    // Modificar el elemento de la lista "Iniciar sesión"
    if (loginLink) {
      loginLink.textContent = ''; // Elimina el texto "Iniciar sesión"

      // Crear un elemento div para el menú de usuario
      const userMenu = document.createElement('div');
      userMenu.classList.add('user-menu');
      userMenu.innerHTML = `
        <span>${displayName || email}</span>
        <ul>
          <li><a href="#" id="logout-link">Cerrar sesión</a></li>
          </ul>
      `;
      loginLink.appendChild(userMenu);

      // Ocultar el menú inicialmente
      userMenu.style.display = 'none';

      // Mostrar/ocultar el menú al pasar el ratón
      loginLink.addEventListener('mouseover', () => {
        userMenu.style.display = 'block';
      });
      loginLink.addEventListener('mouseout', () => {
        userMenu.style.display = 'none';
      });

      // Manejar el cierre de sesión desde el enlace en el menú
      const logoutLink = document.getElementById('logout-link');
      logoutLink.addEventListener('click', (event) => {
        event.preventDefault();
        signOut(auth).then(() => {
          console.log('Sesión cerrada');
          window.location.href = 'login.html';
        }).catch((error) => {
          console.error('Error al cerrar sesión:', error);
          alert('Error al cerrar sesión');
        });
      });
    }

  } else {
    // No hay ningún usuario con la sesión iniciada
    // Mostrar el enlace "Iniciar sesión"
    if (loginLink) {
      loginLink.textContent = 'Iniciar sesión';
      loginLink.href = 'login.html';
    }
  }
});