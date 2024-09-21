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
  constructor(){
    console.log('substract ', this.substract(8,4))
    console.log('Map: ',this.animals.map((animal) => (animal + 'new')))
    console.log('Foreach: ',this.animals.forEach((animal) => (animal + 'new')))
    console.log('Find: ',this.animals.find((animal)=>animal==='c'))
    console.log('Filter: ',this.animals.filter((animal)=>animal==='c'))
    console.log('IndexOF: ',this.animals.indexOf('c'))
  }

  person: IPerson={
    name:'a',
    lastname:'b'
  }

  public sum(num1: number, num2:number): number{
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
