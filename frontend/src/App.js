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
import Booking from './Pages/Booking/BookingRequest';
import AddChild from './Pages/Booking/AddChildren/AddChildren';
import ManageBoard from './components/ManagerBoard';
import ChildProfile from './components/ChildProfile';
import BoardParent from './Pages/board-parent.component';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import CreateServices from './Pages/Manager/CreateServices/CreateServices';
import EditUser from './Pages/Manager/EditUser/EditUser';
import AddUser from './Pages/Manager/AddUser/AddUser';
import Services from './Pages/Services/Banner/Services';



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
          <Route path='/forgetpassword' element={<ForgetPassword />} />
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
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/addchild" element={<AddChild />} />
          <Route path="/child/:id" element={<ChildProfile />} />
          <Route path="/class/:id" element={<ClassDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/parent" element={<BoardParent />} />
          <Route path='/createServices' element={<CreateServices />} />
          <Route path='/editUser' element={<EditUser />} />
          <Route path='/addUser' element={<AddUser />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
