import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyPersonalProjectsComponent} from './my-personal-projects/my-personal-projects.component';
import {ManageProjectsComponent} from './manage-projects/manage-projects.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'mypersonalprojects', component: MyPersonalProjectsComponent},
    {path: 'manageprojects', component: ManageProjectsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule {
}
