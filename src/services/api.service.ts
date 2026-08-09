import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductResponseModel} from "../models/IProductResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type loginData = {
    username: string,
    password: string,
    expiresInMins:number
}// створюємо тип для даних користувача, які використовуються при логіні

const axiosInstanse = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers:{}
});// створюємо axios instance з базовим URL для всіх запитів

axiosInstanse.interceptors.request.use((requestObject)=>{
    if (requestObject.method?.toUpperCase()==='GET'){
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;
})// додаємо токен до наших запитів, перевірка уточнює, що метод має бути саме гетовим, додаємо до запиту токен, який зберегли в локалсторіджі, після логіну користувача

export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstanse.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
};// пишемо ф-цію, яка приймає дані користувача, робить з ними пост запит на сервіс, зберігаємо в локалсторідж ці дані та повертаємо їх з токеном

export const loadAuthProducts = async ():Promise<IProduct[]>=>{
    const {data:{products}} = await axiosInstanse.get<IProductResponseModel>('/products');
    return products;
}// функція отримує дані по продуктам(з токеном) використовуючи baseURL+products та повертає їх

export const refresh = async ()=>{// оновлюємо ключі доступу без повторного логіну
    const UserWithTokens = retriveLocalStorage<IUserWithTokens>('user');// витягуємо дані юзера з локалсторедж
    const {data: {accessToken, refreshToken}} = await axiosInstanse.post<ITokenPair>('/refresh', { // робимо постовий запит для отримання рефреш токену
        refreshToken: UserWithTokens.refreshToken,
        expiresInMins:1// передаємо новий токен та час дії
    });
    UserWithTokens.accessToken = accessToken;
    UserWithTokens.refreshToken = refreshToken;// оновлюємо дані по токенам(замінюємо на нові)
    localStorage.setItem('user', JSON.stringify(UserWithTokens));// зберігаємо нові токени в локалсторідж
}