import axios from "axios";

const BASE_URL = "https://mywallet-api-gzx7.onrender.com";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function signIn(body) {
  const promise = await axios.post(`${BASE_URL}/signin`, body)

  return promise;
}

export default { signIn };
