import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn:false
});//기본 컨텍스트 생성

export default AuthContext;
