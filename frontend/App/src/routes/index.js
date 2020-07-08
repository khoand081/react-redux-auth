import React, { Component, Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import _concat from 'lodash/concat';

import Navbar from 'header/navbar';

import userRoutes from 'routes/userRoutes';

import { history } from 'src/history';

const Routes = _concat(userRoutes);

const routeComponents = Routes.map(({ path, component }, key) => <Route key={key} component={component} exact path={path} />);

class App extends Component {
    render() {
        console.log(userRoutes);
        return (
            <Router history={history}>
                <Suspense fallback={<></>}>
                    <Navbar />
                </Suspense>
                <div>
                    <Switch>
                        <Suspense fallback={<></>}>{routeComponents}</Suspense>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
