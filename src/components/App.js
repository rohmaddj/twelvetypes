import '../assets/style/HomePage.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './child/Footer';
import Header from './child/Header';
import Register from  './child/Register';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import QuizPage from './pages/QuizPage';
import ContactPage from './pages/ContactPage';
import ArchetypePage from './pages/ArchetypePage';
import SingleArchetypePage from './pages/SingleArchetypePage';


import DashboardPage from './pages/DashboardPage';
import SidebarMenu from './child/SidebarMenu';
class App extends React.Component {

  render() {
    return (
    <div className="pusher">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/archetype" component={ArchetypePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={SidebarMenu} />
        <Route path="/archetype/details" component={SingleArchetypePage} />

        <Route path="/dashboard" component={DashboardPage} />
        <Footer />
      </BrowserRouter>
    </div>
    );
  }
}

export default App;