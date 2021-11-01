export default async function setupAxios(axios, store) {

  await axios.interceptors.request.use(
    config => {
      
      const { auth: { authToken } } = store.getState();
      
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );



}