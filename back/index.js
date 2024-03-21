const app = require("./src/server");
const port = 3000;
const conDb = require("./src/config/conDB");

conDb()
  .then((res) => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
  }).catch((err) => {
    console.log(err);
  });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
