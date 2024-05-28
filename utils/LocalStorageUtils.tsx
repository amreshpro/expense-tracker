const isBrowser = typeof window === "undefined";

const key = "expenseTracker";

export function getItemFromLocalStorage() {
  console.log(localStorage.getItem(key))
  return JSON.parse(localStorage.getItem(key)!);
}

export function setItemInLocalStorage(newValue: any) {
try {

  
} catch (error) {
  console.log("Local Storage Error: " +error)
}
   
}

export function removeItemFromLocalStorageByID(id: any) {
  const getLocalStorage = localStorage.getItem(key) ?? "";
  const localStorageArray = JSON.parse(getLocalStorage!);
  const updatedLocalStorage = localStorageArray.filter((item: { id: any }) => {
    if (item.id !== id) return item;
  });

  localStorage.setItem(key, JSON.stringify(updatedLocalStorage));
}
