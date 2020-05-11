import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Project} from '../project.model';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {

  manageProjectsForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createForm();
    const project: Project = this.mockProject();
    this.updateForm(project);
  }

  public saveProject(): void {
    console.table(this.manageProjectsForm.getRawValue());
  }

  private createForm() {
    this.manageProjectsForm = new FormGroup({
      id: new FormControl(''),
      projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      projectAlias: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
  }

  private updateForm(project: Project): void {
    this.manageProjectsForm.patchValue({
      projectName: project.projectName,
      projectAlias: project.projectAlias,
      companyName: project.companyName,
      companyAddress: project.companyAddress,
      city: project.city,
      state: project.state,
      zip: project.zip
    });
  }

  private mockProject(): Project {
    return new Project(1, 'Project X', 'X', 'ULHT', 'Campo Grande 25', 'Lisboa', 'Lisboa', '1324-123');
  }
}
