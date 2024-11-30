import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './recipe-details.css';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=7ca58aae15f64d22a16003be2bce994e`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch recipe details");
                }
                const responseJSON = await response.json();
                setRecipeDetails(responseJSON);
            } catch (error) {
                console.error(error);
            }
        };

        fetchResponse();
    }, [id]);

    if (!recipeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="recipe-details">
            <h1>{recipeDetails.title}</h1>
            <img src={recipeDetails.image} alt={recipeDetails.title} />
            <h2>Ingredients</h2>
            <ul>
                {recipeDetails.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <div
                dangerouslySetInnerHTML={{ __html: recipeDetails.instructions || "No instructions available." }}
            />
        </div>
    );
};

export default RecipeDetails;