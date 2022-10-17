import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componente-chofer',
  templateUrl: './componente-chofer.component.html',
  styleUrls: ['./componente-chofer.component.scss'],
})
export class ComponenteChoferComponent implements OnInit {
  data:any

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.chofer;
      }
    })
   }

  ngOnInit() {

  };
  publicar(){};

}
