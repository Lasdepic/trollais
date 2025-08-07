export function localStorageGestion(key, value) {
  localStorage.setItem(key, value);
}

export function localStorageRecuperer(key) {
  return localStorage.getItem(key);
}
