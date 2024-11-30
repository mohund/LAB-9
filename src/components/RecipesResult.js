import { Link } from "react-router-dom";

const RecipesResult = ({ recipes }) => {
    return (
        <div className="recipes-wrapper">
            {recipes.map((recipe) => (
                <div className="recipe">
                    <Link to={`/recipe-details/${recipe.id}`}>
                        <h2>{recipe.title}</h2>
                    </Link>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}
        </div>
    );
}

export default RecipesResult;