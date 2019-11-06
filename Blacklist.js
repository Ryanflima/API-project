const unirest = require('unirest');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.render( 'home.ejs' );
  });

app.post('/', function(req, res) {
    let url = "https://tony11-blacklist-ip-v1.p.rapidapi.com/ipv4/%7Bip%7D"
})



app.listen(3000, function(){
    console.log('server is live on port: 3000');
});
