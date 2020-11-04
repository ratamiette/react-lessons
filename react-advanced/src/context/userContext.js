import React from "react";

const UserContext = React.createContext();

// best practice give a name for our context
UserContext.displayName = "UserContext";

export default UserContext;
