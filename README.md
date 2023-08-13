# My React Portfolio

My portfolio built using React + Material-UI.

[**Check out the site**](https://michaelscottmcginn.com)

## Build With

* [Create-React-App](https://github.com/facebook/create-react-app) - Used to bootstrap the development
* [Material-UI](https://github.com/mui-org/material-ui) - Material Design components
* [React-Router](https://github.com/ReactTraining/react-router) - Routing of the app
* [Pace](https://github.com/HubSpot/pace) - Loading bar at the top
* [Emoji-Mart](https://github.com/missive/emoji-mart) - Picker for the emojis
* [React-Dropzone](https://github.com/react-dropzone/react-dropzone) - File drop component for uploads
* [Recharts](https://github.com/recharts/recharts) - Charting library I used for the statistics
* [Aos](https://github.com/michalsnik/aos) - Animations based on viewport
* [React-Cropper](https://github.com/roadmanfong/react-cropper) - Cropper for the image uploads
* [React-Stripe-js](https://github.com/stripe/react-stripe-js) - Stripes payment elements

## Things im currently working on

Adding more sections and cards.
Adding mongoDB connections to power persistant data store
Adding form processing for contacts and blog editing

## Contribute

Show your support by ⭐ the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/waptug/MyPortfolio/blob/master/LICENSE) file for details.

## Install this on your server

Create a folder on your web server to hold this.
Goto that folder
git clone this repo
sudo apt-get install npm
npm install
npm start
You will get a running server on port 3000

Build a production version to host on your server

npm run build

copy content of the build folder to your root web folder

or change package.json file to alter the root location.

Alter the "homepage" with the root location of your portfolio.

 "name": "react-saas-template",

  "version": "1.0.0",

  "private": true,

  "homepage": "/reactportfolio/MyPortfolio/build/",

  "description": "Template for building an SaaS/admin application using React + Material-UI",


You can use the vscode plugin sftp to speed up the deployment to your web server.

Here is the sample simple config you will need to setup in the .vscode folder in sftp.json file

This will connect the sftp plugin to your server so you can just upload the build folder each time you run npm run build 

to make your static site files that are optimized.

{

    "name": "reactportfolio",

    "host": "ftps10.us.cloudlogin.co",

    "protocol": "sftp",

    "port": 2222,

    "username": "`<username>`",

    "password": "`<password>`",

    "remotePath": "/home/www/michaelscottmcginn.com/reactportfolio/",

    "uploadOnSave": true,

    "useTempFile": false,

    "openSsh": false

}
