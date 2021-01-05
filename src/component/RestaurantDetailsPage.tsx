import React, {useEffect, useState} from 'react'
import {RestaurantDetails} from '../model/Restaurant'
import {useParams} from 'react-router-dom'
import {Category} from '../model/Category'

export default function RestaurantDetailsPage() {
    const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>()
    const {restaurantId} = useParams()

    const getDetails = (id: number) => {
        const stubValueToBeReplacedByNetworkCallOnceApiIsAvailable = Promise.resolve(
            new RestaurantDetails(1,
                'Restaurant A',
                'All the best A cuisine! Really exciting and tasty food at a reasonable price!',
                [
                    new Category(1, 'Curry'),
                    new Category(2, 'Spicy')
                ],
                4
            )
        )
        return stubValueToBeReplacedByNetworkCallOnceApiIsAvailable
    }

    useEffect(() => {
        getDetails(restaurantId)
            .then(setRestaurantDetails)
            .catch(_ => {})
    }, [restaurantId])

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
