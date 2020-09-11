import React from "react";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({
                          comp: Component, // use comp prop
                          // auth: {isAuthenticated, loading},
                          ...rest
                      }) => (
    <Route
        {...rest}
        render={props =>
            // !isAuthenticated && !loading ? (
            //     <Redirect to="/login"/>
            // ) : (
                <Component {...props} />
            // )
        }
    />
);
