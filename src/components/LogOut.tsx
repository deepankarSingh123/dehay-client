
export const logout = async () => {
  try {
    // Clear local session storage
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('phoneNumber');
    // Redirect to login page
    window.location.href = '/login';
  } catch (error) {
    console.error('Error during logout:', error);
  }
};