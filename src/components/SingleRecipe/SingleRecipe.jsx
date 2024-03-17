import { MdOutlineAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";



const SingleRecipe = ({ recipe }) => {
    // console.log(recipe);
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = recipe;
    return (
        <div>


            <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
                <figure><img className="rounded-2xl mt-6" src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-start">{short_description} </p>
                    <hr />
                    <div>
                        <h3 className="text-start">Ingredients: {ingredients.length} </h3>

                        <ul className="text-start text-[#878787] list-disc	ml-6">
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)

                            }
                        </ul>

                    </div>
                    <hr />
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1"><MdOutlineAccessTime />
                            <p>{preparing_time} </p></div>
                        <div className="flex items-center gap-1"><FaFire />
                            <p>{calories} </p></div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default SingleRecipe;