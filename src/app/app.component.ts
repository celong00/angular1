import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Alex R. Tan';
  item = [{
    nama: 'Kelengkeng',
    harga : 10000
  },{
    nama:'Jeruk',
    harga:5000
  }];
  
  itemArr=['aa','bb','cc'];

  show:boolean=false;
  showtrue: boolean=true;
  showfalse: boolean=false;


  user="";

pesan='';
klikButton(){
  this.pesan='Tombol ditekan';
}


}   
