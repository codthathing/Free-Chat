export const getUser = async () => {
  const users = await fetch("http://localhost:4000/users");

  if (!users.ok) throw new Error("Unable to access the users API endpoint");

  return users.json();
}