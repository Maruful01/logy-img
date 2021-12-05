import logo from './logo.svg';
import './App.css';
import img1 from './Images/image-1.jpg';
import img2 from './Images/image-2.jpg';

function App() {

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqDMa4kz53DPnZmvww_WWdYBrNJtdfxog",
  authDomain: "logyzone-img.firebaseapp.com",
  projectId: "logyzone-img",
  storageBucket: "logyzone-img.appspot.com",
  messagingSenderId: "583763510950",
  appId: "1:583763510950:web:34959eb3ada66b4cd51667",
  measurementId: "G-LG13N1B5C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


  const images = [
                   {
                     id: 1,
                     img: img1
                   },
                   {
                     id: 2,
                     img: img2
                   }

                 ]
  return (
    <div className="App">
          {
            images.map (img => ( <img style={{width: "80%"}} id={img.id} src={img.img} alt="" srcset="" /> ))
          }
           
    </div>
  );
}

export default App;
