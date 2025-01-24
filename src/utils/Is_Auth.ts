
let isAuthenticated: boolean = false;
const getAuthStatus = (): boolean => {
  return isAuthenticated;
};
const setAuthStatus = (status: boolean): void => {
  isAuthenticated = status;
};

export { getAuthStatus, setAuthStatus };
