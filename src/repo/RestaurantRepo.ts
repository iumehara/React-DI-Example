import {Restaurant, RestaurantDetails} from '../model/Restaurant'

export default interface RestaurantRepo {
  getAll(): Promise<Restaurant[]>
  getDetails(id: number): Promise<RestaurantDetails>
}
