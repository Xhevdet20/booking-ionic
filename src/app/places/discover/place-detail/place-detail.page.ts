import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // Using the normal Angular router
    // this.router.navigateByUrl('places/tabs/discover');

    // Using the ionic Navigator which is in reality simply the angular router plus some metadata 
    this.navCtrl.navigateBack(['/places/tabs/discover']);

    // This doesn't work because if u reload the pages stack is empty
    // this.navCtrl.pop();
  }

}
