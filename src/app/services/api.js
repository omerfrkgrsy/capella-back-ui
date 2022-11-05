import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return axios.create({
    baseURL: "https://localhost:7083/api/",
  });
};
