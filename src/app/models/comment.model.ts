import { Recipe } from "./recipe.model";
import { User } from "./user.model";

export class Comment {
    id: number;
    recipe: Recipe;
    user: User;
    text: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number,
        recipe: Recipe,
        user: User,
        text: string,
        rating: number
    ){
        this.id = id;
        this.recipe = recipe;
        this.user = user;
        this.text = text;
        this.rating = rating;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
