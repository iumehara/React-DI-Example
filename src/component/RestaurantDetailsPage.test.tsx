import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import RestaurantDetailsPage from './RestaurantDetailsPage'
import App from '../App'

describe('RestaurantDetailsPage', () => {
    test('makes request for correct restaurant',  async() => {
        expect(fail('How do I test this??'))
    })

    test('displays restaurant details', async () => {
        const app = render(<App/>)
        await waitForElement(() => app.queryByText('Restaurant A'))
        const restaurantAComponent = app.queryByText('Restaurant A')!

        restaurantAComponent.click()
        await waitForElement(() => app.queryByText('Curry'))

        expect(app.queryByText('Restaurant A')).toBeInTheDocument()
        expect(app.queryByText('All the best A cuisine! Really exciting and tasty food at a reasonable price!')).toBeInTheDocument()
        expect(app.queryByText('4 Stars')).toBeInTheDocument()
        expect(app.queryByText('Curry')).toBeInTheDocument()
        expect(app.queryByText('Spicy')).toBeInTheDocument()
    })

    test('displays error message if no restaurant is found', async () => {
        expect(fail('How do I test this??'))
    })
})
