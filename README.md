# Scoreboard Web App

This is a simple **Scoreboard** web application built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to keep track of scores for **two teams**, add points **(+1, +2, +3)** and **reset** the scores individually or completely.

# Project Structure
###  index.html ---->  Main webpage
###  index.css  ---->  Stylesheet for layout and buttons
###  index.js   ---->  JavaScript logic for updating scores

# How to Run the Project

### 1. Environment Setup
 A code editor like VS Code
 A modern browser like Chrome or Firefox
### 2. Steps to Run
 Save the three files:
 index.html
 index.css
 index.js
 Make sure all three are in the same folder.
 Open the file index.html and run the VS code
### Your scoreboard app will be live.

# How It Works
### HTML (index.html)
### The structure of the app:
+  Two team sections: one for each team
+  Each team has:
+  score display ```<div id="homeScore">``` and ```<div id="guestScore">```
+  Buttons to add **+1, +2, +3** points
+  A individual reset buttons **(reset1() or reset2())**
+  A final reset button to reset both teams scores

# CSS (index.css)
### The design and styling:
+ **body**: background color, centered content.
+ **.score-box**:square showing the score.
+ **button**: colored, styled, and sized with different styles.
+ **.G-button**: reset buttons color.
+ **.btn-color**: reset-all button color.

# JavaScript (index.js)
### The logic to update scores:
+ **let home = 0; let guest = 0;**: score variables
+ **add(team, points):** adds points to the correct team
+ **reset1():** resets only Team 1 (home)
+ **reset2():**  resets only Team 2 (guest)
+ **resetfull():** resets both scores to 0
