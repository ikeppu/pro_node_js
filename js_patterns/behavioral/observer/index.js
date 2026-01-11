const Phone = require("./phone");
const Web = require("./web");

class WeatherStation {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  setTemperature(temperature) {
    this.observers.forEach((observer) => observer.update(temperature));
  }
}

// Create a weather station (the subject)
const weatherStation = new WeatherStation();

// Create some observers (phone and dashboard)
const phoneDisplay = new Phone();
const webDashboard = new Web();
const testWebDashboard = new Web();

// Subscribe the observers to the weather station
weatherStation.addObserver(phoneDisplay);
weatherStation.addObserver(webDashboard);
weatherStation.addObserver(testWebDashboard);

// Change the temperature (this will notify all observers)
weatherStation.setTemperature(25); // Both observers will get notified
weatherStation.setTemperature(30); // Both observers will get notified again

weatherStation.removeObserver(testWebDashboard);

weatherStation.setTemperature(50); // Both observers will get notified again
