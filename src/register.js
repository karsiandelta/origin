import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById('register-form');

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario creado:', user);
        // Redirigir a la página de usuario o mostrar un mensaje de éxito
        window.location.href = 'usuario.html'; 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al registrar usuario:', errorCode, errorMessage);
        // Mostrar un mensaje de error al usuario, por ejemplo, con un alert
        alert(`Error al registrarse: ${errorMessage}`); 
      });
  });
}