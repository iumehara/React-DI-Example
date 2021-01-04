import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import RestaurantListPage from './RestaurantListPage'
import {Restaurant} from '../model/Restaurant'
import {RestaurantRepoStub} from '../repo/RestaurantRepoDoubles'
import {Category} from '../model/Category'
import {CategoryRepoStub} from '../repo/CategoryRepoDoubles'
import {RouterSpy} from '../router/RouterDoubles'

describe('RestaurantListPage', () => {
    describe('Restaurant List', () => {
        test('displays restaurants', async () => {
            const restaurantRepo = new RestaurantRepoStub()
            restaurantRepo.getAll_returnValue = Promise.resolve([
                new Restaurant(1, 'Restaurant A', 'very tasty A cuisine!'),
                new Restaurant(2, 'Restaurant B', 'very tasty B cuisine!'),
                new Restaurant(3, 'Restaurant C', 'very tasty C cuisine!'),
                new Restaurant(4, 'Restaurant D', 'very tasty D cuisine!')
            ])


            const props = {
                restaurantRepo,
                categoryRepo: new CategoryRepoStub(),
                router: new RouterSpy()
            }
            const restaurantListPage = render(<RestaurantListPage {...props} />)
            await waitForElement(() => restaurantListPage.queryByText('Restaurant A'))


            expect(restaurantListPage.queryByText('Restaurant A')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('very tasty A cuisine!')).toBeInTheDocument()

            expect(restaurantListPage.queryByText('Restaurant B')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('very tasty B cuisine!')).toBeInTheDocument()

            expect(restaurantListPage.queryByText('Restaurant C')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('very tasty C cuisine!')).toBeInTheDocument()

            expect(restaurantListPage.queryByText('Restaurant D')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('very tasty D cuisine!')).toBeInTheDocument()
        })

        test('redirects to restaurant details page when restaurant component is clicked', async () => {
            const restaurantRepo = new RestaurantRepoStub()
            restaurantRepo.getAll_returnValue = Promise.resolve([
                new Restaurant(1, 'Restaurant A', 'very tasty A cuisine!'),
                new Restaurant(2, 'Restaurant B', 'very tasty B cuisine!'),
                new Restaurant(3, 'Restaurant C', 'very tasty C cuisine!'),
                new Restaurant(4, 'Restaurant D', 'very tasty D cuisine!')
            ])
            const spyRouter = new RouterSpy()


            const props = {
                restaurantRepo,
                categoryRepo: new CategoryRepoStub(),
                router: spyRouter
            }
            const restaurantListPage = render(<RestaurantListPage {...props} />)
            await waitForElement(() => restaurantListPage.queryByText('Restaurant A'))
            const restaurantAComponent = restaurantListPage.queryByText('Restaurant A')!
            restaurantAComponent.click()


            expect(spyRouter.gotoRestaurantDetailsPage_calledWithId).toEqual(1)
        })
    })

    describe('CategoryList', () => {
        test('displays categories', async () => {
            const categoryRepo = new CategoryRepoStub()
            categoryRepo.getAll_returnValue = Promise.resolve([
                new Category(1, 'Curry'),
                new Category(2, 'Spicy'),
            ])

            const props = {
                restaurantRepo: new RestaurantRepoStub(),
                categoryRepo,
                router: new RouterSpy()
            }
            const restaurantListPage = render(<RestaurantListPage {...props} />)
            await waitForElement(() => restaurantListPage.queryByText('Restaurant A'))

            expect(restaurantListPage.queryByText('Curry')).toBeInTheDocument()
            expect(restaurantListPage.queryByText('Spicy')).toBeInTheDocument()
        })
    })
})
