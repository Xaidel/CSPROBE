import APIClient from "probeclient";

const client = new APIClient(import.meta.env.VITE_BACKEND_BASE_URL);

export default client;