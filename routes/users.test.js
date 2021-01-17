// import pour les tests
var app = require("../app")
var request = require("supertest")

// je test avec un nouveau utilisateur sur condition email, et si le password n'est pas rempli
test("name", async (done) => {
  await request(app).post("/users/sign-up")
    .send({ "email": "va@a" , "password":"" })
    .expect(200)
    .expect({ result: false, saveUser: null, error: [ 'champs vides' ] })
  
  done()
  })

// je test si l'utilisateur est deja dans bdd
test("name", async (done) => {
  await request(app).post("/users/sign-up")
    .send({ "email": "va@" })
    .expect(200)
    .expect({"result":false,"saveUser":null,"error":["utilisateur déjà présent"]})
  
  done()
  })
  
