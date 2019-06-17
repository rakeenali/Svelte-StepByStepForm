import { writable } from "svelte/store";

function stepFormOne() {
  const { subscribe, set, update } = writable({
    firstName: "",
    lastName: ""
  });

  const setValues = (firstName, lastName) => {
    return update(state => ({
      ...state,
      firstName,
      lastName
    }));
  };

  const logValues = () => {
    const unsubscribe = subscribe(value => {
      return console.log(value);
    });
  };

  return {
    subscribe,
    setValues,
    logValues
  };
}

function stepFormTwo() {
  const { subscribe, set, update } = writable({
    password: ""
  });

  const setValues = password => {
    return update(state => ({
      ...state,
      password
    }));
  };

  const logValues = () => {
    const unsubscribe = subscribe(value => {
      return console.log(value);
    });
  };

  return {
    subscribe,
    setValues,
    logValues
  };
}

function currentForm() {
  const { subscribe, set, update } = writable({
    one: true,
    two: false,
    success: false
  });

  const logValues = () => {
    const unsubscribe = subscribe(value => {
      return console.log(value);
    });
  };

  return {
    subscribe,
    logValues,
    setValues: () =>
      update(n => ({ ...n, one: !n.one, two: !n.two, success: false })),
    success: () =>
      update(n => ({ ...n, success: true, one: false, two: false }))
  };
}

export const FormOne = stepFormOne();
export const CurrentForm = currentForm();
export const FormTwo = stepFormTwo();
