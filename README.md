<p align="center">
  <img src="./public/linkr-logo-icons-favicon/android-icon-144x144.png" width="100" alt="Linkr" />
</p>

# Linkr

## About
<p>
  Linkr is a social network for sharing useful links, developed for sharing knowledge in several areas.
</p>

<p align="center">
    <a style='color:inherit' href="#features">Features</a> •
    <a style='color:inherit' href="#pré-requisites">Pre-requisites</a> •
    <a style='color:inherit' href="#running-the-web-applications">Running the web application</a> •
    <a style='color:inherit' href="#tech">Tech Stack</a> •
    <a style='color:inherit' href="#deploy">Deploy</a> •
    <a style='color:inherit' href="#contributors">Contributors</a> •
    <a style='color:inherit' href="#author">Author</a>
</p>

### Features
- [x] Login screen with authentication system that keeps the user connected even when closing the browser and reopening<br>
- [x] Timeline with all posts made<br>
- [x] Screen with posts and likes made by the user<br>
- [x] Responsive layout<br>
- [x] Timeline with post filtered by hashtag<br>
- [x] Clicking on the shared link snippet opens in a new tab<br>
- [x] Like functionality in a post<br>
- [x] Menu with the most posted hastags (trending)<br>
- [x] Field to search for a hashtag<br>
- [x] Viewing posts made by a user when clicking on your photo in a post<br>
- [x] Dynamic page loading with infinite scroll functionality<br>
- [x] Animations between the exchange of routes of the react-router-dom<br>
- [x] Buttons with functionality to delete or edit user's post<br>
- [x] Functionality to follow and unfollow a user<br>
- [x] Profile search box with debounce in the input<br>
- [x] Fron-end treatment of profile search results to sort the profiles followed as first results<br>
- [x] Addition of the youtube player in the posts with links to videos posted on youtube<br>
- [x] Adding functionality for adding user location to published posts<br>
- [x] Addition of a modal to display the user's location through the Google Maps API

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/). In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

### Running the web application
```bash
# Clone this repository
$ git clone <https://github.com/thaliadettenborn/Linkr.git>

# Access the project folder cmd/terminal
$ cd Linkr

# Install the dependencies
$ yarn install or $ npm install

# Run the application in development mode
$ yarn start or $ npm run dev:server

# The server will start at port: 3000 - go to http://localhost:3000
```



### 	&#128736; Tech Stack
Languages:<br>
<p align="center">
    <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
    <img scr='https://img.shields.io/badge/jsx%20-%2320232a.svg?&style=for-the-badge&logo=jsx&logoColor=%2361DAFB'>
    <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
</p>
<br>

The following tools and frameworks were used in the construction of the project:<br>
<p align="center" style='display: flex; justify-content: center; flex-wrap:wrap; align-items: center; margin: 0 50px;'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/prop_types%20-%2320232a.svg?&style=for-the-badge&color=blueviolet'/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black" />
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/babel%20-%2320232a.svg?&style=for-the-badge&color=323230&logo=babel&logoColor=%f4dc4e'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/yarn%20-%2320232a.svg?&style=for-the-badge&logo=yarn&color=318fb7&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_infinite_scroller%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_hashtag%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_tooltip%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_transition_group%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/google_maps_react%20-%2320232a.svg?&style=for-the-badge&logo=google-maps&logoColor=%4689f' />
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_debounce_input%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB' />
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_modal%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB' />
  <img style='margin: 5px;' src='https://img.shields.io/badge/react-icon%20-%2320232a.svg?&style=for-the-badge&color=f28dc7&logo=react-icon&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react_youtube%20-%2320232a.svg?&style=for-the-badge&color=CC0000&logo=react&logoColor=white' />
  <img style='margin: 5px;' src='https://img.shields.io/badge/get_youtube_id%20-%2320232a.svg?&style=for-the-badge&color=CC0000&logo=youtube&logoColor=white' />
</p>

<br><br>
Version Control:<br>
<p align="center">
    <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
    <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
</p>

# Deploy

The application layout is available on Vercel:
<a style='margin-left: 10px;' href='https://linkr-dun.vercel.app/'><img src='https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white'></a>


### Contributors
<table>
  <tr>
    <td align="center"><a href="https://github.com/responde-ai"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/40724166?s=200&v=4" width="100px;" alt=""/><br /><sub><b>Responde Aí</b></sub></a><br /><a href="https://github.com/responde-ai>👨‍🚀</a></td>
  </tr>
</table>

### Authors
---
<p align='center'>
  Made by Thalia Dettenborn and Thiago Ribeiro 👋🏽 Get in Touch! <br><br>
  <div align='center' width='250px'>
	  <img src="https://avatars0.githubusercontent.com/u/70967247?s=460&u=0684339f0717ae41ce18689351f0215fdf270590&v=4" width="100px;"/>
	 <div>
 <a href="https://www.linkedin.com/in/thaliarobertadettenborn/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a>
	  <a href="mailto:thalia.born@gmail.com"><img src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white"/></a>
	  <a href="https://github.com/thaliadettenborn"><img src="https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white" /></a>
	</div>
  </div>
</p>

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTk0NzA0NTI3LDg0NTIwNzM3OCwtMTkzOT
k2ODE0Niw3Njc2MjAwMzMsNzY3NjIwMDMzXX0=
-->