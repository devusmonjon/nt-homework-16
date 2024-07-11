export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IUsersList {
    data: IUser[];
}
