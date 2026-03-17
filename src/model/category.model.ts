export class Category {
    constructor(
        public id: string,
        public title: string,
        public description: string = "",
        public isActive: boolean = true,
    ){};
}