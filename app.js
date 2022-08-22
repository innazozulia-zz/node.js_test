const fs = require("fs");

fs.readFile("./text.txt", (error, data) => {
  fs.mkdir("./files", () => {
    fs.writeFile(
      "./files/text.txt",
      `${data} this new text exapmle two`,
      (error) => {
        error ? console.log(error) : null;
      }
    );
  });
});

// delete files and folders
setTimeout(() => {
  if (fs.existsSync("./files/text.txt")) {
    fs.unlink("./files/text.txt", () => {});
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync("./files")) {
    fs.rmdir("./files", () => {});
  }
}, 6000);
