import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Función para obtener las novedades de Firestore
async function getNovedades() {
  try {
    const novedadesCollection = collection(db, 'novedades'); // Reemplaza 'novedades' con el nombre de tu colección
    const novedadesSnapshot = await getDocs(novedadesCollection);
    const novedades = novedadesSnapshot.docs.map(doc => doc.data());
    return novedades;
  } catch (error) {
    console.error('Error al obtener novedades:', error);
    return [];
  }
}

// Función para mostrar las novedades en la página
function displayNovedades(novedades) {
  const novedadesContainer = document.getElementById('novedades-container');
  if (novedadesContainer) {
    novedadesContainer.innerHTML = ''; // Limpiar el contenedor

    novedades.forEach(novedad => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h3>${novedad.titulo}</h3> 
        <p>${novedad.contenido}</p> 
      `;
      novedadesContainer.appendChild(article);
    });
  }
}

// Verificar el estado de autenticación y mostrar las novedades
onAuthStateChanged(auth, async (user) => {
  // ... (código para ocultar/mostrar opciones de login/registro) ...

  // Obtener las novedades de Firestore
  const novedades = await getNovedades();

  // Mostrar las novedades en la página
  displayNovedades(novedades);
});