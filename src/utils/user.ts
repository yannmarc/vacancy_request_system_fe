export const getActiveUser = (): string => {
    return localStorage.getItem("active_user") || "employee";
  };
  
export const setActiveUser = (user: string) => {
    localStorage.setItem("active_user", user);
};