import axios from "axios";

const base_url: string = process.env.REACT_APP_BASE_URL!;

export default class CommonService {
  fullUrl: string = "";

  constructor() {}

  get(url: string): void {
    this.fullUrl = base_url + url;
    console.log(this.fullUrl);
    window.location.href = this.fullUrl;
    //return axios.get(this.fullUrl);
  }
}
