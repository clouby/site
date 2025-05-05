export const fetchUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
};
