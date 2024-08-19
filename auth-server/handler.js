"use strict";

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events.public.readonly",
];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = ["https://soyakiss.github.io/meet_app/"];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    response_type: "code",
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ error: error.message }),
      };
    });
};

module.exports.getCalendarEvents = async (event) => {
  const access_token = decodeURIComponent(
    `${event.pathParameters.access_token}`
  );

  // Set the access token as credentials for the OAuth2 client
  oAuth2Client.setCredentials({ access_token });

  // Return a promise that handles the calendar API request
  return new Promise((resolve, reject) => {
    // Use the calendar API to list events
    calendar.events.list(
      {
        calendarId: CALENDAR_ID, // The calendar ID to fetch events from
        auth: oAuth2Client, // The authenticated OAuth2 client
        timeMin: new Date().toISOString(), // Fetch events starting from now
        singleEvents: true, // Ensure recurring events are split into instances
        orderBy: "startTime", // Order events by start time
      },
      (error, response) => {
        if (error) {
          reject(error); // Reject the promise if there is an error
        } else {
          resolve(response.data.items); // Resolve with the list of events
        }
      }
    );
  })
    .then((events) => {
      // Return the events formatted for the Meet app
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Handle CORS
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ events: events }), // Format events as JSON
      };
    })
    .catch((error) => {
      // Return a 500 error response if the promise is rejected
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*", // Handle CORS
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ error: error.message }), // Format error message as JSON
      };
    });
};
