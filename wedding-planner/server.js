const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 3;

let services = [
  {
    id: 1,
    name: 'Vivians Masquerade',
    price: '$300',
    location: 'NY',
    imgUrl:'https://images.crateandbarrel.com/is/image/Crate/PryceChampagneNiceBucketSHF17/?$web_product_hero$&170720153245&wid=625&hei=625',
    theme:'Champagne and Diamonds',
    description:'Sleek and modern with a hint of traditional'
  },
  {
    id: 2,
    name: 'Ambers Divine Touch',
    price: '$300',
    location: 'Utah',
    imgUrl:'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2016/05/26173753/41-colorful-garden.jpg',
    theme:'Oranges and sweet petunias',
    description:'Warm and festive for a time you will never forget'
  },
  {
    id: 3,
    name: 'Crystals',
    price: '$300',
    loation: 'California',
    imgUrl: 'https://www.traditionslighting.com/wp-content/uploads/2017/03/slide_376472_4431440_free.jpg',
    theme:'Blue Crystals and Diamonds',
    description:'Chic and woodsy event in the evening breeze'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Lambda School' && password === 'i<3Lambd4') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/services', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(services);
  }, 1000);
});

app.get('/api/services/:id', authenticator, (req, res) => {
  const service = service.find(f => f.id == req.params.id);

  if (service) {
    res.status(200).json(service);
  } else {
    res.status(404).send({ msg: 'Service not found' });
  }
});

app.post('/api/services', authenticator, (req, res) => {
  const service = { id: getNextId(), ...req.body };

  services = [...services, service];

  res.send(services);
});

app.put('/api/services/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const serviceIndex = services.findIndex(f => f.id == id);

  if (serviceIndex > -1) {
    const service = { ...services[serviceIndex], ...req.body };

    services = [
      ...services.slice(0, serviceIndex),
      service,
      ...services.slice(serviceIndex + 1)
    ];
    res.send(services);
  } else {
    res.status(404).send({ msg: 'Service not found' });
  }
});

app.delete('/api/services/:id', authenticator, (req, res) => {
  const { id } = req.params;

services = services.filter(f => f.id !== Number(id));

  res.send(services);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
