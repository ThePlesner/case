import { getAllUsers, getSingleUser } from '../services/user.service';
import { expandedUser, Users } from '../models/user.model';
import { getUserPosts } from '../services/post.service';

class UsersController {
  static async getAllUsers(): Promise<Users> {
    return await getAllUsers();
  }

  static async getSingleUser(id: string): Promise<expandedUser> {
    const user = await getSingleUser(id);
    const posts = await getUserPosts(id);

    return {
      user,
      posts,
    };
  }
}

export default UsersController;
