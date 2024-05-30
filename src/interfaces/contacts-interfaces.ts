type TError = {
  message: string;
  code: number;
};

export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IState {
  items: IContact[];
  isLoading: boolean;
  error: object | null;
}
export interface INewContact {
  name: string;
  number: string;
}
