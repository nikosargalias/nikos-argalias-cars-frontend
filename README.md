## Launch the project

In order to launch the project, please run:

-   npm install
-   npm start
-   -   npm install installs all dependancies and npm start runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In order to run the test suite please run:

-   npm test
-   -   This launches the test runner in the interactive watch mode.\

## IMPORTANT Details about the project and decisions I made

For this project I decided to search for (and utilise) a (car data fetching API)[https://www.back4app.com/database/back4app/car-make-model-dataset/get-started/javascript/rest-api/fetch]. The reason for this is that I thought it would be better, faster, and more realistic compared to a read application to fetch car data from an API rather than write my own array of car objects. As a result, due to the key/value pairs of each car object returned by the API, you will notice that there is no 'colour' property as the API doesn't return one, and I didn't want to add a fake colour property to each car. Nevertheless, I ensured that all of the following features were implemented:

-   Fetching cars from a database and rendering them in a table.
-   Storing fetched cars in localStorage so fetching them again isn't required, making load times much quicker for returning users.
-   Ability to add cars to the list via a form
-   Ability to remove cars
-   Ability to sort cars in alphabetical order by 'Make'
-   Ability to sort cars in by Year created
-   Ability to fetch a new list of cars of a specific Make via a dropdown button.
-   Fetching of words which sound phonetically similar to each car model and rendering them in an additioinal column - this is using the datamuse API listed in the test description.

## Project architecture

The project architecture is fairly straight forward for a small React project. For a large scalable solution I would certainly spend more time analysing its requirements and writing up a complete guide of the technologies chosen and architectural decisions made. For example, (here is a guide I wrote for a software solution I recently architected for an employer)[https://docs.google.com/document/d/1wTBlcHR6yOLbWS1cCtOqsHyvwrW7nEJySuNNtR9038Y/edit?usp=sharing]

## Testing

As you can see, there are a few test files across the application, however, due to the limited time I had to build this project, I decided not to add a test for every single function / component. I do hope however that the tests I did add showcase my testing ability. Specifically, I made sure to add tests for the CarContext, and ensure that dispatching all the actions does update the state correctly. I also added tests to ensure the CarTable is rendered correctly, and that pushing the Remove button indeed does remove a car. I also added other functional tests across some other components. Finally, I added a mock for the fetch call made to the cars API, the mock intercepts the call to the API (in test mode) and returns a manually coded array of cars (please see inside the **mocks**/fetchCars.ts file to see the implementation details).

## State management

In large scale applications, I would most likely opt for a centralised state management solution such as Redux. However, due to the size of this application, I felt as though utilising the Context API with a useReducer hook was more than appropriate enough. In addition, I used localStorage to persist the cars array that's returned from the API.

## Accessibility considerations

Accessibility is always a major focus for me. In this project I created a custom dropdown component which has the recommended keyboard accessibility as specified by [Wai-Aria Authoring Practices](https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html). In addition, aria attributes and labels were used on required elements to ensure an accessible application.

## Styled Components

I'm a big advocate for scalable css, and in order to achieve that in the past, I would very strictly follow the BEM paradigm mixed with SCSS. However more recently I have become very fond of Styled Components because they generate unique IDs for every component, therefore eliminating the possibility of class name clashes and specificity concerns completely in large scale applications. It addition, it ties every bit of CSS to a specific component, which is essentially what BEM was trying to achieve.

## Mobile Responsive Considerations

I have implemented some media queries to showcase my ability to use them appropriately. However, due to the time crunch for building this application, I didn't focus much on mobile responsiveness as I I dedicated more time towards testing, React and TypeScript, and ensuring all of the features work.

## Performance considerations

I made sure to implement some best practices regarding React performance such as useCallback and useMemo hooks for memoization of values and functions. In addition, I ensured a Loading component was displayed as the data was fetched. I also ensured that the cars are initially rendered as soon as they are fetched from the API, and then the DOM updates again once the phonetic words are fetched - this is to ensure a faster initial render time of cars. In addition. I utilised the reselect utility for memoized selectors. 

## create-react-app

Whereas in the past I have created my own configuration boilerplate for React applications, due to the time I had to spend on this project I decided to use Create-React-App which comes with a great default configuration setup.

## Final thoughts

Please be aware that in a real life project, I would take longer with each feature/story, ensuring proper test coverage, well though out architecture and the best code practices. While I did my best to showcase my ability, as this project was built in a short time crunch, it doesn't reflect the quality of work I would aim to achieve in a real production environment.
