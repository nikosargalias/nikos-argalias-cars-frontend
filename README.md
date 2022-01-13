## Launch the project

In order to launch the project, please run:

-   npm install
-   npm start
-   -   npm install installs all dependancies and npm start runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In order to run the test suite please run:

-   npm test
-   -   This launches the test runner in the interactive watch mode.\

## Important

A few further considerations I would take for a client project:

-   I would ensure much higher test coverage. In this project I added sufficient tests to showcase my ability to Jest and React testing library. However, in a production evironment, I would either take a TDD approach where the spec is outlined in tests first, and then you build each feature, or at the very least, I would ensure a near 100% test coverage of every component, function and feature. I do ask that you inspect the EditCar.test.ts and cars.test.ts which contain functional tests. 
-   I would design the proper architecture and directory structure in advasnce of building the project based on the scale, requirements and stories of the project. In this project, I used fairly common practices, but due to the small nature of the project, I again opted to utlilise fairly common directory structure for storing context, layout elements and components.
-   I would ensure more use of the 'Rule of Three' principle, some Components share functionality, but it has not been extracted into a shared module. Once again, this is due to the time constraints of the project. I would ensure to spend sufficient time make the code clean, (easy to read), yet consise.
-   I would ensure every story is built on a new feature branch. This project doesn't utilise this practice, once again due to the speed upon which I had to build it, and not spending the proper time to think about how to structure each branch for each feature.
-   Finally, I would like to emphasize, a project properly architected from the ground up, with the best practices implemented, would take multiple days, compared to a few hours in order to build. This is the reason behind the slightly rushed nature of this. Unfortunately due to my full time job, amongst other things, I was not able to spend more than a few hours building this, but I opted to try and showcase a little of my ability from various aspects of frontend, and also meet the spec requirements.

Whatever happpens, I very much appreciate your time reviewing this project.

## Spec requirements met

-   Caching added cars to localStorage
-   Storing cached cars in localStorage so fetching them again isn't required, making load times much quicker for returning users.
-   Ability to add cars to the list via a form
-   Ability to remove cars
-   Ability to sort cars in alphabetical order by 'Make'
-   Ability to sort cars in by Year created
-   Ability to fetch a new list of cars of a specific Make via a dropdown button.
-   Fetching of words which sound phonetically similar to each car model and rendering them in an additioinal column - this is using the datamuse API listed in the test description.
-   Ability to edit cars after they have been added.
-   Pattern regognition via the use of regex for the add car form and the edit car form.
-   -   In particular:
-   -   -   Make can only be one work of letters.
-   -   -   Model can be only be one word of letters and numbers.
-   -   -   Colour can be up to two words of letters.
-   -   -   using the Pattern attribute of the input element, I also ensured that the year can only be from 1990 to the current year (refernced via a variable which automatically identifies the current year).

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
