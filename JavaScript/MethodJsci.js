const person = {
    first: 'John',
    last: 'Herjavec',
    fullName(){
        return `${this.first} ${this.last}`
    }
}
person.fullName()
person.last = 'plant';
person.fullName()