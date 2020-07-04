import { IUserProfile } from './IUserProfile';

export interface IUser {
    id?: number,
    username: string,
    displayName?: string,
    online?: string,
    language?: string,
    profile?: IUserProfile,
    patron?: string
}