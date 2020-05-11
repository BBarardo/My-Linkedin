import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageProjectsComponent} from './manage-projects/manage-projects.component';
import {MyPersonalProjectsComponent} from './my-personal-projects/my-personal-projects.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ManageProjectsComponent, MyPersonalProjectsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ]
})
export class ProjectModule {
}
