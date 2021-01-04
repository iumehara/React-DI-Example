import React, {useEffect, useState} from 'react'
import RestaurantRepo from '../repo/RestaurantRepo'
import {Restaurant} from '../model/Restaurant'
import Router from '../router/Router'
import CategoryRepo from '../repo/CategoryRepo'
import {Category} from '../model/Category'

type RestaurantListPageProps = {
    router: Router,
    restaurantRepo: RestaurantRepo,
    categoryRepo: CategoryRepo
}

function RestaurantListPage(props: RestaurantListPageProps) {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        props.restaurantRepo.getAll().then(setRestaurants)
        props.categoryRepo.getAll().then(setCategories)
    }, [props.restaurantRepo, props.categoryRepo])

    const gotoRestaurantDetailsPage = (id: number) => {
        props.router.gotoRestaurantDetailsPage(id)
    }

    return (
        <div className='RestaurantListPage'>
            <RestaurantList restaurants={restaurants} gotoRestaurantDetailsPage={gotoRestaurantDetailsPage}/>
            <CategoryList categories={categories}/>
        </div>
    )
}

export default RestaurantListPage

function RestaurantList(props: { restaurants: Restaurant[], gotoRestaurantDetailsPage: (id: number) => void }) {
    return (
        <div className='RestaurantList'>
            {props.restaurants.map((restaurant, i) => {
                return (
                    <div key={i} onClick={() => props.gotoRestaurantDetailsPage(restaurant.id)}>
                        <div>{restaurant.name}</div>
                        <div>{restaurant.description}</div>
                    </div>
                )
            })}
        </div>
    )
}


function CategoryList(props: { categories: Category[] }) {
    return (
        <div className='RestaurantList'>
            {props.categories.map((category, i) => {
                return <div key={i}>{category.name}</div>
            })}
        </div>
    )
}
