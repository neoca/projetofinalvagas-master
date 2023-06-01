import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

/* components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Message from './components/layout/Message';
import Container from './components/layout/Container';

/* pages */
import Home from './components/pages/Home';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Profile from './components/pages/User/Profile';
import AddVacant from './components/pages/Vacant/AddVacant';
import MyVacants from './components/pages/Vacant/MyVacants';
import EditVacant from './components/pages/Vacant/EditVacant';
import VacantDetails from './components/pages/Vacant/VacantDetails';
import MyApplications from './components/pages/Vacant/MyApplications';
import CaroselNoticias from './components/pages/Carosel/CaroselNoticias';
import Blog from './components/pages/BlogNoticias/Blog';

/* contexts */
import { UserProvider } from './context/UserContext';



function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Route path="/Carosel/CaroselNoticias.jsx">
              <CaroselNoticias/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user/profile">
              <Profile />
            </Route>
            <Route path="/vacant/add">
              <AddVacant />
            </Route>
            <Route path="/vacant/edit/:id">
              <EditVacant />
            </Route>
            <Route path="/vacant/myvacants">
              <MyVacants />
            </Route>
            <Route path="/vacant/myapplications">
              <MyApplications />
            </Route>
            <Route path="/vacant/:id">
              <VacantDetails />
            </Route>
            <Route path="/BlogNoticias/blog.jsx">
              <Blog/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
