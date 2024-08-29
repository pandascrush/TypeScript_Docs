const createNewUser = {
  name: "Siva",
  email: "sivaranji@gmail.com",
  isPaid: false,
};

function createUser({ name: string, isPaid: boolean }) {}
const newUser = { name: "sibu", isPaid: false };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
