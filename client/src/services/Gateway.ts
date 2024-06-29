import APIClient from "probeclient";
console.log(import.meta.env.VITE_BACKEND_BASE_URL);
const client = new APIClient(import.meta.env.VITE_BACKEND_BASE_URL);

export default client;