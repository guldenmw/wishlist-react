import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

class Firebase {
  private auth: firebase.auth.Auth;
  private db: firebase.firestore.Firestore;
  public isAuthenticated: boolean;

  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.isAuthenticated = !!this.auth.currentUser;

    app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL)
    this.listener();
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name: string, email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser?.updateProfile({
      displayName: name
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  listener() {
    this.auth.onAuthStateChanged((authUser) => {
      console.log('auth state change: authUser: ', authUser);
      this.isAuthenticated = !!authUser;
    })
  }
}

export default new Firebase();
