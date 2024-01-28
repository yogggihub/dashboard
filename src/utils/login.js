export const login = function () {   
  const loginUserData = JSON.parse(sessionStorage.getItem("auth"));
  if (loginUserData) {
    return { access: true, id:loginUserData.id, role:loginUserData.role };
  } else {
    return { access: false };
  }
};
