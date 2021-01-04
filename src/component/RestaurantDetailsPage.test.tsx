import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import {RestaurantDetails} from '../model/Restaurant'
import {RestaurantRepoSpy, RestaurantRepoStub} from '../repo/RestaurantRepoDoubles'
import RestaurantDetailsPage from './RestaurantDetailsPage'
import {Category} from '../model/Category'
import {act} from 'react-dom/test-utils'
import {RouterSpy} from '../router/RouterDoubles'

describe('RestaurantDetailsPage', () => {
    test('makes request for correct restaurant',  async() => {
        const restaurantRepo = new RestaurantRepoSpy()
        const router = new RouterSpy()
        router.getUrlParam_returnValue = 99

        const props = {
            restaurantRepo,
            router
        }

        await act(async() => {
            render(<RestaurantDetailsPage {...props} />)
        })


        expect(restaurantRepo.getDetails_calledWith).toEqual(99)
    })

    test('displays restaurant details', async () => {
        const restaurantRepo = new RestaurantRepoStub()
        restaurantRepo.getDetails_returnValue = Promise.resolve(
            new RestaurantDetails(1,
                'Restaurant A',
                'very tasty A cuisine!',
                [new Category(1, 'Curry'), new Category(2, 'Spicy')],
                5)
        )


        const props = {
            restaurantRepo,
            router: new RouterSpy()
        }
        const restaurantDetailsPage = render(<RestaurantDetailsPage {...props} />)
        await waitForElement(() => restaurantDetailsPage.queryByText('Restaurant A'))


        expect(restaurantDetailsPage.queryByText('Restaurant A')).toBeInTheDocument()
        expect(restaurantDetailsPage.queryByText('very tasty A cuisine!')).toBeInTheDocument()
        expect(restaurantDetailsPage.queryByText('5 Stars')).toBeInTheDocument()
        expect(restaurantDetailsPage.queryByText('Curry')).toBeInTheDocument()
        expect(restaurantDetailsPage.queryByText('Spicy')).toBeInTheDocument()
    })

    test('displays error message if no restaurant is found', async () => {
        const restaurantRepo = new RestaurantRepoStub()
        restaurantRepo.getDetails_returnValue = Promise.reject('error 404: unknown ID')
        const router = new RouterSpy()
        router.getUrlParam_returnValue = 99

        const props = {
            restaurantRepo,
            router
        }
        const restaurantDetailsPage = render(<RestaurantDetailsPage {...props} />)
        expect(
            await waitForElement(() => restaurantDetailsPage.queryByText('No Restaurant found for ID 99'))
        ).toBeTruthy()
    })
})
