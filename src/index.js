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

// import NotificationList from './sample_state/NotificationList';
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <NotificationList/>
//     </React.StrictMode>
//   );

//   import Counter from './sample_state/Counter';
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <Counter/>
//     </React.StrictMode>
//   );

// import Capacity from './sample_hook/Capacity';
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <Capacity/>
//     </React.StrictMode>
// );

// import ButtonEvent from './sample_event/ButtonEvent';
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <ButtonEvent/>
//     </React.StrictMode>
// );