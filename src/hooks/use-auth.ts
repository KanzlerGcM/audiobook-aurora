
// Simple auth hook (placeholder for real authentication)
export const useAuth = () => {
  // In a real app, this would check an auth provider or token
  // For now, we'll simulate with localStorage
  const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.reload();
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  };

  return {
    isLoggedIn: isLoggedIn(),
    login,
    logout
  };
};
