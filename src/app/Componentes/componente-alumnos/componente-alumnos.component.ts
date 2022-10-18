import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componente-alumnos',
  templateUrl: './componente-alumnos.component.html',
  styleUrls: ['./componente-alumnos.component.scss'],
})
export class ComponenteAlumnosComponent implements OnInit {
  userp: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userp = this.router.getCurrentNavigation().extras.state.userp;
      }
    })
  }

  ngOnInit() {}

}
