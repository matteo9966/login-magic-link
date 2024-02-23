export const config = {
  routes: {
    landing: {
      base: '',
      home: { path: 'home', absolute: '/home' },
    },
    authentication: {
      base: 'authentication',
      login: { path: 'login', absolute: '/authentication/login' },
      signup: { path: 'signup', absolute: '/authentication/signup' },
    },
  },
};
