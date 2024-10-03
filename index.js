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
    title: "Mzuni IMIS",
    downloadColor: "bg-primary",
    icon: "https://storage.googleapis.com/mzunidates/imis/icon.png",
    appDescription:
      "The Mzuni IMIS Portal is a centralized platform designed to streamline academic processes for students at Mzuzu University. Through the portal, students can easily register for courses, access real-time grade updates, manage course enrollment, and view fee payment details. Mzuni IMIS offers a personalized dashboard, providing students with important announcements, academic calendar updates, and the tools needed to efficiently manage their academic journey, ensuring they stay informed and organized throughout their time at the university.",
    appScreenshots: appPics,
    downloadLink: "https://storage.googleapis.com/mzunidates/imis/MZUNI%20IMIS.apk",
  };
  res.render("home", appData);
});

app.get("/idsrtutor", async (req, res) => {
  const appPics = [];

  for (let i = 1; i <= 8; i++) {
    appPics.push(
      `https://storage.googleapis.com/mzunidates/idsr/page${i}.jpg`
    );
  }

  const appData = {
    appName: "IDSR Tutor",
    title: "IDSR Tutor",
    downloadColor: "items-center justify-center bg-blue-600 w-full p-2 mt-6 rounded-2xl",
    icon: "https://storage.googleapis.com/mzunidates/idsr/icon.png",
    appDescription:
      "The IDSR Tutor is an innovative platform designed to empower health workers by leveraging artificial intelligence to access vital information efficiently. Through the app, users can quickly search for disease surveillance data, guidelines, and best practices tailored to their specific needs. IDSR Tutor provides personalized recommendations, real-time updates on health trends, and access to training resources, ensuring that health workers are well-equipped to respond to public health challenges. With its user-friendly interface and comprehensive database, IDSR Tutor streamlines the process of finding critical information, enabling health professionals to make informed decisions and enhance their impact on community health.",
    appScreenshots: appPics,
    downloadLink: "https://storage.googleapis.com/mzunidates/idsr/idsrtutor.apk",
  };
  res.render("idsr", appData);
});

app.listen(port, "0.0.0.0");
