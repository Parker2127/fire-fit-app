# FireFit Gym Application

This is a dynamic gym application built with React, Vite, JavaScript, and Tailwind CSS. It's designed to help users generate personalized workout routines based on their preferences. This project serves as a comprehensive example, summing up various React concepts to build a more complex and functional web application.

## Features

* **Workout Generation:** Dynamically generates workout routines based on user selections (poison/split, muscle groups, objective).

* **Interactive UI:** Provides an engaging user interface for selecting workout parameters.

* **Conditional Rendering:** Displays different sections and content based on user interactions and application state.

* **Reusable Components:** Utilizes a component-based architecture with reusable components like `SectionWrapper` and `Button` for efficient development and consistent styling.

* **Data Persistence (User Preferences):** Integrates `localStorage` with `useEffect` to cache user preferences, reducing input time for returning users.

* **Smooth Navigation:** Implements smooth scrolling to different sections of the application.

* **Exercise Tracking:** Allows tracking of sets completed for each exercise.

---

## Technologies Used

* **React:** A JavaScript library for building user interfaces.

* **Vite:** A fast build tool for modern web projects.

* **JavaScript:** The core programming language for application logic.

* **Tailwind CSS:** A utility-first CSS framework for rapid UI development and responsive design.

* **HTML:** For structuring the web content.

* **Google Fonts:** Used for typography.

* **Font Awesome:** Used for various icons.

---

## Project Structure

The project follows a component-based architecture, emphasizing reusability:

* `App.jsx`: The main root component that orchestrates the `Hero`, `Generator`, and `Workout` sections. It manages global state for workout parameters and generated routines.

* `main.jsx`: The entry point of the application, responsible for rendering the `App` component into the `index.html`.

* `index.html`: The main HTML file where the React application is mounted, including links for fonts and icons.

* `src/components/`: Contains reusable functional components:

    * `Hero.jsx`: The initial landing section of the application.

    * `Generator.jsx`: The section where users select their workout preferences.

    * `Workout.jsx`: Displays the generated workout routine.

    * `SectionWrapper.jsx`: A reusable wrapper component to apply consistent styling (like banners, titles) to different sections.

    * `Header.jsx`: A reusable component for section headers within `Generator`.

    * `Button.jsx`: A reusable component for styled buttons.

    * `ExerciseCard.jsx`: Displays details for an individual exercise within the workout routine.

* `src/utils/`: Contains utility JavaScript files, such as `fire.js` which holds workout data.

* `public/` and `assets/`: Folders for static assets.

* `package.json`: Manages project dependencies and scripts.

* `tailwind.config.js`: Tailwind CSS configuration file.

* `postcss.config.js`: PostCSS configuration file.

---

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* **Node.js:** Ensure Node.js is installed. You can check your version by running `node -v` in your terminal.

* **npm:** Node Package Manager (npm) is usually installed with Node.js.

### Steps

1.  **Create the Project:**
    Open your terminal or command prompt and run the following command to create a new Vite React project:

    ```bash
    npm create vite@latest fire-fit-app

    ```

    Navigate into your newly created project directory:

    ```bash
    cd fire-fit-app

    ```

2.  **Install Dependencies:**
    Install all necessary npm packages, including Tailwind CSS:

    ```bash
    npm install
    npm install tailwindcss @tailwindcss/postcss postcss autoprefixer

    ```

    *If you encounter `EBADENGINE` warnings related to Node.js version, it indicates a mismatch with Vite's requirements. While often just a warning, ensure your Node.js version is within the recommended range for Vite.*

3.  **Initialize Tailwind CSS:**
    Generate the Tailwind CSS and PostCSS configuration files:

    ```bash
    npx tailwindcss init -p

    ```

4.  **Configure Tailwind CSS (`tailwind.config.js`):**
    Open `tailwind.config.js` and ensure the `content` array includes paths to all your React components and HTML files so Tailwind can scan them for classes:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

    ```

5.  **Prepare `index.css`:**
    Open `src/index.css` and add the Tailwind directives at the top. Remove any other default CSS.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Add global font-family here if desired, e.g.: */
    /* * {
      font-family: "Poppins", sans-serif;
    } */

    ```

6.  **Prepare `App.jsx`:**

    * Open `src/App.jsx`.

    * Remove any default imports (e.g., `import './App.css'`).

    * Delete the `App.css` file.

    * Clear everything inside the `return` statement of the `App` function, leaving an empty JSX fragment `<></>`.

    ```javascript
    function App() {
      return (
        <>
        </>
      )
    }
    export default App

    ```

7.  **Create Components Folder and Files:**
    Inside the `src` folder, create a new folder named `components`.
    Inside `src/components`, create the following files:

    * `Hero.jsx`

    * `Generator.jsx`

    * `Workout.jsx`

    * `SectionWrapper.jsx`

    * `Header.jsx`

    * `Button.jsx`

    * `ExerciseCard.jsx`

    Also, create a `utils` folder inside `src` and add `fire.js` (or a similar file containing workout data).

