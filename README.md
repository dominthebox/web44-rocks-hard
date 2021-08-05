# This is the Web 44 Rocks Project

This is a great reference project for how to properly create a new Node project.

Terminal command installs for creating a node project:
(at least the order in which we did it today to create this one)

Configuration stuff:

npm init -y
npx gitignore node (hit Y for yes after it asks the question to proceed)
git init (creates an empty repository)
((git status) to make sure the repo exists)
ls -lah (to see the list of files, including the newly created git repo)
npx eslint --init
(To check syntax and find problems)
(CommonJS)
(Which Framework? None)
(TypeScript? No)
(node)
(JSON)
(Yes)

*** Create the index.js file in the main directory ***
console.log("something to test that things are connected and working")
run in the Terminal: node index.js

*** Install Dependencies ***
npm i -D nodemon

In the package.json file:

Create the server script 
"server": "nodemon index.js"

Create the start script
"start": "node index.js"

*** Create the README.md file ***
Type something in there (here...hehehehe)

*** Make your first commit ***
Then head to GitHub and create a new Repository 
Then copy the git remote add origin command, or just follow the instructions on GitHub
Enter it into the terminal
Then create the main branch 
Then do a git push origin main
Check GitHub to make sure everything connected correctly and you have one default branch of main

*** Install More Dependencies ***

npi express cors helmet dotenv


Now set up the index.js file properly ( keep in mind to separate things up like in a server.js file for REAl applications, not how we did here for a practice project create)

