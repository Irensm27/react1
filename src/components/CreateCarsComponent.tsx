import {useForm} from "react-hook-form";
import type {ICar} from "../models/Cars.ts";
import {addCar} from "../services/api.service.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";


const CreateCarsComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({mode:"all",
        resolver:joiResolver(carValidator)});

    const createHandler = (data:ICar)=>{
        addCar(data);
    };
    return (
        <div className="flex justify-center mt-10">
            <form
                onSubmit={handleSubmit(createHandler)}
                className="bg-white shadow-lg rounded-2xl p-6 w-80 flex flex-col gap-4"
            >
                <h2 className="text-xl font-bold text-center">Create Car</h2>

                {/* BRAND */}
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Brand"
                        {...register("brand")}
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.brand && (
                        <span className="text-red-500 text-sm">
              {errors.brand.message}
            </span>
                    )}
                </div>

                {/* PRICE */}
                <div className="flex flex-col">
                    <input
                        type="number"
                        placeholder="Price"
                        {...register("price")}
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.price && (
                        <span className="text-red-500 text-sm">
              {errors.price.message}
            </span>
                    )}
                </div>

                {/* YEAR */}
                <div className="flex flex-col">
                    <input
                        type="number"
                        placeholder="Year"
                        {...register("year")}
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.year && (
                        <span className="text-red-500 text-sm">
              {errors.year.message}
            </span>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-300 transition font-semibold"
                >
                    Save Car
                </button>
            </form>
        </div>
    );
};

export default CreateCarsComponent;