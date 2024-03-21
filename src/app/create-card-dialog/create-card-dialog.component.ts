import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-card-dialog',
  templateUrl: './create-card-dialog.component.html',
  styleUrls: ['./create-card-dialog.component.css']
})
export class CreateCardDialogComponent {
  formData: any = {
    is_foil: false,
    is_full_art: false
  };

  constructor(
    public dialogRef: MatDialogRef<CreateCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}



  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulardaten:', this.formData);
    }
  }

  cancel() {
    this.formData = {};
    this.dialogRef.close();
  }
}
