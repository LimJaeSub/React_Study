import React from "react";
import { authService } from "fbase";
// import {signOut} from 'firebase/auth';

function Profile() {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <div>
      <button onClick={onLogOutClick}>Logout</button>
    </div>
  );
}

export default Profile;
