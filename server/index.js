const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'outbidderapi',
  issuerBaseURL: `https://dev-yogzkx53.us.auth0.com/`,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

const posts = require('./routes/api/posts');
const users = require('./routes/api/users');

app.use('/users', checkJwt, users);
app.use('/encant', posts);

// Handle production
if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));