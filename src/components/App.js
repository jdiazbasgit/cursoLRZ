
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import Page404 from './Page404'
import Home from './Home'
import "./App.css"
import ExternalForm from './externalForm/ExternalForm';
import SelectExternalForm from './externalForm/SelectExternalForm';


function subscribeToPushNotifications() {
  navigator.serviceWorker.ready.then(registration => {
    registration.pushManager.subscribe({ userVisibleOnly: true })
      .then(subscription => {
        // Send the subscription data to your FastAPI server
        fetch('/api/send_notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscription),
        });
      })
      .catch(error => {
        console.error('Error subscribing to push notifications:', error);
      });
  });
}

function requestNotificationPermission() {
  if ('Notification' in window) {
    // Request permission inside a user-generated event handler, like a button click.
    document.getElementById('notificationButton').addEventListener('click', function () {
      Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          console.log('Notification permission granted');
        } else {
          console.warn('Notification permission denied');
        }
      });
    });
  }
}





function App() {
  // useEffect(() => {
  //   requestNotificationPermission();
  // }, []);
  
  return (
  <div className="App"> 
  {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  
      <button id="notificationButton" onClick={requestNotificationPermission}>
        Request Notification Permission
      </button> */}
       
    <BrowserRouter>
    {/* <Navbar /> */}
    <br></br>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/*" element={<Page404/>} />
      <Route path="/error-page" element={ <Page404 /> }/>
      <Route path="/redirect" element={ <Navigate to="/error-page" /> }
                />
    </Routes>

    
    
    </BrowserRouter>
    <SelectExternalForm />
    <ExternalForm />
  </div>
  );
}

export default App
