import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import ArticleListPage from './pages/ArticleListPage'
import Article from './pages/Article'
import NavBar from './NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Switch>
        <Route path="/" component= {Home} exact />
        <Route path="/about" component= {About} exact />
        <Route path="/article-list" component= {ArticleListPage} exact />
        <Route path="/article/:name" component= {Article}  />
        <Route component={NotFound} />
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
