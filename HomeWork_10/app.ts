class University {
    constructor(public name: string, public dept: string) { }
    /**
     * graduation
year:number     */
    public graduation(year: number) {
        console.log(`Graduation ${this.name} ${year} student`);
    }
}
const mum = new University("MUM", "Computer Science");
mum.graduation(2019);