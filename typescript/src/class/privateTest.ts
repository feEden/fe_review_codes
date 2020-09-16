class Feman {
    private name: string;
    protected age: number;
    public sex: string;

    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print() {
        console.log(this.name, this.age, this.sex);
    }
}