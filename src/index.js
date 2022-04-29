const myProfile = {
  name: "a",
  age: "25"
};

const message1 = `${myProfile.name}, ${myProfile.age}`;
console.log(message1);

// 分割代入
const { name, age } = myProfile;
const message2 = `${name}, ${age}`;

console.log(message2);

const list = ["list", 20];

const [nameList, ageList] = list;
const message3 = nameList + ageList;

console.log(message3);

const sayHello = (name) => {
  console.log("こんにちは" + name);
};

sayHello("tes");
