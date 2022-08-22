const fs = require("fs");

fs.readFile("./text.txt", (error, data) => {
  fs.mkdir("./files", () => {
    fs.writeFile(
      "./files/test.txt",
      `${data} this new text exapmle two`,
      (error) => {
        error ? console.log(error) : null;
      }
    );
  });
});
