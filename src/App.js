import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Address from './component/address/Adress';
import FullName from './component/fullname/FullName';
import ProfilePhoto from './component/profilephoto/ProfilePhoto';
 
import Footer from './component/footer/Footer';
import NavBar from './component/navbar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
        <Footer/>
    </div>
  );
}

export default App;
