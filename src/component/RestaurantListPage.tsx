import React, {useEffect, useState} from 'react'
import {Restaurant} from '../model/Restaurant'
import {Category} from '../model/Category'
import {useHistory} from "react-router-dom"

function RestaurantListPage() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const history = useHistory()

    useEffect(() => {
        getAllRestaurants().then(setRestaurants)
        getAllCategories().then(setCategories)
    }, [])

    const getAllRestaurants = () => {
        const stubValueToBeReplacedByNetworkCallOnceApiIsAvailable = Promise.resolve([
            new Restaurant(1, 'Restaurant A', 'All the best A cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(2, 'Restaurant B', 'All the best B cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(3, 'Restaurant C', 'All the best C cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(4, 'Restaurant D', 'All the best D cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(5, 'Restaurant E', 'All the best E cuisine! Really exciting and tasty food at a reasonable price!'),
        ])
        return stubValueToBeReplacedByNetworkCallOnceApiIsAvailable
    }

    const getAllCategories = () => {
        const stubValueToBeReplacedByNetworkCallOnceApiIsAvailable = Promise.resolve([
            new Category(1, 'Curry'),
            new Category(2, 'Spicy')
        ])
        return stubValueToBeReplacedByNetworkCallOnceApiIsAvailable
    }

    return (
        <div className='RestaurantListPage'>
            <div className='RestaurantList'>
                {restaurants.map((restaurant, i) => {
                    return (
                        <div key={i} onClick={() => history.push(`/restaurants/${restaurant.id}`)}>
                            <div>{restaurant.name}</div>
                            <div>{restaurant.description}</div>
                        </div>
                    )
                })}
            </div>
            <div className='RestaurantList'>
                {categories.map((category, i) => {
                    return <div key={i}>{category.name}</div>
                })}
            </div>
        </div>
    )
}

export default RestaurantListPage
