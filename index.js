const http = require("http");
var fs = require("fs");

var homePage = fs.readFileSync("index.html");
var aboutPage = fs.readFileSync("about.html");
var contactPage = fs.readFileSync("contact.html");

// var url = require("url");

// const server = http.createServer((request, response) => {
//   console.log(request.url);

//   response.end("Hello Node Js");
// });

// server.listen(4000);

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/about-us") {
    return res.end(aboutPage);
  } else if (req.url === "/contact-us") {
    return res.end(contactPage);
  } else if (req.url === "/") {
    return res.end(homePage);
  } else {
    res.writeHead(404);
    return res.end("This page is not found in the server.");
    //return res.end(req.url);
  }
  //res.write("Hello Word");
  // res.write(req.url);
  // var q = url.parse(req.url, true).query;
  // var text = q.year + " " + q.month;
  // res.end(text);
});

server.listen(3030);
