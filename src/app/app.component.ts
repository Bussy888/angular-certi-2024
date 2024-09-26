import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson{
  name:string
  lastname:string
  age?:number
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:number = 20;
  animals:string[]=['a','b','c','d','e']
 

  person: IPerson={
    name:'Juan',
    lastname:'Perez',
    age: 25
  } 
  students:number[]=[1,2,3,4,5]
  parents:number[]=[6,7,8,9,10]
  constructor(){
    const {name, age} = this.person
    console.log("desestructuracion: ", name, age)

    let both = [...this.students, ...this.parents]
    console.log("spreed operator: ", both)

    console.log('REST Operator: ', this.sum(2,4,6))
    
    console.log('REST Operator with reduce: ', this.sum2(2,4,6))

    // console.log('substract ', this.substract(8,4))
    // console.log('Map: ',this.animals.map((animal) => (animal + 'new')))
    // console.log('Foreach: ',this.animals.forEach((animal) => (animal + 'new')))
    // console.log('Find: ',this.animals.find((animal)=>animal==='c'))
    // console.log('Filter: ',this.animals.filter((animal)=>animal==='c'))
    // console.log('IndexOF: ',this.animals.indexOf('c'))
  }
  public sum(...persons:number[]){
    return persons[0]+persons[1]
  }
  public sum2(...persons:number[]){
    return persons.reduce((acumulador, valorActual)=> (acumulador+valorActual), 0)
  }
  public sum3(num1: number, num2:number): number{
    return num1+num2
  }
  public substract(num1: number, num2:number): number{
    return num1-num2
  }
  public getArray(): void {
    const persons: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i] % 2 === 0) {
            console.log('person =', persons[i]);
        }
    }
}
//const sumar=() => {
//   return 1+2;
// }
// const resta =()=>'hola'
  

}
