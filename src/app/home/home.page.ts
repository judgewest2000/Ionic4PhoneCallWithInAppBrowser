import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  phoneNumber = '1234567890';

  call() {
    window.open(`tel:${this.phoneNumber}`, '_system');
  }

}
