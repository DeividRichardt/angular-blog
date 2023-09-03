import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentComponent} from './pages/component/component.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{

  path:'',
  component: HomeComponent
},
{
  path: 'component/:id',
  component:ComponentComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
