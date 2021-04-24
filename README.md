# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dot Env File for server

In the root directory create .env file and 

add data ` NODE_ENV = development`
         `MONGO_URI = mongodb://localhost:27017/shopbridge `


## Dot Env File for client
you have to create .env file in client folder
you have to add as `REACT_APP_SERVER = http://localhost:5000`


## Available Scripts

In the project directory, you can run:

### `Install Dependencies`

## `server dependencies`

`npm install` in root directory

## `client dependencies`

you have to go to the client directory

`npm install` in the client directory.

## `You can install both server and client in root directory as follows.

in root directory first run the command `npm install` after completion you can run
`npm run client-install` it will install the client dependencies.

### `npm run dev`

This command will run both the front-end and back-end simultaneously 

and you can start server and client manually with the command as below
in root directory you have to type this command to start server, server will run at port 5000

### `Run server and client in seperate Terminal`

## `npm run server` 
In the root directory open the terminal and run the above command.

## `npm start`
To start client you have to go to the client directory as `cd client` 
and you have to run the above command in new Terminal.


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

when application start at localhost:3000 you can see the dashboard 
when there is no product you will see the messag like you dont have any data


### App description
I have written my own backend for this application.
I have written this application using Node.js, Express.js, MongoDB and React.js .
I used Redux for the state management and as well as I used both the class components and React Hooks as well.
I used the Snackbar component from Material UI for Notification both success and error handling.
I used Material UI for creating the template for the application. complete desing is in Material UI.



### Add Product

To add the product click on add product button on home route 
it will route to the `/addproduct` where you will see a form to add the product.

I have written the validation for the form field if there is some empy field.

After filling the form when you click on the submit button you will see the Success Notification
and you will redirect to the home route.

In Home route you will see the table with data like Product Name, Company Name, Description, price and Quantity
and edit and delete as well

## Edit product

when you click on edit button it will move to the same route as `/addproduct` where you will see a form with 
the data autopopulated using the product id. after submit you will redirect to home and you can see the updated data.

# server.js file in the root directory which is the main file which is running the server.

# In the root directory Model folder contains the Mongoose shema 

# In the root directory routes folder contains the all the routes for the application.

# In the client folder `actions` folder is for redux actions for calling APIS

# `reducer` folder is for the reducers 

# `store.js` file is for creating the redux store.

# `components` folder contains all the components.
