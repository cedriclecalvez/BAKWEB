import SignInUp from './ScreenSignInUp'
import HomePage from './ScreenHomePage'
import ScreenSell from './ScreenSell'
import ArticlesSell from './ScreenArticlesSell'
import ArticlesBought from './ScreenArticlesBought'
import InfoUser from './ScreenUserInfo'
import result from './ScreenResultSearch'
import Product from './ScreenProductSelected'
import Filters from './ScreenFilter'
import NavigationBar from'./Component/navbar'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import token from './reducers/token'
import subcat from './reducers/filtre'
const store = createStore(combineReducers({token,subcat}))


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>  
          <Route  path="/"  component={SignInUp} exact/>
          <Route  path="/Accueil" component={HomePage} exact />
          <Route  path="/Vendre" component={ScreenSell} exact />
          <Route  path='/Recherche' component={Filters} />
          <Route  path='/Ventes' component={ArticlesSell} />
          <Route  path='/Achats' component={ArticlesBought} />
          <Route  path='/Information' component={InfoUser} />
          <Route  path='/Resultat' component={result} />
          <Route  path='/Produit' component={Product} />
          <NavigationBar/>
       </Switch>
      </Router>
    </Provider>
  );
}

export default App;
