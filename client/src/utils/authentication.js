import decode from "jwt-decode";

class AuthenticationService {
  /** Saves user token to localStorage*/
  setToken(idToken) {
    localStorage.setItem("id_token", idToken);
  }

  /** Check logged in status */
  isLoggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  /** Get token from local storage */
  getToken() {
    return localStorage.getItem("id_token");
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("id_token");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /** Log the user out by removing the token and send them back to the home screen */
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthenticationService();
