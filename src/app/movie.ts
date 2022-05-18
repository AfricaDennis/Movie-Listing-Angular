

export class Movie {
    static id(id: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
    public id: number,
    public name: string,
    public releaseDate: Date,
    public duration: number,
    public synopsis: string,
    public image: string,
    public actorIds: number,
    public producerIds: number
){}
}