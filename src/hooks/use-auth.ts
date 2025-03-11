
// Auth hook designed for easy backend integration
export const useAuth = () => {
  // This structure can be easily adapted to use a real authentication system
  // Just replace these localStorage functions with actual API calls when ready
  
  const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  };

  const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  const login = (email: string, password: string) => {
    // In a real implementation, this would be an API call
    // For now, we'll simulate with localStorage
    console.log('Login attempt:', { email, password });
    
    // Simulating successful login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify({ 
      email,
      name: email.split('@')[0], // Simple demo data
      userId: `user-${Date.now()}` // Generate a pretend user ID
    }));
    
    window.location.reload();
    return true;
  };

  const register = (email: string, password: string, name: string) => {
    // In a real implementation, this would be an API call
    console.log('Register attempt:', { email, password, name });
    
    // Simply simulate registration success
    localStorage.setItem('userData', JSON.stringify({ email, name, userId: `user-${Date.now()}` }));
    
    // Auto-login after registration
    login(email, password);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    window.location.reload();
  };

  return {
    isLoggedIn: isLoggedIn(),
    userData: getUserData(),
    login,
    register,
    logout
  };
};
