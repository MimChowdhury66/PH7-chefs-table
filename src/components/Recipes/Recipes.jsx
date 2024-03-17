import { useEffect, useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    // console.log(recipes)
    return (
        <div className="container mx-auto">

            <h1 className="text-2xl lg:text-4xl font-semibold text-center mb-4">Our Recipes</h1>
            <p className="text-center lg:text-base text-sm font-normal mb-10">Search and filter through our entire library of delicious recipes. Cherish your <br /> loved ones and feed them well.</p>
            <div className="main-container mb-9 lg:flex text-center lg:justify-around">

                <div className="card-container  grid lg:grid-cols-2 gap-6">

                    {
                        recipes.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>)

                    }
                </div>



                {/* side bar section */}
                <div className="sidebar-container border h-2/4">
                    <h1 className="mt-2 text-2xl font-semibold">Want to cook: </h1>
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
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td><button className="btn bg-[#0BE58A] rounded-full ">Preparing</button></td>

                                </tr>
                               
                                
                            </tbody>
                        </table>
                    </div>

                   
                    <h1 className="mt-4 text-2xl font-semibold"> Currently cooking: </h1>
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
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>




            </div>


        </div>
    );
};

export default Recipes;