import type { Movie } from "../types/Movie";

export const heroMovie: Movie = {
  id: "the-choosen",
  title: "",
  genre: ["Drama", "Family", "Action", "Adventure"],
  description:
    "The life of Christ through the eyes of those who encountered him",
  backdropUrl:
    "https://media.themoviedb.org/t/p/w500_and_h282_face/3siv3RaQrdr2tQiv9jHq71sLlzo.jpg",
  posterUrl:
    "https://media.themoviedb.org/t/p/w220_and_h330_face/2pnZWHg9E34LLwLBLYUPLdZwer8.jpg",
  runtime: "5 Seasons",
  trailerUrl: "https://youtu.be/K1-FoFj8Jbo?si=4n_W3EsfLzrQ4K5W",
  year: 2019,
};

export const latestRelease: Movie[] = [
  {
    id: "obsession",
    title: "",
    genre: ["Horror", "Thriller"],
    description:
      "After breaking the mysterious 'One Wish Willow' to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
    backdropUrl: "",
    posterUrl:
      "https://image.tmdb.org/t/p/original/doQPOCVlIWZBRC2ZVsSXHi0luL8.jpg",
    runtime: "1h 48m",
    trailerUrl: "",
    year: 2026,
  },
  {
    id: "moana",
    title: "",
    genre: ["Family", "Fantasy", "Comedy", "Adventure"],
    description:
      "Teenage Moana answers the Ocean's call and, for the first time, voyages beyond the reef of her island of Motunui with infamous demigod Maui on an unforgettable journey to restore prosperity to her people.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/gaet1xQ2nxrG0V1Ep9T20ZMNEIC.jpg",
    runtime: "1h 55m",
    trailerUrl: "",
    year: 2026,
  },
  {
    id: "the-westies",
    title: "",
    genre: ["Drama", "Crime"],
    description:
      "As the Javits Center construction project ignites a battle for profit in early 1980s Hell's Kitchen, a generational rift threatens the uneasy peace between violent Irish gang the Westies and the Mafia, and draws FBI heat.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/6nNxw6SsbEtSpktVEGdoYDqPH7C.jpg",
    runtime: "1 Season",
    trailerUrl: "",
    year: 2026,
  },
  {
    id: "the-odyssey",
    title: "",
    genre: ["Adventure", "Action", "Fantasy"],
    description:
      "Odysseus, the legendary King of Ithaca, embarks on a long and perilous journey home following the Trojan War. Throughout his voyage, he is forced to confront the whims of gods, mythological monsters, and trials that stretch both his cunning and his humanity to the breaking point.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
    runtime: "2h 53m",
    trailerUrl: "",
    year: 2026,
  },
];

export const topTrending: Movie[] = [
  {
    id: "house-dragon", //84%
    title: "",
    genre: ["Sci-fi", "Fantasy", "Drama", "Action", "Adventure"],
    description:
      "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg",
    runtime: "3 Seasons",
    trailerUrl: "",
    year: 2022,
    rank: 3,
  },
  {
    id: "toy-story", //74%
    title: "",
    genre: ["Animation", "Family", "Comedy", "Adventure"],
    description:
      "When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/sfQtVlIHljToOwYjhe21KPGzZWK.jpg",
    runtime: "1h 42m",
    trailerUrl: "",
    year: 2026,
    rank: 4,
  },
  {
    id: "swapped", //89%
    title: "",
    genre: ["Adventure", "Animation", "Family", "Fantasy"],
    description:
      "A small woodland creature and a majestic bird, two natural sworn enemies of the Valley, magically trade places and set off on an adventure of a lifetime to switch back. Their journey soon uncovers a greater threat—one that could endanger not only their species, but the entire valley they call home.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/tHhxWxge06goXU6ZQH1hj7vK8Hd.jpg",
    runtime: "1h 42m",
    trailerUrl: "",
    year: 2026,
    rank: 2,
  },
  {
    id: "redemption",
    title: "",
    genre: ["Crime", "Drama"],
    description:
      "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    backdropUrl: "",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    runtime: "2h 22m",
    trailerUrl: "",
    year: 1994,
    rank: 1,
  },
];

export const movieGenre = [
  {id: "rom", label: "Romance", color: "#E93131"},
  {id: "com", label: "Comedy", color: "#02B2A8"},
  {id: "thril", label: "Thriller", color: "#9127FD"},
  {id: "adv", label: "Adventure", color: "#F29D1C"}
];
