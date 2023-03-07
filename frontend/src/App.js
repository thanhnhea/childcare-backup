import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Doctors from './Pages/Doctor/Doctors/Doctors';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';
import Register from './Pages/Register/Register';
import ChangePasword from './Pages/ChangePassword/ChangePassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import UserDetails from './Pages/UserDetails/UserDetails';
import UserList from './Pages/UserList/UserList';
import ClassList from './Pages/ClassChildren/ClassList/ClassList';
import ClassDetails from './Pages/ClassChildren/ClassDetails/ClassDetails';
import Children from './Pages/ClassChildren/Children/Children';
import Profile from './Pages/profile'
import BoardAdmin from './Pages/board-admin.component'
// import BoardModerator from './Pages/board-moderator.component'
import BoardUser from './Pages/board-user.component'
import Booking from './Pages/Booking/BookingForm/Booking';
import AddChild from './Pages/Booking/AddChildren/AddChildren';
import ManageBoard from './components/ManagerBoard';
import ChildProfile from './components/ChildProfile';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/doctor' element={<Doctors />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/changepasword' element={<ChangePasword />} />
          <Route path='/userDetails' element={<UserDetails />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/classList' element={<ClassList />} />
          <Route path='/classpetails' element={<ClassDetails />} />
          <Route path='/mod' element={<ManageBoard />} />
          <Route path='/changepasword' element={<ChangePasword />} />
          <Route path='/userdetails' element={<UserDetails />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/booking' element={<Booking />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/addchild" element={<AddChild />} />
          <Route path="/child" element={<ChildProfile />} />
          <Route path="/class/:id" element={<ClassDetails />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
