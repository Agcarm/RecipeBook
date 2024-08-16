import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    const user = new User(1, 'testuser', 'test@example.com', 'hashedpassword');
    expect(user).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    const user = new User(1, 'testuser', 'test@example.com','hashedpassword');
    expect(user.id).toBe(1);
    expect(user.username).toBe('testuser');
    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('hashedpassword');
  })
});
