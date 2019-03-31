let express = require('express');
let history = require('connect-history-api-fallback');
let axios = require('axios');
let app = express();

app.get('/api/search/:query', function (req, res) {
  axios.get(`http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=${req.params.query}&site=stackoverflow`)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  })
});

app.get('/api/userquestions/:id', function (req, res) {
  axios.get(`http://api.stackexchange.com/2.2/users/${req.params.id}/questions?order=desc&sort=votes&site=stackoverflow`)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  })
});

app.get('/api/questionsbytag/:tag', function (req, res) {
  axios.get(`http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=${req.params.tag}&site=stackoverflow`)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  })
});

app.get('/api/answers/:questionId', function (req, res) {
  axios.get(`http://api.stackexchange.com/2.2/questions/${req.params.questionId}/answers?order=desc&sort=activity&site=stackoverflow`)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  })
});

app.get('/api/question/:questionId', function (req, res) {
  axios.get(`http://api.stackexchange.com/2.2/questions/${req.params.questionId}?order=desc&sort=activity&site=stackoverflow`)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  })
});

app.use(history());

app.use( express.static(__dirname + '/dist/my-app' ) ); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});