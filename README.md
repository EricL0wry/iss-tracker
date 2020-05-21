# International Space Station Tracker

The International Space Station Tracker is a full-stack mobile responsive JavaScript application for users who want to view the current position on the ISS on a map along with the latitude, longitude, and a photo (if available).

This application combines three Google APIs ([Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial), [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start), and [Places Library API](https://developers.google.com/maps/documentation/javascript/places)), along with the [Open Notify ISS Locator API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) to display map, coordinate, description, and photo information.

## Live Demo

Try the application live at [https://iss-tracker.ericmichaellowry.com](https://iss-tracker.ericmichaellowry.com)

## Technologies Used

- JavaScript
- jQuery AJAX
- Bootstrap 4
- Node.js
- Express
- Node Fetch
- dotenv
- NPM
- Object Oriented Programming (OOP)
- Google Maps JavaScript API
- Google Geocoding API
- Google Maps Places API
- Open Notify ISS Location Now API
- HTML 5
- CSS3
- AWS EC2

## Features

- Users can view the current ISS location on a dynamic map.
- Users can view the current ISS latitude and longitude location.
- Users can view a location description and location photo if available.

## Preview

![ISS Tracker](server/public/assets/iss-tracker-demo.gif)

## Development

### System Requirements

- NPM 6 or higher
- Node.js 10 or higher

### API Requirements

To run this app locally, you will need a Google Maps billing account and API key. Free trials are available and more informatioon can be found at [https://developers.google.com/maps/gmp-get-started](https://developers.google.com/maps/gmp-get-started).

### Getting Started

If you would like to use this application locally, please follow the steps below:

1. Clone the repository and navigate to the new local directory.

```shell
git clone https://github.com/EricL0wry/iss-tracker
cd iss-tracker
```

2. Install all dependencies with **NPM**.

```shell
npm install
```

3. Create a new **.env** file in the root directory of the project that will house your server port and **Google API key**.

```shell
touch .env
```

4. In your new file, add the information below, replacing the value of ```GOOGLE_API``` with your personal api key. Save the changes to your **.env** file.

```
PORT=3000
GOOGLE_API=(your api key here)
```

5. On **line 46** of the [server/public/index.html](server/public/index.html) file, use the example below to replace the script tag with a new tag containing your **Google API key**.

```html
  <script src="https://maps.googleapis.com/maps/api/js?key=(your api key here)&libraries=places"></script>
```

6. Start your **Node** server.

```shell
npm run start
```

7. In your browser, navigate to [http://localhost:3000/index.html](http://localhost:3000/index.html).
