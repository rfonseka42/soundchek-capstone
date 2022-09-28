SoundChek

SoundChek is a website to help bands and other musicians book rehearsal spaces more effectively. Users can log in to the website, book and pre-pay for rooms quickly. This eliminates the need to call or email rehearsal spaces as the current common practice for booking a rehearsal space.

## Tech Stack

**Client:**
React.js
Sass
V4 UUId

**Server:**
Firebase Database
Firebase Storage
Firebase Authentication

## Features

- Sign Up and Login to view rehearsal rooms around the city available for rent
- Click to view more details of a room
- Select a date and time
- Pre-pay for your room and view reservation
- Delete your reservation
- Users who want to offer their location for rent can also add a space to the homepage

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.
You must create an account in Firebase to get the values for these keys, as well as create your own database with collections and documents to run the project.

REACT_APP_FIREBASE_API_KEY

REACT_APP_FIREBASE_AUTH_DOMAIN

REACT_APP_FIREBASE_PROJECT_ID

REACT_APP_FIREBASE_STORAGE_BUCKET

REACT_APP_FIREBASE_MESSAGING_SENDER_ID

REACT_APP_FIREBASE_APP_ID

## Run Locally

Clone the repository

```bash
 git clone git@github.com:rfonseka42/soundchek-capstone.git
```

Go to the project directory and run npm install

```bash
  cd soundchek-capstone
  npm install
```

Install dependencies

```bash
  npm install sass react-router-dom uuidv4
```

Start the server

```bash
  npm run start
```

## Acknowledgements

Thank you so much to the amazing Teaching Assistants and Educators at BrainStation, Toronto for your support!
