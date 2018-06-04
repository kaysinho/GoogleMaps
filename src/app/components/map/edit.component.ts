import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MapComponent } from './map.component';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myForm:FormGroup
  constructor(
    public fb:FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.myForm = fb.group({
      title: data.title,
      description: data.description
    })
  }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.myForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
