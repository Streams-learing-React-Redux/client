#### This Readme file is to takenotes of what I learned while building this project

Project: Building a Video Streaming app with authentication
Parts of the projects: React app, API server, RTMP server

---

## App Challanges:

### 1. Good navigation around all pages in app

- react router

** Dependencies of react-router family **:

1. react-router: is the core library of everything inside of react-router general project.
2. react-router-dom: browser specific. for handling navigation on dom-based app
3. react-router-native: Navigation for react-native app (mobile apps)
4. react-router-redux: bindings between Redux and React Router. a library similler to react-redux library

What Link does?
by clicking on `link` -> react-router prevents the browser from navigating to new page to refetch ne html file -> the URL still changes, here the 'History' updates, takes and sends the aurl to the BrowserRouter -> BrowserRouter communicates the url to routes components ->routes components rerenders to show new set of components

Different types of Routers:

1. BrowserRouter: with this react-router looks for the top level domain (TLD, .com , .net etc) and everything aafter that.

2. HashRouter: automaticly adds "#" into url and reflects the current path after the #. it is set up so server does not takes a look after #. # part is only for clients. it is good for deploying app in github pages

3. MemoryRouter: not to track navigation

### 2. User authentication

- Google Oauth 2

* authenticate with outside service provider
* user authorize this app to access their information
* outsider provider identifies the user
* it can be used for -> user identification and any kind of action made by the app on behalf of the user

steps for steup OAuth:

1. create new project at console.developers.google.com/
2. set up an OAuth confirmation screen
3. Generate OAuth client id
4. install Google's API library, initialize it with the OAuth client ID
5. make sure the lib gets called everytime the user clicks on "login with google " button

### 3. Handle forms in Redux

### 4. CRUD in React/Redux

### 5. Good error handling system in Redux side


# RTMP server:

