import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: string[] = [];

  constructor(public navCtrl: NavController) {
    for(let i=0; i<100; ++i) {
      this.items.push(`Item: ${i}`);
    }
  }

  itemSelected(item: string) {
    alert(item);
  }

}
