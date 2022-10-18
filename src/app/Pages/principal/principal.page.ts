import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  userp: any;
  

  constructor(private router: Router, private activeroute: ActivatedRoute) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userp = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.userp)
      }
    })
    console.log('nombre de usuario: '+this.userp)
    let navigationExtras: NavigationExtras = {
      state: {
        userp: this.userp
        }
      };
    this.router.navigate(['principal/uno'], navigationExtras);
   }
  
  segmentChanged($event){
    console.log($event);
    let direccion=$event.detail.value;
    console.log(direccion);
    this.router.navigate(['principal/'+direccion]);
  }

  ngOnInit() {
  }

}
