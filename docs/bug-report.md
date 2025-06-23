## Bug Title
Incorrect error message on invalid login

## Description
When attempting to login with invalid credentials, the error message does not match the expected format.

## Steps to Reproduce
1. Go to https://www.saucedemo.com/
2. Enter username: `invalid_user`
3. Enter password: `invalid_pass`
4. Click the "Login" button

## Observed Result
Error message: "Epic sadface: Username and password do not match any user in this service"

## Expected Result
Error message should be: "Username and password do not match"

## Environment
Browser: Chrome 125  
OS: Windows 10  
