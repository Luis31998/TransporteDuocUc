import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, 
    private router: Router, ) { }

  ngOnInit() {
    console.log('nop')
  }
  backl(){
    this.router.navigate(['/']);
  }

}
