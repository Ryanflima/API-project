require('dotenv').config()
const unirest = require('unirest');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.render( 'home.ejs', { ip: null, error: null } );
  });

app.post('/', function(req, res) {
    var options = {
        method: 'GET',
        url: 'https://tony11-blacklist-ip-v1.p.rapidapi.com/ipv4/'+ req.body.IP,
        headers: {
          'x-rapidapi-host': 'tony11-blacklist-ip-v1.p.rapidapi.com',
          'x-rapidapi-key': '00120c5efamshf7d1053fdbaa4d0p112cdajsn59ac94ed1cc3'
        }
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
          let status =   JSON.parse(body).status
            console.log(status)
          res.render( 'home.ejs', { ip: status, error: null } );   
          
      });
})



app.listen(3000, function(){
    console.log('server is live on port: 3000');
});