// Practicing Node and using => to create functions -----------------------------------------

// var profileDataArgs = process.argv.slice(2, process.argv.length);

// const animalArray = ["dog", "cat", "pig"];

// animalArray.push("cow");

// const personObj = {
//   name: "Lernantino",
//   age: 99,
// };

// personObj.age = 100;
// personObj.occupation = "Developer";

// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("=============");

//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// Generate HTML in Node ----------------------------------------------------------
const fs = require(`fs`);

const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
