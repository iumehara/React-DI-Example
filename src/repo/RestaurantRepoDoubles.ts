import RestaurantRepo from './RestaurantRepo'
import {Restaurant, RestaurantDetails} from '../model/Restaurant'
import {Category} from '../model/Category'

export class RestaurantRepoStub implements RestaurantRepo {
    getAll_returnValue: Promise<Restaurant[]>
    getDetails_returnValue: Promise<RestaurantDetails>

    constructor() {
        this.getAll_returnValue = Promise.resolve([
            new Restaurant(1, 'Restaurant A', 'All the best A cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(2, 'Restaurant B', 'All the best B cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(3, 'Restaurant C', 'All the best C cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(4, 'Restaurant D', 'All the best D cuisine! Really exciting and tasty food at a reasonable price!'),
            new Restaurant(5, 'Restaurant E', 'All the best E cuisine! Really exciting and tasty food at a reasonable price!'),
        ])
        this.getDetails_returnValue = Promise.resolve(
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
    }

    getAll(): Promise<Restaurant[]> {
        return this.getAll_returnValue
    }

    getDetails(id: number): Promise<RestaurantDetails> {
        return this.getDetails_returnValue
    }
}

export class RestaurantRepoSpy implements RestaurantRepo {
    getAll_called: boolean
    getDetails_calledWith: number | null

    constructor() {
        this.getAll_called = false
        this.getDetails_calledWith = null
    }

    getAll(): Promise<Restaurant[]> {
        this.getAll_called = true
        return Promise.resolve([])
    }

    getDetails(id: number): Promise<RestaurantDetails> {
        this.getDetails_calledWith = id
        return Promise.resolve(new RestaurantDetails(0, '', '', [], 0))
    }
}
