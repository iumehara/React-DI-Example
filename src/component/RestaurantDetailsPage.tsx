import RestaurantRepo from '../repo/RestaurantRepo'
import React, {useEffect, useState} from 'react'
import {RestaurantDetails} from '../model/Restaurant'
import Router from '../router/Router'

type RestaurantDetailsProps = {
    restaurantRepo: RestaurantRepo,
    router: Router
}

export default function RestaurantDetailsPage(props: RestaurantDetailsProps) {
    const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>()
    const restaurantId = props.router.getUrlParamId("restaurantId")

    useEffect(() => {
        props.restaurantRepo.getDetails(restaurantId)
            .then(setRestaurantDetails)
            .catch(_ => {})
    }, [props.restaurantRepo, restaurantId])

    if (restaurantDetails == null) {
        return <div>No Restaurant found for ID {restaurantId}</div>
    }

    return (
        <div className='RestaurantDetailsPage'>
            <div>{restaurantDetails.name}</div>
            <div>{restaurantDetails.description}</div>
            <div>{restaurantDetails.rating} Stars</div>
            <div>
                {
                    restaurantDetails.categories.map((category, i) => {
                        return <div key={i}>{category.name}</div>
                    })
                }
            </div>
        </div>
    )
}
