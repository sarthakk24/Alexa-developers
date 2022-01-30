const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let active = null;

const start = function () {
  rl.question("To get started enter your name : ", (ans = "") => {
    executeFirst(ans);
  });
};

const choices = function (choice) {
  const str = choice.toLowerCase().replace(/\s+/g, "");
  if (str === "display") {
    display();
  } else if (str === "add") {
    add();
  } else if (str === "exit") {
    exit();
  } else if (str === "new") {
    newFile();
  } else if (str === "choose") {
    choose();
  } else {
    console.log("\nPlease check spelling !\n");
    executeSecond();
  }
};

const executeFirst = function (ans) {
  rl.question(
    `\nHi ${ans} this is address directory what function do you want to proceed with :- \n \nActive File (${
      active ?? "There is no active file first choose one or create one"
    })\nTo choose a file (type choose)\nTo display the directory (type display) \nto add data in directory (type add) \nto Exit (type exit)\nTo make new directory (type new)\n`,
    choices
  );
};

const executeSecond = function () {
  rl.question(
    `\n ---------------------------------- \nActive File (${
      active ?? "There is no file first choose one"
    })\nNext task\n \nTo choose a file (type choose)\nTo display the directory (type display) \nto add data in directory (type add) \nto Exit (type exit)\nTo make new directory (type new)\n`,
    choices
  );
};

const choose = function () {
  fs.readdir(__dirname, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("\nCurrent directory filenames:");
      data.shift();
      data.forEach((file) => {
        console.log(file);
      });

      rl.question(
        "To choose one file from the following type filename with extension example(abcd.json) :",
        (ans) => {
          active = ans;
          executeSecond();
        }
      );
    }
  });
};

const add = function (file = active) {
  rl.question("Name : ", (name) => {
    rl.question("address : ", (address) => {
      let data = {
        name: name,
        address: address,
      };
      let json = JSON.stringify(data, null, "\t");
      fs.appendFileSync(file, json + ",\n", function (err) {
        if (err) throw err;
      });
      console.log(`Data added to ${file + ".json"} \n`);
      executeSecond();
    });
  });
};

const display = function (activeFile = active) {
  try {
    const data = fs.readFileSync(activeFile, {
      encoding: "utf8",
      flag: "r",
    });

    console.log(data);
  } catch (error) {
    console.log("There is no file present. Make a new one");
  }
  executeSecond();
};

const newFile = function () {
  rl.question(
    "Name of the new address directory without any extension: ",
    (file) => {
      fs.appendFileSync(file + ".json", "", function (err) {
        if (err) throw err;
      });
      active = file + ".json";
      executeSecond();
    }
  );
};

const exit = () => {
  rl.close();
};

start();
