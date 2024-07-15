import {ObjectSchema, Realm} from 'realm';
import { Meal } from '../Defs/user';

export class MealsDb extends Realm.Object{
    id!:string
    snack?:Array<Meal>;
    breakfast?:Array<Meal>;
    lunch?:Array<Meal>;
    dinner?:Array<Meal>;
    public static schema: ObjectSchema={
        name:'MealsDb',
        properties:{
           id:'string',
           snack:'ItemsDb[]',
           breakfast:'ItemsDb[]',
           lunch:'ItemsDb[]',
           dinner:'ItemsDb[]'
        },
        primaryKey:'id'

    }

}

export class ItemsDb extends Realm.Object{
    id!:string
    name?:string;
    carbs?:number;
    fat?:number;
    protein?:number;
    calories?:number;
    serving_size_g?:number
public static schema:ObjectSchema={
    name:'ItemsDb',
    properties:{
        id:'string',
        name:'string',
        snack:'float',
        breakfast:'float',
        lunch:'float',
        dinner:'float'
    },
}

}