import { Role } from "@enum/role";

export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public role: Role,
    ) {}
}