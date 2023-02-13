const { faker } = require('@faker-js/faker')

module.exports = () => {
  const data = {
    "history" : [{
      "url": faker.internet.domainName()
    },{
      "url": faker.internet.domainName()
    },{
      "url": faker.internet.domainName()
    },{
      "url": faker.internet.domainName()
    },],
    "instances": [
      {
        "status": 0, //Idle, Building
        "type": 0, // Physical, Visual
        "icon": './img/windows.png',
        "host": faker.internet.domainName(),
        "ip": faker.internet.ip(),
        "path": faker.system.directoryPath(),
        "tags": ['Firebox', 'Safari']
      },
      {
        "status": 1, //Idle, Building
        "type": 0, //Physical, Visual
        "icon": './img/ubuntu.png',
        "host": faker.internet.domainName(),
        "ip": faker.internet.ip(),
        "path": faker.system.directoryPath(),
        "tags": ['Firebox']
      },
      {
        "status": 1, //Idle, Building
        "type": 0, //Physical, Visual
        "icon": './img/debin.png',
        "host": faker.internet.domainName(),
        "ip": faker.internet.ip(),
        "path": faker.system.directoryPath(),
        "tags": ['Safari']
      },
      {
        "status": 0, //Idle, Building
        "type": 1, //Physical, Visual
        "icon": './img/suse.png',
        "host": faker.internet.domainName(),
        "ip": faker.internet.ip(),
        "path": faker.system.directoryPath(),
        "tags": ['Firebox', 'Safari']
      },
      {
        "status": 1, //Idle, Building
        "type": 1, //Physical, Visual
        "icon": './img/cent_os.png',
        "host": faker.internet.domainName(),
        "ip": faker.internet.ip(),
        "path": faker.system.directoryPath(),
        "tags": ['Firebox', 'Safari']
      },
    ],
    "employees": [
      {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@abc.com",
        "gender": "Male",
        "status": "Terminated"
      },
      {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "janedoe@abc.com",
        "gender": "Female",
        "status": "New"
      },
      {
        "id": 3,
        "first_name": "Alice",
        "last_name": "Doe",
        "email": "alicedoe@abc.com",
        "gender": "Female",
        "status": "Leaving"
      },
      {
        "id": 4,
        "first_name": "Bob",
        "last_name": "Doe",
        "email": "bobdoe@abc.com",
        "gender": "Male",
        "status": "Active"
      }
    ]
  }
  return data
}

