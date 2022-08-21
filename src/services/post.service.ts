export async function getUserPosts(userId: string) {
  return await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json();
}