8.  **Add Fonts and Icons to `index.html`:**

    * **Google Fonts:** Go to [Google Fonts](https://fonts.google.com/), select your desired fonts (e.g., "Poppins"), copy the `<link>` tags, and paste them into your `index.html`'s `<head>` section.

    * **Font Awesome:** Go to [Font Awesome CDN](https://cdnjs.com/libraries/font-awesome), copy the `<link>` tag for Font Awesome (e.g., `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.x.x/css/all.min.css`), and paste it into your `index.html`'s `<head>` section.

9.  **Implement Core Components and Logic:**

    * **`App.jsx`:** Manage global state using `useState` for workout parameters (`fire`, `muscles`, `goal`) and the generated `workout` data. Use `useEffect` for conditional rendering and scrolling.

    * **`Hero.jsx`:** Create the introductory section with text and an "Accept and Begin" button.

    * **`Generator.jsx`:** Use `SectionWrapper` and `Header` components. Implement buttons and dropdowns for workout selection. Use `useState` to manage selections.

    * **`Workout.jsx`:** Display the generated workout routine using `ExerciseCard` components.

    * **`SectionWrapper.jsx`:** A generic wrapper component that accepts `children`, `header`, and `title` props to apply consistent section styling.

    * **`Header.jsx`:** A component to display section titles and descriptions.

    * **`Button.jsx`:** A reusable button component that accepts a `text` prop and handles click events.

    * **`ExerciseCard.jsx`:** Displays individual exercise details (name, muscle group, sets, reps, tempo, sets completed) and includes an increment button.

---

## Running the Application

To start the development server and view your application:

```bash
npm run dev
```
## Troubleshooting

Here are some common issues and their solutions encountered during development:

* **Tailwind CSS Styles Not Applying:**

    * **Problem:** Tailwind classes seem to have no effect, or you see `Unknown at rule @tailwind css` errors.

    * **Reason:** The development server might not have picked up the changes in `tailwind.config.js` or `index.css`.

    * **Fix:** Restart the development server (`npm run dev`). Ensure `tailwind.config.js` correctly includes all paths where you use Tailwind classes (`./src/**/*.{js,ts,jsx,tsx}`, `./index.html`).

* **Dropdown Items Not Selectable (e.g., Muscle Groups):**

    * **Problem:** When clicking on dropdown items, they don't get selected or the logic breaks.

    * **Reason:** A common mistake is initializing a state variable (e.g., `const [muscles, setMuscles] = useState('individual')`) with a string when an array operation is intended. This leads to errors like `'individual'.something` when trying to access properties or methods meant for arrays.

    * **Fix:** Initialize the state with an empty array if you intend to store multiple selections or perform array operations: `const [muscles, setMuscles] = useState([])`.

* **`className` Concatenation Issues in Tailwind CSS:**

    * **Problem:** Dynamic `className` values (e.g., `className={'bg-slate-950 ' + (condition ? 'class-a' : 'class-b')}`) don't apply correctly.

    * **Reason:** Tailwind CSS parses individual utility classes separated by spaces. If there's no space between a static class and a dynamically added class, Tailwind merges them into a non-existent class.

    * **Fix:** Always ensure there's a space separating concatenated class names:

        ```javascript
        className={'bg-slate-950 border duration-200 hover:border-orange-800 py-4 rounded-lg ' + (type === fire ? 'border-orange-800' : 'border-orange-600')}

        ```

* **"Light the Torch" Button / First Click Navigation Issue:**

    * **Problem:** A button that triggers a scroll (e.g., `window.location.href = '#workout'`) only works on the second click, not the first.

    * **Reason:** This is a common "first click vs. second click" phenomenon in single-page applications with dynamic content and hash-based navigation. React's asynchronous rendering means the target element might not be fully rendered and available in the DOM at the exact moment of the first click, especially if the content is conditionally rendered.

    * **Fix:** Use the `useEffect` hook to trigger the scroll *after* the component with the target element has rendered and its state has updated.

        ```javascript
        // In App.jsx or the parent component that manages the workout state
        useEffect(() => {
          if (workout && workout.length > 0) { // Check if workout data is available
            const workoutSection = document.getElementById('workout');
            if (workoutSection) {
              workoutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, [workout]); // Dependency array: runs when 'workout' state changes

        ```

        Additionally, ensure the state variable controlling the visibility of the target section is toggled correctly (e.g., `false -> true` on every click) to force a re-render.

* **`Button` Component Not Imported:**

    * **Problem:** A component (e.g., `Button`) is used but not imported, leading to a blank screen or errors.

    * **Reason:** Forgetting to include `import Button from './Button'` at the top of the file where `Button` is used.

    * **Fix:** Always inspect your browser's developer console for errors. Ensure all components are correctly imported where they are used.
