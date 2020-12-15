import React, { lazy, Suspense } from 'react';
import { Nav } from 'react-bootstrap'
import Popular from '@/pages/Popular'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'
import '@/styles/index.less'

const Battle = lazy(() => import('@/pages/Battle/index'));
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav>
                        <NavLink className="top " to="/Popular">Popular</NavLink>
                        <NavLink className="top " to="/Battle">Battle</NavLink>
                    </Nav>
                    <Route path="/Popular/:src?" component={Popular} />
                    <Suspense fallback={<div style={{ textAlign: "center" }}>Loading...</div>}>
                        <Route path="/Battle/:user?" component={Battle} />
                    </Suspense>
                    <Route exact path="/">
                        <Redirect from="/" to="/Popular" />
                    </Route>
                </div>
            </Router>)
    }
}
export default hot(App)