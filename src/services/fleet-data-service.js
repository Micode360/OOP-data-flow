import { Car } from '../inheritance.js'
import { Plane } from '../inheritance.js'
import { ErrorMessage } from './error.data.js'

export class DataService {
    constructor() {
        this.cars = [];
        this.planes = [];
        this.errors = [];
    }

    getCarBySerial(license) {
        return this.cars.find(car=>{
            return car.serial === license;
        })
    }

    getCarsSortedByLiscense() {
        return this.cars.sort((car1, car2)=>{
            if(car1.serial < car2.serial)
                return -1;
            if(car1.serial > car2.serial)
                return 1;
            return 0;
        })
    }

    filterCarsByMake(filter){
        return this.cars.filter(car => car.brand.indexOf(filter) >= 0);
    }

    payload(fleet) {

        for(let i = 0; i < fleet.length; i++){
                switch (fleet[i].type){
                    case 'car':
                        if(this.validateCarData(fleet[i])){
                            let car = this.loadCar(fleet[i]);
                            if(car) this.cars.push(fleet[i]);
                        }else{
                            let e = new ErrorMessage('invalid car data', fleet[i]);
                            this.errors.push(e);
                        }
                        break;
                    case 'plane':
                        this.planes.push(fleet[i])
                        break;
                    default:
                        let e = new ErrorMessage('invalid vehicle type', fleet[i]);
                        this.errors.push(e);
                        break;
                }
        }

    }

    loadCar(car){
        try{
            let c = new Car(car._id, car.model,car.brand, car.serial, car.latLong);
            c.miles = car.miles;
            return c;
        }catch{
            let e = new ErrorMessage('invalid car type', car);
            this.errors.push(e);
            return null;
        }
    }


    validateCarData(car){
        let requiredProps = '_id brand serial latLong miles'.split(" ");
        let hasErrors = false;
        for(let field of requiredProps){
            if(!car[field]){
                this.errors.push(new ErrorMessage(`invalid field ${field}`,car));
                hasErrors = true;
            }
        }

        if(Number.isNaN(Number(car.miles))){
            this.errors.push(new ErrorMessage('invalid error in miles',car));
            hasErrors = true;
        }
        return !hasErrors;
    }

}


// export default DataService;