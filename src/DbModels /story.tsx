import {ObjectSchema, Realm} from 'realm';
import { StoryData } from '../Defs/user';
export class StoryDb extends Realm.Object{
    storyId!: string;
    storyImage!:string

    public static schema:ObjectSchema={
        name:'StoryDb',
        properties:{
            storyId:'string',
            storyImage:'string',
        },
        primaryKey:'storyId'
    }
}

export class AllStoryDb extends Realm.Object{
    uid!: string;
    createdOn?:Date;
    uName?:string;
    uPhoto?:string;
    stories!:StoryData['stories']
     
    public static schema :ObjectSchema={
        name:'AllStoryDb',
        properties:{
            uid:'string',
            createdOn:'date',
            uName:'string',
            uPhoto:'string',
            stories:'StoryDb[]'
        }
    }
}