// readOnly
type User = {
  readonly _id: string;
  name: string;
  email: string;
  hisActive: boolean;
  creditcardNumber?: string;
};

let myUser: User = {
  _id: "123",
  name: "sibu",
  email: "sibu@gmail.com",
  hisActive: true,
  creditcardNumber: "",
};

myUser.email = "sibu1@gmail.com";
myUser._id = "";

// Union

type creditCardNumber = {
  creditCardNUmber: number;
};

type creditCardDate = {
  creditCardDate: string;
};

type creditCardDetail = creditCardDetail &
  creditCardNumber & {
    cvv: string;
  };
