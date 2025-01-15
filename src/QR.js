import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase.js';
import QRCode from 'qrcode'; // Asegúrate de instalar la librería: npm install qrcode

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario ha iniciado sesión
    const uid = user.uid; // ID único del usuario

    // Generar el QR con la información del usuario (puedes usar el UID u otros datos)
    QRCode.toCanvas(document.getElementById('qr-code'), uid, { errorCorrectionLevel: 'H' }, function (error) {
      if (error) console.error(error)
      console.log('QR generado');
    });

  } else {
    // No ha iniciado sesión, redirigir a login
    window.location.href = 'login.html';
  }
});