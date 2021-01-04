export default interface Router {
    gotoHomePage(): void

    gotoRestaurantListPage(): void

    gotoRestaurantDetailsPage(id: number): void

    getUrlParamId(paramName: string): number
}