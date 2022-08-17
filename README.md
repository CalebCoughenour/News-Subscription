<div style="text-align: center">
<h1>Subscription Site Template</h1>
</div>

<div style="text-align: center">
<br><img src="https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/bootstrap.svg" width="60" height="60"/> 
<img src="https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/react.svg" width="60" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="60" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="60" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="60" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" width="60" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" width="60" height="60"/><br>
</div>

## Description

This is a easy to switch out template with three price cards, two information sections, and a Footer. There is also plenty of room for expansion and customization.

## Setup/Installation

* Copy the git repository url from the "code" drop down on this github page
* Open a shell program & navigate to your desktop
* Clone the repository using the copied URL and the "git clone" command
* In the shell program, navigate to the root directory of the newly created file called "News-Subscription"
* Next, run the command "npm start" to start the program on your local machine
* Open a web browser and plug "http://localhost:3000/" into the URL bar if one does not automatically open

## Customization

The webpage was created with customization in mind and is fairly easy to set-up. Here is a list of different customization options:

* Pages - There is a [pages](src/pages) directory with a [HomePage](src/pages/HomePage/) directory. You can add more pages by:
```
1. Create a directory for your new page
2. Create a file for your page within the new directory
3. Route to the new page by importing your page and adding a new    route path within [App.js](src/App.js) below the existing Home route path such as:
<Route path='/sign-up' element={<SignUp />} />

* Navbar - The [Navbar](src/components/Navbar/Navbar.js) is already in place, you will just need to add your custom links and some handle click functions as well as mobile styling.
```
* Info Section - Within the [HomePage](src/pages/HomePage/) directory, there is a [Data.js](src/pages/HomePage/Data.js) file. This file holds a info section object with different values that can be changed to customize how the section is displayed. This can be duplicated and alternated on the page to create different sections on a web page:
```
export const homeObjOne = {
  lightBg: false,
  primary: true,
  imgStart: '',
  lightTopLine: true,
  lightTextDesc: true,
  description: 'example description',
  headline: 'example headline',
  lightText: true,
  img: 'example.jpg',
  alt: 'Example text',
  start: ''
};
``` 
* CSS - The styling is set up in a way that keeps customization as in mind. Colors schemes can be switched on buttons, backgrounds, text and more

## Known Bugs

* No known bugs

8/17/22 - Caleb Coughenour