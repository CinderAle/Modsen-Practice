export class Sight {
    id: string;
    title: string;
    photo: string;
    types: string[];
    constructor(
        id: string = "",
        title: string = "",
        photo: string = "",
        types: string[] = [],
    ) {
        this.id = id;
        this.title = title;
        this.photo = photo;
        this.types = types;
    }
}
