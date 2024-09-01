type User = {
  name: string;
  email: string;
  hisActive: boolean;
};

function createUser(user: User): User {
  return { name: "sibu", email: "sibu@gmail.com", hisActive: true };
}

createUser({ name: "sibu", email: "sibu@gmail.com", hisActive: true });
