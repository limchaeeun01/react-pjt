import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import ConfirmDialog from './sample_jsx/ConfirmDialog';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ConfirmDialog/>
//   </React.StrictMode>
// );

// import Timer from './sample_elements/Timer';
// setInterval(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <Timer/>
//     </React.StrictMode>
//   );
// }, 1000);

import PostList from './sample_elements/PostList';
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <PostList/>
    </React.StrictMode>
  );

