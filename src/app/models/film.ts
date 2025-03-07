export class Film {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    year: number;
    genre: string;
    isNew: boolean;
    trailerUrl?: string;

    constructor(id: number, title: string, description: string, image: string, rating: number, year: number, genre: string, isNew: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.year = year;
        this.genre = genre;
        this.isNew = isNew;
    }
}

export const FILMS: Film[] = [
    {
    id: 1,
    title: "Captain America",
    description: "Captain America is a superhero who fights for justice and freedom.",
    image: "captain_america.jfif",
    rating: 4.5,
    year: 2011,
    genre: "Action",
    isNew: true
},
{
    id: 2,
    title: "Back Action",
    description: "An elite team races against time to prevent an international conspiracy, facing betrayal and danger as they fight to save the world.",
    image: "back_action.jfif",
    rating: 4.5,
    year: 2011,
    genre: "Action",
    isNew: false
},
{
    id: 3,
    title: "the sand castle",
    description: "A group of friends embark on a journey to build a sandcastle, facing challenges and bonding over their shared passion.",
    image: "the_sand_castle.jfif",
    rating: 4.5,
    year: 2011,
    genre: "Action",
    isNew: false
}
]


