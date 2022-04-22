import "./App.css";
import TodoList from "../src/Component/Todolist";
import Nav from "../src/Component/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../src/Component/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="auth-wrapper">
          <div className="authen-inner">
            <Switch>
              {/* <Route path="/todo" element={<TodoList />} /> */}
              <Route path="/login">
                {/* <h1>aaaaa</h1> */}
                <Login />
              </Route>
              <Route exact path="/">
                {/* <h1>aaaaa</h1> */}
                <TodoList />
              </Route>
              {/* <Route exact path="/login" element={<Login />} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
