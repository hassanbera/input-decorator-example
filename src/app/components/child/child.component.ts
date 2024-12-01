import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // Parent bileşenden gelen verileri tutan değişkenler
  @Input() name:string = ''; // Parent'tan gelen 'name' verisi
  @Input() email:string = ''; // Parent'tan gelen 'email' verisi
}
