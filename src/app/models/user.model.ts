export class User {
    id: number;
    username: string;
    email: string;
    password: string 

    constructor(id: number, username: string, email: string, password: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    toString() {
        return "User [id=" + this.id + ", username=" + this.username + ", email=" + this.email + ", password=" + this.password + "]";
    }

    equals(user: User) {
        return this.id == user.id && this.username == user.username && this.email == user.email && this.password == user.password;
    }
}
