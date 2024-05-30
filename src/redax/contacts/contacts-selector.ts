interface IContact {
  id: string;
  name: string;
  number: string;
}

interface IShapeState {
  contacts: {
    items: IContact[];
    isLoading: boolean;
    error: object | null;
  };
  filter: string;
}
type TGetContacts = (state: IShapeState) => IContact[];
type TGetFilter = (state: IShapeState) => string;
type TGetIsLoading = (state: IShapeState) => boolean;
type TGetIsError = (state: IShapeState) => object | null;

// селектор получения части стейта массива контактов
export const getContacts: TGetContacts = state => state.contacts.items;
// селектор получения части стейта хранящего значение фильтра

export const getFilter: TGetFilter = state => state.filter;
//Составной селектор для получения отфильтрованных контактов
export const getfilteredContacts: TGetContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  if (filter !== '') {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return contacts;
  }
};
export const getIsLoading: TGetIsLoading = state => state.contacts.isLoading;

export const getError: TGetIsError = state => state.contacts.error;
