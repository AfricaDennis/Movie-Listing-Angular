export class Actor {
    static id(id: any) {
        throw new Error('Method not implemented. ');
    }
    constructor(
        public id: number,
        public name: string,
        public birthDate: string,
        public image: string
    ){}
}