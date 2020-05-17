import { useEffect, useState } from 'react';


const useFirebaseAuthentication = (firebase: firebase.app.App) => {
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser: firebase.User | null) => {
          const user = authUser ? authUser : null;
          setAuthUser(user);
      },
    );
    return () => unsubscribe();
  }, [firebase]);

  return authUser
}

export default useFirebaseAuthentication;
