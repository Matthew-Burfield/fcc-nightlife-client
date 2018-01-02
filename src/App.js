import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Login from './containers/Login'
import Authenticate from './containers/Authenticate'
import Access from './containers/Access'

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/login" component={Login} />
			<Route path="/authenticate" component={Authenticate} />
			<Route path="/access" component={Access} />
		</Switch>
	</Router>
)

export default App
