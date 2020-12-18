const dbConfig = require('./config/db.config')


const db = require("./models");
//const Flight = require('./models/flight.model');
const Flight = db.flight
//const Terminal = require('./models/terminal.model');
const Terminal = db.terminal
const Airport = db.airport;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

//Create flights
//Create flight1
const flight1 = new Flight({
  name: "flight1",
  from: "CDG",
  to: "JFK",
  airline: "American Airlines"
})

flight1.save()
console.log("Flight saved", flight1)

//Create flight2
const flight2 = new Flight({
  name: "flight2",
  from: "Heathrow",
  to: "JFK",
  airline: "British"
})

flight2.save()
console.log("Flight saved", flight2)  

//Create terminal
const terminal1 = new Terminal({
  name: "Terminal 1",
  flights: [flight1, flight2],
  capacity: 234324
})

terminal1.save()
console.log("Terminal saved", terminal1)

//create airports
const airport = new Airport({
	name: "Airport 1",
  country: "US",
  terminals: [terminal1],
	opened: "2020-12-15"
})

airport.save()
console.log("Airport saved", airport)

//Create CDG
const cdg = new Airport({
  name: "CDG",
  country: "France",
  terminals: [],
  opened: "1974-03-08"
})

cdg.save()
console.log("Airport saved", cdg)

//Create JFK
const jfk = new Airport({
  name: "JFK",
  country: "USA",
  terminals: [],
  opened: "1990-01-01"
})

jfk.save()
console.log("Airport saved", cdg)

//Create Heathrow
const heathrow = new Airport({
  name: "Heathrow",
  country: "UK",
  terminals: [],
  opened: "1946-05-31"
})

heathrow.save()
console.log("Airport saved", heathrow)



