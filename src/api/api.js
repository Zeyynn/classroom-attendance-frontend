const API_URL = "http://127.0.0.1:8000/api";

export const get = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`);
  return await res.json();
};


export const post = async (endpoint, data) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};
