import { Vehicle } from './parentclass.js'
export const str = 'Testing my formidable file';


export class Car extends Vehicle {
    constructor(_id, model,brand, serial, latLong){
        super(_id, model,brand, serial, latLong);
        this.miles = null;
    }

    // travel(){
    //     return 'this is the travlelling code'
    // }

    // parentMsg(){
    //     return this.call;// from parent object
    // }
    // typeFunc(){
    //    return super.kind(this.brand);
    // }


    // static description(){
    //     super.description();
    //     return 'this is an object for cars';
    // }

}


export class Plane extends Vehicle {
    constructor(_id, model,brand, serial, latLong){
        super(_id, model,brand, serial, latLong);
        this.airtimeHours = null;
        this.base = null;
    }

    // travel(){
    //     return 'this is the travlelling code'
    // }

    // parentMsg(){
    //     return this.call;// from parent object
    // }
    // typeFunc(){
    //    return super.kind(this.brand);
    // }


    // static description(){
    //     super.description();
    //     return 'this is an object for plane';
    // }

}