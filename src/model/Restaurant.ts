import {Category} from './Category'

class Restaurant {
    id: number
    name: string
    description: string

    constructor(id: number,
                name: string,
                description: string) {
        this.id = id
        this.name = name
        this.description = description
    }
}

class RestaurantDetails {
    id: number
    name: string
    description: string
    categories: Category[]
    rating: number

    constructor(id: number,
                name: string,
                description: string,
                categories: Category[],
                rating: number) {
        this.id = id
        this.name = name
        this.description = description
        this.categories = categories
        this.rating = rating
    }
}

export {Restaurant, RestaurantDetails}