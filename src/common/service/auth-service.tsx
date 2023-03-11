import axios from "axios";

const base_url: string = process.env.REACT_APP_BASE_URL!;

export default class AuthService {
  fullUrl: string = "";

  constructor() {}

  login(prevUrl: string): void {
    this.fullUrl = base_url + "/login/auth";
    window.location.href = this.fullUrl;
    localStorage.setItem("prevUrl", prevUrl);
  }

  logout(): void {
    this.fullUrl = base_url + "/logout";
    window.location.href = this.fullUrl;
    //localStorage.setItem("prevUrl", prevUrl);
  }

  getUser(): Promise<Response> {
    let userUrl: string = base_url + "/user/detail";
    return axios.get(userUrl);
  }
}
