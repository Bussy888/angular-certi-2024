
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges  {

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()


  password:string = ''

  constructor(){
    console.log("user card Constructor")
  }
  ngOnInit(){
    console.log("user card ngOnInit")
  }
  ngOnDestroy(){
    console.log("user card ngOnDestroy")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES:', changes)

    this.password = changes['name'].currentValue + ' ' + changes['email'].currentValue + ' PASSWORD'

  }

  public onSendData(){
    //console.log('onSendData in child')
    this.sendData.emit('Hi from child component')
  }

}
