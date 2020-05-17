export const API_URL = 'http://localhost:3001';

export function isLoggedInUser() {
  const user = localStorage.getItem('loggedInUser');
  if (!user || user.trim().length === 0) {
    return false;
  }
  return true;
}
