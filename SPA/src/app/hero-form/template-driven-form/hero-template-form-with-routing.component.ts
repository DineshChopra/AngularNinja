import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { HeroFormService } from '../hero-form.service';
import { Hero } from '../model/hero';
import { hobbies } from '../model/hero';

@Component({
  selector: 'app-hero-template-form-with-routing',
  templateUrl: './hero-template-form-with-routing.component.html',
  styleUrls: ['./hero-template-form-with-routing.component.css']
})
export class HeroTemplateFormWithRoutingComponent implements OnInit {
  private heroList: Hero[];
  model : Hero = new Hero();
  hobbies = hobbies;
  constructor(private route: ActivatedRoute,
              private router : Router,
    private service: HeroFormService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
      .subscribe((response: any) => {
        this.model = response.json().data;
      });
  }
  onSubmit() {
    this.service.saveHero(this.model)
      .subscribe(
      (response: any) => {
        this.router.navigate(['forms/hero-template-with-routing']);
      }
      )
  }


}
