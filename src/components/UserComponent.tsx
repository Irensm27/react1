import {type FC, memo} from "react";


const UserComponent:FC<{foo:()=> void, arr:number[], item:{name:string}}> =memo(({arr, item}) => {
    //використовуємо memo для того, щоб не виконувався повторний рендер, якщо props не змінюється
    console.log('user');
    console.log(arr)

    return (
        <div>
            {item.name}
        </div>
    );
});

export default UserComponent;