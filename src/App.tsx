import React from 'react'
import './App.css'
import RouterImpl from './router/RouterImpl'
import {createBrowserHistory} from 'history'
import {Route, Router as ReactRouter, Switch} from 'react-router-dom'
import RestaurantRepoImpl from './repo/RestaurantRepoImpl'
import CategoryRepoImpl from './repo/CategoryRepoImpl'
import RestaurantListPage from './component/RestaurantListPage'
import RestaurantDetailsPage from './component/RestaurantDetailsPage'

function App() {
    const restaurantRepo = new RestaurantRepoImpl()
    const categoryRepo = new CategoryRepoImpl()
    const history = createBrowserHistory()
    const router = new RouterImpl(history)

    return (
        <div className="App">
            <div onClick={() => router.gotoHomePage()}>Lunch Finder</div>
            <ReactRouter history={history}>
                <Switch>
                    <Route path='/restaurants/:restaurantId'>
                        <RestaurantDetailsPage restaurantRepo={restaurantRepo}
                                               router={router}/>
                    </Route>
                    <Route path='/restaurants'>
                        <RestaurantListPage router={router}
                                            restaurantRepo={restaurantRepo}
                                            categoryRepo={categoryRepo}/>
                    </Route>
                    <Route path='/'>
                        <RestaurantListPage router={router}
                                            restaurantRepo={restaurantRepo}
                                            categoryRepo={categoryRepo}/>
                    </Route>
                </Switch>
            </ReactRouter>
        </div>
    )
}

export default App
