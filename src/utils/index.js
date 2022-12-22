export const getUserInfo = () => {
  const value = JSON.parse(localStorage.getItem("user"));
  return value;
};

export const signOutUser = () => {
  localStorage.removeItem("user");
};

export const getCookie = (key) => {
  const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};
