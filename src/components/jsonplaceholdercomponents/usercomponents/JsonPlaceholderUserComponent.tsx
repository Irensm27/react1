import type {IUserJsonPlaceholder} from "../../../models/jsonplaceholder/JsonPlaceholderUsersModel.ts";
import type {FC} from "react";

type JsonUsersTypeProps = {
    user: IUserJsonPlaceholder;
}

const JsonPlaceholderUserComponent:FC<JsonUsersTypeProps> = ({user}) => {
    return (
        <div>
            <div>
                <h2>{user.name} (@{user.username})</h2>

                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Website:</b> {user.website}</p>

                <hr />

                <h3>Address</h3>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <p>
                    Geo: {user.address.geo.lat}, {user.address.geo.lng}
                </p>

                <hr />

                <h3>Company</h3>
                <p><b>Name:</b> {user.company.name}</p>
                <p><i>{user.company.catchPhrase}</i></p>
                <p>{user.company.bs}</p>
            </div>
            );
        </div>
    );
};

export default JsonPlaceholderUserComponent;