#### steps
npx create-react-app redux-contact-book
npm i redux react-redux redux-devtools-extension
npm i bootstrap
npm i node-sass -D


#### folllow these steps to override variables of bootstrap

$primary: green;
$danger: #ff4136;

$theme-colors: (
  "primary": $primary,
  "danger": $danger
);

@import "~bootstrap/scss/bootstrap";

#### Redux steps

## step 1

1. sabse pahle store bana lo.
2. create state and action and switch cases

## step 2

1. Add provider and store in app js
2. Wrap provider store 

## step 3

1. Add useSelector to get contacts from store.

## step 4

1. Add react Avatar for acrro name
npm i react-avatar
2. Add google icons
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
