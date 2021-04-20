# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Link
The website was deployed with [Heroku](heroku.com) and can be found [here](https://uf-pre-dental-society.herokuapp.com/)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the mocha testing.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Managing and Maintaing the Application

Guidelines and tips for how to make sure the application functions properly and can be maintained with time between different eboards.

### Creating New Admin Accounts

To register a new admin log in on the website, a username/password combination must be encyrpted and sent to the working database.\
The easiest way to do this is by going into the file 'client\src\components\Navbar.js' to enable the register branch in a local development copy.\
<b>DO NOT DO THIS TO A DEPLOYED SET OF CODE.</b>
On line 48, change the boolean 'false' into a 'true' and it will enable a registration tab to make a request through the UI./
Be sure to undo this change after registering a new admin./
New admins can also be created with direct requests to the database.

### Adding Events/Officers via Pop-Up Modals

When creating a new event or officer, it is important that all fields are filled or the item will not be saved and published.

Specifically for officers, you need five fields: Name, Position, Bio, Rank, and Image.\
The Name, Position, and Bio will be displayed on hover as typed.\
The Rank is a hidden attribute that determines the order on page starting in the top left and is show when logged in as an Admin.\
The Image field must contain an IMAGE URL. This can be created by uploading the image to any website, such as imgur.com, right clicking, and selecting "Copy image address".\
This URL will end in an extention such as '.png', '.jpeg', etc. Images will also be squished/stretched into a square.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)