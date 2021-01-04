import Router from './Router'

export class RouterSpy implements Router {
    gotoHomePage_called: boolean
    gotoRestaurantDetailsPage_calledWithId: number | null
    gotoRestaurantListPage_called: boolean
    getUrlParam_returnValue: number

    constructor() {
        this.gotoHomePage_called = false
        this.gotoRestaurantDetailsPage_calledWithId = null
        this.gotoRestaurantListPage_called = false
        this.getUrlParam_returnValue = 0
    }

    gotoHomePage(): void {
        this.gotoHomePage_called = true
    }

    gotoRestaurantDetailsPage(id: number): void {
        this.gotoRestaurantDetailsPage_calledWithId = id
    }

    gotoRestaurantListPage(): void {
        this.gotoRestaurantListPage_called = true
    }

    getUrlParamId(paramName: string): number {
        return this.getUrlParam_returnValue
    }
}
