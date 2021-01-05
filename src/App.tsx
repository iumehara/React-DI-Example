import React from 'react'
import './App.css'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import RestaurantListPage from './component/RestaurantListPage'
import RestaurantDetailsPage from './component/RestaurantDetailsPage'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/restaurants/:restaurantId'>
                        <RestaurantDetailsPage/>
                    </Route>
                    <Route path='/restaurants'>
                        <RestaurantListPage/>
                    </Route>
                    <Route path='/'>
                        <RestaurantListPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

function Header() {
    const history = useHistory()
    return <div onClick={() => history.push('/')}>Lunch Finder</div>
}

export default App
