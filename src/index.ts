interface User {
  name: string;
  id: number;
  // grade?: number;
}

const user1: User = {
  name: 'John',
  id: 1,
  // grade: 50
};

class UserAccount {
  name: string;
  id: number;
  
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount('Bill', 2);

console.log(user1, user2);