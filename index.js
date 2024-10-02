const express = require("express");
const bodyparser = require("body-parser");

const cors = require("cors");

require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 3000;

app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const appPics = [];

  for (let i = 1; i <= 10; i++) {
    appPics.push(
      `https://storage.googleapis.com/mzunidates/imis/page${i}.jpg`
    );
  }

  const appData = {
    appName: "IMIS",
    appDescription:
      "The Mzuni IMIS Portal is a centralized platform designed to streamline academic processes for students at Mzuzu University. Through the portal, students can easily register for courses, access real-time grade updates, manage course enrollment, and view fee payment details. Mzuni IMIS offers a personalized dashboard, providing students with important announcements, academic calendar updates, and the tools needed to efficiently manage their academic journey, ensuring they stay informed and organized throughout their time at the university.",
    appScreenshots: appPics,
    downloadLink: "https://storage.googleapis.com/mzunidates/imis/MZUNI%20IMIS.apk",
  };
  res.render("home", appData);
});

app.listen(port, "0.0.0.0");
