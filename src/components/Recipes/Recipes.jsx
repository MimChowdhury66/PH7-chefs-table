import { useEffect, useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    const [cart, setCart] = useState([]);

    const [preparing, setPreparing] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);


    const handleCook = (cook) => {
        // console.log(cook);
        const isExist = cart.find(recipe => recipe.recipe_id == cook.recipe_id);
        if (!isExist) {
            setCart([...cart, cook])
        }
        else {
            toast("Already exist")
        }
        // console.log(isExist)


    };
    console.log(cart);



    const handlePreparing = (cooking) => {

        setCart(cart.filter(recipe => recipe.recipe_id !== cooking.recipe_id));
        setPreparing([...preparing, cooking])


    }
    // console.log(preparing);


    return (
        <div className="container mx-auto">

            <h1 className="text-2xl lg:text-4xl font-semibold text-center mb-4">Our Recipes</h1>
            <p className="text-center lg:text-base text-sm font-normal mb-10">Search and filter through our entire library of delicious recipes. Cherish your <br /> loved ones and feed them well.</p>
            <div className="main-container mb-9 lg:flex text-center lg:justify-around">

                <div className="card-container  grid lg:grid-cols-2 gap-6">

                    {
                        recipes.map(recipe => <SingleRecipe recipe={recipe}
                            handleCook={handleCook}></SingleRecipe>)

                    }
                </div>



                {/* side bar section */}
                <div className="sidebar-container border rounded-md h-2/4 lg:w-[514px]">
                    <h1 className="mt-2 text-2xl font-semibold">Want to cook: {cart.length} </h1>
                    <hr />

                    {/* table */}
                    <div className="overflow-x-auto">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {cart.map((item, index) => (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{item.recipe_name} </td>
                                        <td>{item.preparing_time} </td>
                                        <td>{item.calories} </td>

                                        <td><button onClick={() => handlePreparing(item)} className="btn bg-[#0BE58A] rounded-full ">Preparing</button></td>

                                    </tr>
                                ))}






                            </tbody>
                        </table>
                    </div>


                    <h1 className="mt-4 text-2xl font-semibold"> Currently cooking: {preparing.length}  </h1>
                    {/* table */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    preparing.map((item, index) => (
                                        <tr>

                                            <th>{index + 1}</th>
                                            <td>{item.recipe_name} </td>
                                            <td>{item.preparing_time} </td>
                                            <td>{item.calories} </td>
                                        </tr>
                                    ))
                                }





                            </tbody>
                        </table>
                    </div>
                </div>




            </div>


        </div>
    );
};

export default Recipes;