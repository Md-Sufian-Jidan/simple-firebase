/**
 *                  -------------------------
 *                          Initial setUp
 *                  -------------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project 
 * 6. DANGER: Do Not publish or make firebase config to public by pushing to github
 *                  -----------------------
 *                          Integration
 *                  ------------------------
 * 7. Visit: Go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from thr firebase.config.js file: export default app 
 * 9. Login jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app) 
 *                  ---------------------
 *                      Provider SetUp
 *                  ----------------------
 * 11. import googleAuthProvider and create a new Provider
 * 12. use signInWithPopUp and pass auth and provider 
 * 13. activate sign in method (google,facebook,whatsapp, github,)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * 
 *                  --------------------------
 *                      More Auth Provider
 *                  --------------------------
 * 1. activate the auth provider (create app, provide redirect URL, client id , client secret)
 */