importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBq3l0J_1bWmkyOktGcZj03bZ-GubhxYok",
  authDomain: "fcmdata-48110.firebaseapp.com",
  projectId: "fcmdata-48110",
  storageBucket: "fcmdata-48110.firebasestorage.app",
  messagingSenderId: "1029223017021",
  appId: "1:1029223017021:web:50505f238e4cb6f61dd854",
  measurementId: "G-1J5L51S61K",

});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
// Handle background messages
messaging.onBackgroundMessage(async (payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    data: payload.data,
    click_action: payload.notification.click_action,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});