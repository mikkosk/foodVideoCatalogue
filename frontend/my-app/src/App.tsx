import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RegisterPage } from './components/RegisterPage';
import { UserPage } from './components/UserPage';
import { SearchPage } from './components/SearchPage';
import { VideoPage } from './components/VideoPage';
import { LoginBar } from './components/LoginBar';
import loginStorage from './utils/loginStorage';
import { loadUser } from './reducers/loginReducer';
import { useAppDispatch } from './store';
import AddVideoPage from './components/AddVideoPage';
import NotificationBar from './components/NotificationBar';

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const user = loginStorage.loadUser()
    if(user) {
      dispatch(loadUser(user))
    }
  })

  return (
    <div className="restrict-width">
        <Router>
          <NotificationBar />
          <LoginBar />
          <Switch>
            <Route path="/register" render={() => <RegisterPage />} />
            <Route path="/user/:userid" render={() => <UserPage />} />
            <Route path="/search" render={() => <SearchPage />} />
            <Route path="/video/:videoid" render={() => <VideoPage />} />
            <Route path="/addVideo" render={() => <AddVideoPage />} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
