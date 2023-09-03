import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import {dataFake}from '../../data/datafake'


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

   photoCover:string =""
   componentTitle:string =""
   componentDescription: string = ""
   private id:string | null = "0"


   constructor(
    private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")

    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
const result = dataFake.filter(article => article.id == id)[0]


  this.componentTitle = result.title
  this.componentDescription = result.description
  this.photoCover = result.photoCover

  }
}
