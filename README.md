# `react-router/Link` within `material-ui/MenuItem`
Example for how to use `react-router/Link` within `material-ui/MenuItem`

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## [Live Demo](https://daxchen.github.io/material-ui-Link-within-MenuItem)

## What is this?
This is an example app for [this
issue](https://github.com/callemall/material-ui/issues/204#issuecomment-269130245), which demonstrates using
react-router's `Link` within material-ui's `MenuItem` with the `containerElement` prop.

```jsx
import { Link } from 'react-router'
import MenuItem from 'material-ui/MenuItem'

<MenuItem
  containerElement={<Link to="/about" />}
  primaryText="About Page"
/>
```

For more information, see [the above issue](https://github.com/callemall/material-ui/issues/204), or [this
StackOverflow](http://stackoverflow.com/questions/32106513/material-ui-menu-using-routes).

## FAQ

<details>
  <summary>Why not `href`?</summary>

Using `href` instead of react-router's `Link` component will cause the page to reload
</details>

<details>
  <summary>Why not `onTouchTap` and programmically change route?</summary>

Using `onTouchTap/onClick` to trigger page change instead of `<a>/<Link />` will lose some native features such as
the link previewing in browser status bar, and the ability for users to open link in a new tab (`mousewheel-click`, `cmd + click` on macOS, `ctrl + click` on windows, `click and hold` on mobile devices, etc.).
</details>

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

