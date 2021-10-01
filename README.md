# React-Redux

A small application to practice using redux with react. Under normal circumstances, redux would be over kill for this application. Redux is normally used for larg applications.

### Quick Note about Imports and Webpack

1. Importing actions like so: "./actions" is the same as importing it like this: "./actions/index" if the file in any folder is specifically called index. When providing the name of a folder Webpack will look for a file called index and render it.

2. When importing from another file:
   - If the export is named you need to use the curly braces.
   - If the export is default you don't need the curly braces.

## Redux

### The connect funtion in react-redux

1. The connect function takes a few arguments.
2. The first argument it takes is the mapStateToProps function which is named by convention but you can call it anything you want like: mapMyState. When passing this function to the connect function, it will give you access to state. In the mapStateToProps function you must return an object with the state you want to use in your component. Connect will then merge the returned object into the wrapped component’s props.

   > Example: connect(mapStateToProps)(SongList)
   > See documentation for more details: https://react-redux.js.org/api/connect#connect-parameters

3. Connect receives a second argument which is where we pass in action creators in an object. In the example below selectSong is an action creator where we would import it at the top and pass it in to the connect function.
   > Example: connect(mapStateToProps, { selectSong: selectSong })(SongList)

The connect function looks at all the functions inside the object and wraps them up in another javascript function. Whenever we call the action function, connect will automatically call the dispatch function which will then update the state. So anytime you ever want to call an action creator from a component pass it into the connect function.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
