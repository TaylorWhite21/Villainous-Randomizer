// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function MyApp() {
    // Use the useState hook to track the width of the window
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // Add an event listener for the resize event
    window.addEventListener('resize', function() {
        // Update the window width state when the event is triggered
        setWindowWidth(window.innerWidth);
    });

    return (
        // Pass the window width as a prop to the App component
        <App windowWidth={windowWidth} />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
