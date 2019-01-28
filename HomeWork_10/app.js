var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    /**
     * graduation
year:number     */
    University.prototype.graduation = function (year) {
        console.log("Graduation " + this.name + " " + year + " student");
    };
    return University;
}());
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);
