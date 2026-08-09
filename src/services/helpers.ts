
export const  retriveLocalStorage =<T> (key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object){
        return {} as T
    }
    const parse = JSON.parse(object);
    return parse as T;
}// пишемо ф-цію, яка отримує дані з локалсторіджа по токену(ключу). якщо даних немає - повертається пустий об'єкт.