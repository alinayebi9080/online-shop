import axios from "axios";
import { basUrl as baseURL } from "./constants";

const config = { baseURL };
export const axiosInstance = axios.create(config);
