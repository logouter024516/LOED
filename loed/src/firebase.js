import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB_x3Ld4BT-bNvOGyPVJ_8fnmJKPIoY9BM",
    authDomain: "logweet-logsns.firebaseapp.com",
    projectId: "logweet-logsns",
    storageBucket: "logweet-logsns.appspot.com",
    messagingSenderId: "167619857769",
    appId: "1:167619857769:web:69a945d13d1a8bff8441f8"
  };


export default firebase.initializeApp(firebaseConfig);