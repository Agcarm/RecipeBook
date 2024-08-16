import { Recipe } from './recipe.model';
import { User } from './user.model';

describe('Recipe', () => {
  it('should create an instance', () => {
    const recipe = new Recipe(1, 'Spaghetti', 'Medium', 30, 4, new User(1, 'testuser', 'testuser@gmail.com', '1234'),'Delicious spaghetti');
    expect(recipe).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    const recipe = new Recipe(
      1,
      'Spaghetti',
      'Medium',
      30,
      4,
      new User(1, 'testuser', 'testuser@gmail.com', '1234'),
      'Delicious spaghetti'
    );
    expect(recipe.id).toBe(1);
    expect(recipe.name).toBe('Spaghetti');
    expect(recipe.difficulty).toBe('Medium');
    expect(recipe.cookTime).toBe(30);
    expect(recipe.servings).toBe(4);
    expect(recipe.creator.id).toBe(1);
    expect(recipe.creator.username).toBe('testuser');
    expect(recipe.creator.email).toBe('testuser@gmail.com');
    expect(recipe.creator.password).toBe('1234');
    expect(recipe.description).toBe('Delicious spaghetti');
  });
});
