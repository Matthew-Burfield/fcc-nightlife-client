import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import Authenticate from './containers/Authenticate'
import Access from './containers/Access'
import Test from './containers/Test'

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/authenticate" component={Authenticate} />
			<Route path="/access" component={Access} />
			<Route path="/test" component={Test} />
		</Switch>
	</Router>
)

export default App
