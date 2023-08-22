const mongoose = require("mongoose");

exports.Database = function Database() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.Database || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
