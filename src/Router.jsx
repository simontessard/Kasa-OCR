import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Location from './pages/Location/Location'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'
import About from './pages/About/About'

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/location/:id" component={Location} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routing
