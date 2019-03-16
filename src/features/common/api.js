export const createPromise = response =>
  new Promise(resolve => setTimeout(() => resolve(response), 500));
