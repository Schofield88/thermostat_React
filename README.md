# Makers Thermostat app in React

An exercise from the Makers course to write a one-page app, rewritten here in ES6 and using React.

## How to run

Clone the project using the green button in the repository; run:

``npm install``

then

``npm start``

This will open a browser window at ``http://localhost:3000``.

## Objective

During the course, this exercise was used to introduce single page apps in ES5, as well as serve as an introduction to JQuery and 3rd party APIs. Following graduation I ran the drill again, this time using React to render the front end.

## Functionality

The app does very little; you can increment and decrement the "temperature" of a dummy thermostat, use the reset button to set the temperature to 20 degrees, plus engage a "power saving mode" that limits the temperature to 25 degrees.

Further, the app makes use of the [OpenWeatherMap API](https://openweathermap.org) to display a local temperature and weather conditions, because all good thermostats should tell you what the weather's doing.
