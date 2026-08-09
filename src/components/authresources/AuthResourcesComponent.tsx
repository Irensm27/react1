import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";

const AuthResourcesComponent = () => {
    useEffect(()=>{
        loadAuthProducts().then(products => {
            console.log(products);// викликали ф-цію, яка завантажує продукти та вивели їх в консоль
        }).catch(reason => console.log(reason));// якщо помилка - виводимо в консоль її причину
        refresh()
            .then(() => loadAuthProducts())
            .then(value => console.log(value)); // після помилки(якщо вона буде) викликали ф-цію, яка дає рефреш токен, з ним знову викликали всі продуки та вивели в консоль
    },[])
    return (
        <div>
            AuthResources
        </div>
    );
};

export default AuthResourcesComponent;