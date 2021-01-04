import Router from './Router'
import {History} from 'history'
import {useParams} from 'react-router-dom'

export default class RouterImpl implements Router {
    private history: History

    constructor(history: History) {
        this.history = history
    }

    gotoHomePage(): void {
        this.history.push('/')
    }

    gotoRestaurantListPage(): void {
        this.gotoHomePage()
    }

    gotoRestaurantDetailsPage(id: number): void {
        this.history.push(`/restaurants/${id}`)
    }

    getUrlParamId(paramName: string): number {
        const params: { [key: string]: any } = useParams()
        return params[paramName]
    }
}
