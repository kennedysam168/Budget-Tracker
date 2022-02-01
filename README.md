# Budget-Tracker

## Description
This project is a budget tracking application that allows you to add and subtract to your balance to keep track of what you spend. This application uses service-workers, a database, and webpack-config to allow you to use it while offline and still have the changes change and persist when you go back online.

## installation
To install the necessary dependencies needed to run this application you need to run 'npm i' in the command line of your terminal. Once it has finished installing the dependencies you can start the application by running 'npm start'

## usage
To use this application you first enter in the name of the transaction, like "groceries". You then enter in the amount, and finally choose if you are adding or subtracting that amount to your total. Once you have enter 2+ transactions the graph will give you a visual representation of your spending.

## acceptence criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.