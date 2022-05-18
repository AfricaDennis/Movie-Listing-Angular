export class Producer {
    static id(id: any) {
        throw new Error('Method not implemented.');
    }

    constructor (
        public id: number,
        public name: string,
        public fundationDate: Date,
        public image: string
    ) {}
}