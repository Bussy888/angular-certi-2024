
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  constructor(){
    console.log("user card Constructor")
  }
  ngOnInit(){
    console.log("user card ngOnInit")
  }
  ngOnDestroy(){
    console.log("user card ngOnDestroy")
  }

  public onSendData(){
    //console.log('onSendData in child')
    this.sendData.emit('Hi from child component')
  }

}
