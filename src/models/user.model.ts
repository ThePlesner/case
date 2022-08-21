import { Posts } from './post.model';

export interface User {
  id: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Users {
  users: User[];
}

export interface expandedUser {
  user: User;
  posts: Posts;
}
