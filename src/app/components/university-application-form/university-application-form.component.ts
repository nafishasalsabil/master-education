import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-university-application-form',
  templateUrl: './university-application-form.component.html',
  styleUrls: ['./university-application-form.component.scss']
})
export class UniversityApplicationFormComponent implements OnInit{
  applicationForm:FormGroup;
  constructor(private fb: FormBuilder){}
  get degreeFromControl(): FormArray {
    return this.applicationForm.get('degreeList') as FormArray;
  }
  get recommendationFormControl(): FormArray {
    return this.applicationForm.get('recommendationList') as FormArray;
  }

  ngOnInit(): void {
    this.initApplyForm();
  }

  initApplyForm(data?:any) {
    this.applicationForm = this.fb.group({
      name: [data?.name, Validators.required],
      photo: [data?.photo, Validators.required],
      contact: [data?.contact, Validators.required],
      dob: [data?.dob, Validators.required],
      nationality: [data?.nationality, Validators.required],
      gender: [data ? data.gender : '', Validators.required],
      address: [data?.address, Validators.required],
      email: [data?.email, [Validators.required,Validators.email]],
      program: [data ? data.program : '', Validators.required],
      session: [data ? data.session : '', Validators.required],
      degreeList: this.fb.array([]),
      recommendationList: this.fb.array([]),
    });

    if(data?.degreeList?.length>0){
      data.degreeList.forEach((item:any) => {
        const degreeFormGroup = this.fb.group({
          degree: ['', Validators.required],
          institution: ['', Validators.required],
          passingYear: ['', Validators.required],
          cgpa: ['', Validators.required],
          certificate: [data?.certificate, Validators.required],
        });
        this.degreeFromControl.push(degreeFormGroup);
      });
    }
    else{
      this.onAddUser();
    }
    if(data?.recommendationList?.length>0){
      data.recommendationList.forEach((item:any) => {
        const recFormGroup = this.fb.group({
          profName: ['', Validators.required],
          designation: ['', Validators.required],
          email: ['', Validators.required],
        });
        this.recommendationFormControl.push(recFormGroup);
      });
    }
    else{
      this.onAddRec();
    }
}

onAddUser() {
  this.degreeFromControl.push(
    this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      passingYear: ['', Validators.required],
      cgpa: ['', Validators.required],
      certificate: ['', Validators.required],
    })
  );
  console.log('added');
}
removeUser(index: any) {
  this.degreeFromControl.removeAt(index);
}

onAddRec() {
  this.recommendationFormControl.push(
    this.fb.group({
      profName: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', Validators.required],
    })
  );
  console.log('added');
}
removeRec(index: any) {
  this.recommendationFormControl.removeAt(index);
}

displaySelectedImage(event: Event, elementId: any){
  const fileInput = event.target as HTMLInputElement;
  const selectedImage = document.getElementById(elementId) as HTMLImageElement;

  if (fileInput.files && fileInput.files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
              selectedImage.src = e.target.result as string;
          }
      };

      reader.readAsDataURL(fileInput.files[0]);
  }
}

}
