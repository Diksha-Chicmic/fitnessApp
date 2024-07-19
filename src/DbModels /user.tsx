import {ObjectSchema, Realm} from 'realm';


export class UserDb extends Realm.Object{
    id!:string;
    firstName?:string;
    lastName?:string;
    fingerprint?:string;
    interests?: {title:string, selected:boolean}[];
    preferences?:{text:string, selected:boolean}[];
    photo?:string;
    gender?:'male' | 'female' | null;
  public static schema :ObjectSchema={
    name:'UserData',
    properties:{
       id:'string',
       firstName:'string',
       lastName:'string',
       gender:'string',
       photo:{
        type:'string',
        optional:true
       },
       interests:'Interest[]',
       preferences:'Preferences[]'
    },
    primaryKey:'id'
  }
}

export class UserInterestDb extends Realm.Object{
    title!:string;
    selected!:boolean
    public static schema :ObjectSchema={
        name:'Interest',
        properties:{
            title:'string',
            selected:'bool'
        },
        primaryKey:'title'
    }
}
export class UserPreferencesDb extends Realm.Object{
    text!:string;
    selected!:boolean
    public static schema :ObjectSchema={
        name:'Preferences',
        properties:{
            text:'string',
            selected:'bool'
        },
        primaryKey:'text'
    }
}