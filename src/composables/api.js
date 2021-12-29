import axios from "axios";

export default function api(url, params, callback) {
  let link = window.localStorage.getItem("api");
  axios
    .post(link + url, params)
    .then((res) => {
      callback(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}
