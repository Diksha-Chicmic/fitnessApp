import {ObjectSchema, Realm} from 'realm';

export class PostDb extends Realm.Object{
    photo?:string;
    caption?:string;
    public static schema: ObjectSchema={
        name:'PostDb',
        properties:{
            photo:'string',
            caption:'string'
        },
        primaryKey:'photo'
    }
}