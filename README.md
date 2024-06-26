# Emply

### The internship application process is currently flawed for both students and employers

The current strategy for applying to internships involves applying to anything and everything and hoping that something sticks.  This results in employers receiving more applicants than they can ever possibly look through, most of whom probably didn't even read through the job requirements.  Consequently, many qualified candidates get lost in an endless sea of low-quality applications.

Emply revolutionizes the application process by restricting the number of applications an individual can submit within a given timeframe, such as five per week. This innovative approach compels applicants to carefully consider their choices, fostering a culture of selectivity and intentionality.  

![image](https://github.com/mips2/hackdavis2024/assets/92408910/20d20e6c-676d-42cf-a579-9c45e2f258fa)

**Developed at HackDavis 2024 in 24 hours**

## Backend:

### App.js:

`App.js` is responsible for managing the states for the job listings. The state is initialized as an empty array and filled out and updated when the data is fetched from the server. Data is fetched from the backend by using the `fetchData()` function, which makes a GET request to the server using axious to get the job data. `App.js` also ensures user login handling, which takes a username and password as arguments. If the username and password match an existing user in the database, the user gets sent to the home page. It updates the localStorage to reflect that the user is logged in, stores the username, and whether the user is a company or not. `App.js` is also responsible for the routing: It defines a Routes element that lists all the possible routes and the components that should be rendered for each path. For example:
The root path `("/")` renders the Home component, passing the jobs data as a prop. Other paths render their respective components like Applications, Profile, Logout, Register, Application, ProfileUpdate, and Applypage. Each route is associated with a specific component that handles the user interface and functionality for that part of the application. This modular approach helps manage the application efficiently and makes it easier to maintain and update.

### App.css/ App.test.js:

`App.css/ App.test.js` are not used since `App.js` doesn't need to be styled. `App.test.js` is kept in case a test needs to be added in the future.

## Frontend:

### Header:

`header.js/.css` is the header structure that is applied to other files like `profile.js` and `applications.js`

### Login:

`login.js/.css` is the page that the user starts on, and once logged in, it gets routed to the main page. If the user has never made an account, they must register on the register page. 

### Register:

`register.js/.css` is a simple registration page that saves the user's information, such as email, username, password, name, phone number, etc. This information is saved in the user's profile.

### Home:

`Home.js/.css` is the main page that the user gets redirected to once they successfully log in. It serves as the main user interface for displaying job listings on a website. This component integrates several functionalities, including a search bar that allows users to filter jobs based on keywords and location and a series of buttons for additional filtering options like job type and job category. Each job is presented using the JobCard component, which displays details such as the company logo, job title, and location and includes a "Quick Apply" button for easy application. Additionally, the component contains logic to redirect users who are not logged in to the login page, ensuring that only authenticated users can access the job listings.

### Profile:

`profile.js/.css, ProfileComponent.js, ProfileUpdate.js/.css` gets the user's information from the backend and displays the user's information, which can be edited in real-time. 

### Logout:

`logout.js` resets the user's logged-in status when clicked and routes the user to the log-in page.

### My Applications:

`applications.js/.css` lists all the applications the user completed and took from the server. Applications are sent to this page once completed.

### Application

`application.js/.css` is the page that the user gets routed to when they click apply on a company's post. This page will save your information to the server once completed.
