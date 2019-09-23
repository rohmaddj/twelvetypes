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

import DashboardPage from './pages/DashboardPage';
import SidebarMenu from './child/SidebarMenu';
import DemoResultPage from './pages/DemoResultPage';
import { PrivateRoute } from './child/PrivateRoute';
class App extends React.Component {

  render() {
    return (
    <div className="pusher">
      <BrowserRouter basename="/twelvetypes">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/archetype" component={ArchetypePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/quiz" component={QuizPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/menu" component={SidebarMenu} />
        <Route exact path="/demo-result" component={DemoResultPage} />

        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Footer />
      </BrowserRouter>
    </div>
    );
  }
}

export default App;