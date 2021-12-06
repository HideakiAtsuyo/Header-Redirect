const express = require('express'),
    app = express(),
    config = require("./config.json");

app.set('view engine', 'ejs');
app.set('views', `${__dirname}\\views`);

app.get('/', (req, res) => {
    var meth = req.query.method;
    if(meth == "render"){
        res.setHeader("Refresh", `5; url=${config.web.redirectLink}`);
        res.setHeader("X-Powered-By", config.Oof);
        return res.render('test', { title: config.web.siteName, name: config.web.redirectName, link: config.web.redirectLink, songName: "Never Gonna Give You Up" });  
    } else if(meth == "nothing1"){
        res.setHeader("Refresh", `5; url=${config.web.redirectLink}`);
        res.setHeader("X-Powered-By", config.Oof);
        res.send(); // or .end, it's not totally the same but both work
    } else if(meth == "nothing2"){
        res.writeHead(1337-1137, {"Refresh": `5; url=${config.web.redirectLink}`, "X-Powered-By": config.Oof}); // Status Code + all your headers instead of define them one by one
        res.end();
    } else {

        return res.send(`${req.protocol}://${req.get('host')}/?method=%m%<br>Replace %m% with one of the "methods"<br><br>Methods:<br>render<br>nothing1<br>nothing2`)
    }
})

app.listen(config.web.port, () => {
  console.log(`Listening on port: ${config.web.port}`)
  console.log(config["web"]) //Omg
})