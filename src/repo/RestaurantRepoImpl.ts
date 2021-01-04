import RestaurantRepo from './RestaurantRepo'
import {Restaurant, RestaurantDetails} from '../model/Restaurant'
import {RestaurantRepoStub} from './RestaurantRepoDoubles'

export default class RestaurantRepoImpl implements RestaurantRepo {
    getAll(): Promise<Restaurant[]> {
        const stubValueToBeReplacedByNetworkCallOnceApiIsAvailable = new RestaurantRepoStub().getAll_returnValue
        return stubValueToBeReplacedByNetworkCallOnceApiIsAvailable
    }

    getDetails(id: number): Promise<RestaurantDetails> {
        const stubValueToBeReplacedByNetworkCallOnceApiIsAvailable = new RestaurantRepoStub().getDetails_returnValue
        return stubValueToBeReplacedByNetworkCallOnceApiIsAvailable
    }
}