import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Login from './containers/Login'
import Authenticate from './containers/Authenticate'
import Access from './containers/Access'

import reactLogo from './assets/React-icon.png'

const App = () => (
	<Router>
		<main className="container">
			<div>
				<h1>hello world!!!!</h1>
				<img className="container__image" alt="react logo" src={reactLogo} />
				<p>If you see this everything is working!</p>
			</div>
			<ul className="left">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/login" component={Login} />
				<Route path="/authenticate" component={Authenticate} />
				<Route path="/access" component={Access} />
			</Switch>
		</main>
	</Router>
)

export default App
