import PostsComponent from "./components/posts/posts.component";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Link to={'/posts'}>Posts</Link>
        <Switch>
            <Route path={'/posts'} render={() => (<PostsComponent />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
