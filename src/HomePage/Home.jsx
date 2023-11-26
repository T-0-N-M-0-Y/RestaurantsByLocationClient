import { useEffect, useState } from "react";

const Home = () => {
    const [restaurants, setrestaurants] = useState([]);
    console.log(restaurants);

    useEffect(() => {
        fetch("http://localhost:5000/state")
            .then((res) => res.json())
            .then((data) => setrestaurants(data));
    }, []);

    return (
        <>
            <h1 className="text-center font-bold lg:mb-20 my-5 lg:text-5xl text-2xl text-amber-950">Restaurants By Location</h1>
            <div className="lg:flex lg:justify-evenly text-center">
                {restaurants.map((state) => (
                    <div key={state.state}>
                        <h2 className="font-bold text-2xl uppercase text-red-700 underline">{state.state}</h2>
                        <ul>
                            {state.restaurants.map((restaurant) => (
                                <li key={restaurant} className="my-2 font-semibold">{restaurant}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;