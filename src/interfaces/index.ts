export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    img: string;
    email: string;
    password: string;
}

export interface IUsersList {
    data: IUser[];
    deleteUser: (id: number) => void;
}
