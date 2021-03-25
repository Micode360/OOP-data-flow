import { store } from '../../drawer/case.js' 
import { Car } from '../inheritance.js'
import { Plane } from '../inheritance.js'
import { DataService } from './fleet-data-service.js'


let newDataService = new DataService();
newDataService.payload(store);

export let app = {
    errors: newDataService.errors,
    cars: newDataService.cars,
    planes: newDataService.planes,
    serialfunction: newDataService.getCarBySerial('RTRH-11'),
    sortFunction: newDataService.getCarsSortedByLiscense(),
    filterFunction: newDataService.filterCarsByMake('h')
}; 

