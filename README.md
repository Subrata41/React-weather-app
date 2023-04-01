Weather App
This is a weather application that allows users to check the current weather conditions and forecast for a specific location. Users can enter their location or choose a state to get the latest weather information.

Features
Search for weather information by location or state
View the current weather conditions and forecast for the next 7 days
Check the humidity levels for the selected location
Technologies
This application was built using the following technologies:

React
Axios
OpenWeather API
Context API
useReducer
useState
useContext
CSS
Installation
To run the application locally, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies by running npm install.
Start the development server by running npm start.
Open your web browser and go to http://localhost:3000/ to view the application.
Usage
Enter a location in the search bar or choose a state from the dropdown menu.
Click on the search button or press Enter to get weather information.
View the current weather conditions and forecast for the next 7 days.
Check the humidity levels for the selected location.
How It Works
The application uses Axios to make API requests to the OpenWeather API. The weather data is then stored in the application state using Context API, useReducer, useState, and useContext.

When the user enters a location or selects a state, the application dispatches an action to update the state with the new weather data. The state is then used to render the weather information on the screen.

Credits
This application was created by Team Phi. The weather information is provided by OpenWeather API