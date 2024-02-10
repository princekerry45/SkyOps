const firebaseConfig = {
    apiKey: "AIzaSyA0-hI-1t6IfPC_Ds--2yZ5FeuLMuJFIz8",
    authDomain: "skyops-dbc3e.firebaseapp.com",
    databaseURL: "https://skyops-dbc3e-default-rtdb.firebaseio.com",
    projectId: "skyops-dbc3e",
    storageBucket: "skyops-dbc3e.appspot.com",
    messagingSenderId: "989715164987",
    appId: "1:989715164987:web:969a9bb0813e71562a111e",
    measurementId: "G-QWJF34DFX7"
  };

  firebase.initializeApp(firebaseConfig);
  
  //ref

  firebase.database().ref('User')