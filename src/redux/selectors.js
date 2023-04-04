export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filter;

export const selectErrorState = (state) => state.contacts.error;

export const selectIsLoadingState = (state) => state.contacts.isLoading;