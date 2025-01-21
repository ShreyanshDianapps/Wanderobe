// import statusCodes along with GoogleSignin
import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
  
  // Somewhere in your code
  GoogleSignin.configure(
    {

        webClientId:"1055137236521-jcabnerom2svugbf8in5fovgb7j6tlak.apps.googleusercontent.com",
        iosClientId: "1055137236521-g978q9ml5l9cjmsteojp0rp34emlk9v7.apps.googleusercontent.com",
        offlineAccess:true
    }
  )
  const Google_signIn = async () => {
    console.log("You are Sign in")
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo); // user info including email and token
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress');
      } else {
        console.error(error);
      }
    }
  };

  const GooglesignOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('User signed out');
    } catch (error) {
      console.error(error);
    }
  };
  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log('Login success with permissions: ' + result.grantedPermissions.toString());
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          console.log('Access Token: ', data.accessToken);
          // You can now use the access token to authenticate with your backend
        }
      }
    } catch (error) {
      console.error('Login fail with error: ' + error);
    }
  };
  export {
    handleFacebookLogin,
    Google_signIn,
    GooglesignOut,
   
  }