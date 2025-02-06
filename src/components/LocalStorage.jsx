
const localkey = "reactTodo";

export const getLocalStorageData = () => {

  const rawTodo = localStorage.getItem(localkey);
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
}
export const setLocalStorageData = (task) => {

  
   return  localStorage.setItem(localkey, JSON.stringify(task));
}
