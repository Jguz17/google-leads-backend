# Google Leads backend

Google leads is a project that uses the Google Maps Places API. The backend is built using Node.js and Express.js, and jwt to handle user auth. 

This repo serves as a server, so you can host the project locally. 

You don't need this to use the frontend. The frontend is using a live version of this backend.

## Installation

After you have cloned this repo, in your cli navigate to the project folder and then to the config folder, like so: google-leads-backend/config. Then, change the mongoURI in the default.json file. You can get a new one by creating a new cluster in MongoDB.

Once you do all that, navigate to the root of the project folder and enter the following in your cli:

```bash
npm i && npm start
```

This will start up the server on your end. 

## Usage

I made the backend so it can support the frontend of the app by allowing a user to save their data of a place to their on account. 

You can check out the frontend repo here: https://github.com/Jguz17/google-leads-frontend

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
