import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import RestaurantListPage from './RestaurantListPage'
import App from '../App'

describe('RestaurantListPage', () => {
    describe('Restaurant List', () => {
        test('displays restaurants', async () => {
            const restaurantListPage = render(<RestaurantListPage />)
            await waitForElement(() => restaurantListPage.queryByText('Restaurant A'))


            expect(restaurantListPage.queryByText('Restaurant A')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('All the best A cuisine! Really exciting and tasty food at a reasonable price!')).toBeInTheDocument()

            expect(restaurantListPage.queryByText('Restaurant B')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('All the best B cuisine! Really exciting and tasty food at a reasonable price!')).toBeInTheDocument()

            expect(restaurantListPage.queryByText('Restaurant C')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('All the best C cuisine! Really exciting and tasty food at a reasonable price!')).toBeInTheDocument()

            expect(restaurantListPage.queryByText('Restaurant D')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('All the best D cuisine! Really exciting and tasty food at a reasonable price!')).toBeInTheDocument()
        })

        test('redirects to restaurant details page when restaurant component is clicked', async () => {
            const restaurantListPage = render(<App/>)
            await waitForElement(() => restaurantListPage.queryByText('Restaurant A'))
            const restaurantAComponent = restaurantListPage.queryByText('Restaurant A')!

            restaurantAComponent.click()
            await waitForElement(() => restaurantListPage.queryByText('Curry'))

            expect(restaurantListPage.queryByText('Curry')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('Spicy')).toBeInTheDocument()
        })
    })

    describe('CategoryList', () => {
        test('displays categories', async () => {
            const restaurantListPage = render(<RestaurantListPage />)
            await waitForElement(() => restaurantListPage.queryByText('Restaurant A'))

            expect(restaurantListPage.queryByText('Curry')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('Spicy')).toBeInTheDocument()
        })
    })
})
