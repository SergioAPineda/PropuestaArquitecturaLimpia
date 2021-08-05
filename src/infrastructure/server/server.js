require("dotenv").config();
const app = require("../app/app");

//Settings
app.set("port", process.env.PORT || 4000);

//Server listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
