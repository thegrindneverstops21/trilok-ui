export interface Movie {
    id: string,
    title: string,
    genre: string[],
    description: string,
    backdropUrl: string,
    posterUrl: string,
    runtime: string,
    language: string,
    trailerUrl: string,
    year: number,
    rank?: number
}