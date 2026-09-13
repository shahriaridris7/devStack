Author-Shahriar Idris
Project Name: DevStack

Description:
DevStack is a responsive web application where developers can explore different technologies and create their own personalized technology stack. Users can add technologies to their stack, remove individual items, or clear the entire stack.

Technology Used:
1. React.js
2. Tailwind CSS, DaisyUI
3. TypeScript 
4. React-Toastify (NPM Package)
5. JSON (for technology data)
6. Vite (build tool)

Features:
1. Explore Technologies — Browse different development technologies with their descriptions, categories, difficulty levels, and ratings.
2. Build Your Stack — Add technologies to your personal stack and prevent duplicate items from being added.
3. Interactive Notifications — Get toast notifications when adding, removing, or clearing technologies from your stack

Questions and Answers;
1. What is JSX, and why is it used in React?
Answer: JSX is a type of syntex that allow us to write html like code in typescript or javascript. it makes the component much easier to read and understand.

2. What is the difference between props and state?
answer: Props is data which is passed from  the parent to the child and state is data that is managed inside of a component which will change over time.

3. What does the useState hook do, and where did you use it in this project?
answer: useState allows us to store and update data in a React component. I used it to store the technologies selected by the user for their stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
answer: useEffect runs code after a component renders. It is useful for tasks such as fetching data.I did not use useEffect in this project.
5. Why does every item in a .map() list need a unique key prop?
answer: because it helps react to identify and update each item correctly.
6. What is conditional rendering? Show one place you used it .
answer: Conditional rendering means showing different content based on a condition. For example, I used it to show a message when the user's stack is empty.



7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
answer: Data flows downward from a parent component to a child component using props and to communicate in reverse and send data back up, the parent defines a callback function and passes it down to the child as a prop.