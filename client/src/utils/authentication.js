class AuthenticationService {
  setToken(idToken) {
    //Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }
}

export default new AuthenticationService();
