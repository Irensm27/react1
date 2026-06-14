import type {FC} from "react";
import type {IUserDummyJson} from "../../../models/dummyjson/DummyJsonUsersModel.ts";

type DummyUserPropsType = {
    user: IUserDummyJson;
}

const DummyJsonUserComponent:FC<DummyUserPropsType> = ({user}) => {
    return (
        <div>
            <h2>
                {user.firstName} {user.lastName} {user.maidenName} ({user.username})
            </h2>

            <img src={user.image} alt={user.username}/>

            <p><b>Email:</b> {user.email} (Password: {user.password})</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Gender:</b> {user.gender}</p>
            <p><b>Age:</b> {user.age}</p>
            <p><b>Birth date:</b> {user.birthDate}</p>

            <hr />

            <h3>Physical info</h3>
            <p><b>Height:</b> {user.height}</p>
            <p><b>Weight:</b> {user.weight}</p>
            <p><b>Blood group:</b> {user.bloodGroup}</p>
            <p><b>Eye color:</b> {user.eyeColor}</p>

            <h4>Hair</h4>
            <p>
                {user.hair.color} / {user.hair.type}
            </p>

            <hr />

            <h3>Address</h3>
            <p>{user.address.address}</p>
            <p>
                {user.address.city}, {user.address.state} ({user.address.stateCode})
            </p>
            <p>{user.address.postalCode}</p>

            <p>
                Geo: {user.address.coordinates.lat}, {user.address.coordinates.lng}
            </p>

            <hr />

            <h3>Company</h3>
            <p><b>{user.company.name}</b></p>
            <p>{user.company.department}</p>
            <p>{user.company.title}</p>

            <hr />

            <h3>Bank</h3>
            <p><b>Card:</b> {user.bank.cardType}</p>
            <p><b>Number:</b> {user.bank.cardNumber}</p>
            <p><b>Expire:</b> {user.bank.cardExpire}</p>
            <p><b>Currency:</b> {user.bank.currency}</p>

            <hr />

            <h3>Crypto</h3>
            <p><b>Coin:</b> {user.crypto.coin}</p>
            <p><b>Network:</b> {user.crypto.network}</p>
            <p>{user.crypto.wallet}</p>

            <hr />

            <h3>System</h3>
            <p><b>IP:</b> {user.ip}</p>
            <p><b>MAC:</b> {user.macAddress}</p>
            <p><b>University:</b> {user.university}</p>
            <p><b>Role:</b> {user.role}</p>

            <p>
                <b>User Agent:</b> {user.userAgent}
            </p>
        </div>
    );
};


export default DummyJsonUserComponent;