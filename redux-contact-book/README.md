#steps
npx create-react-app redux-contact-book
npm i redux react-redux redux-devtools-extension
npm i bootstrap
npm i node-sass -D


#folllow these steps to override variables of bootstrap

$primary: green;
$danger: #ff4136;

$theme-colors: (
  "primary": $primary,
  "danger": $danger
);

@import "~bootstrap/scss/bootstrap";