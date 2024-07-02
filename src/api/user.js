import config from "../config/config";
import axios from "axios";

const api = axios.create({ baseURL: config.rootUrl });

export const loginUser = (email) => {
  return api.post(`/api/auth/signin`, email).then((data) => data);
};
