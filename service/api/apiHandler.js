import axios from "axios";
import * as local from "../storage/storage";

export const request = axios.create();

request.interceptors.request.use(function (config) {
    let token = local.getToken();
    config.headers["Accept"] = "application/json";
    config.headers["Authorization"] = token ? "Bearer " + token : "";
    return config;
});
