# FrontEnd-Homework

Project boilerplate was created using create-react-app and typeScript

## Project Details

As a user of Flowpage, I want to be able to view a list of trending Flowpages on a discover page. The discover page should have the following functionality:

- Displays a list of Flowpages that can be filtered based on the selected category. View [flow.page/discover](flow.page/discover) for inspiration.
    
    Note: this page does not need to be as robust as the current discover page. It can display only the user's name and profile picture.
- Displays a single Flowpage when it is clicked. This should at least display the user's selected theme (such as their background color), their profile links, their profile picture and their bio. View [https://www.flow.page/andrew](https://www.flow.page/andrew) for inspiration.

## Objective / Techincal Requirements

- Fetch the discover page data from [https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json](https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json) to display a list of all Flowpages.

    Note: This endpoint also contains all the data needed to display an individual Flowpage.
- add the ability to filter flowpages based on the category
- Allow the user to view an individual Flowpage
- UI/UX is up to the developers discretion
- Use any MIT licensed frameworks
- Use TypeScript
- **Bonus**: For users who have opted to share their Flowpage, a share button should appear that 
allows users to copy a link to their Flowpage.
## Misc

To get a better sense of this assignment you are encouraged to visit [https://flow.page](https://flow.page) to create your own page!

# Documentation guide

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
