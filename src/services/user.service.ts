export async function getAllUsers() {
  return await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
}

export async function getSingleUser(userId: string) {
  return await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
}
