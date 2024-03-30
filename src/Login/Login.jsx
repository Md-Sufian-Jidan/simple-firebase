import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState();

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;
    const gitHubProvider = new GithubAuthProvider;

    const handleSignIn = () => {
        // console.log('google mama is coming');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const handleSignOut = () => {
        // console.log('sign out go forward');
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    const handleGithubSignIn= ()=> {
        signInWithPopup(auth, gitHubProvider)
        .then((result)=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            {/* {user ? logOut : signIn } */}

            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <div>
                        <button onClick={handleSignIn}>Google Login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>
                    </div>
            }
            {user && <div>
                <h3>User : {user?.displayName}</h3>
                <h3>Email : {user?.email}</h3>
                <img src={user?.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;