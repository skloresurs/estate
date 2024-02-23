export default interface ICommand {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  title: string;
  avatar: {
    url: string;
  };
}
