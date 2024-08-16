import { Comment } from "./comment.model";
import { Ingredient } from "./ingredient.model";
import { User } from "./user.model";

export class Recipe {
    id: number;
    name: string;
    description?: string;
    imagePath?: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    cookTime: number; // in minutes
    servings: number;
    ingredients?: Ingredient[]; // Many-to-Many relationship with quantities
    comments?: Comment[];
    createdAt: Date;
    updatedAt: Date;
    creator: User;
  
    constructor(
      id: number,
      name: string,
      difficulty: 'Easy' | 'Medium' | 'Hard',
      cookTime: number,
      servings: number,
      creator: User,
      description?: string,
      imagePath?: string,
      ingredients?: Ingredient[],
      comments?: Comment[],
    ) {
      this.id = id;
      this.name = name;
      this.difficulty = difficulty;
      this.cookTime = cookTime;
      this.servings = servings;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.description = description;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
      this.comments = comments;
      this.creator = creator;
    }

    getRating(){
      let sum = 0;
      if (this.comments) {
        for (let index = 0; index < this.comments.length; index++) {
          const element = this.comments[index];
          sum = sum + element.rating;
        }
        return sum/this.comments.length;
      }
      return -1;
    }
}
