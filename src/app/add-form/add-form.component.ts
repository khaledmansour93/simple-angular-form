import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'; // helper API to build complex forms with less code

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  creationForm = this.formBuilder.group({ // Adding form controls to be bound to template form controls
    sample1: [''],  // First argument to form control is the initial value
    sample2: [''],
    sample3: [''],
    sample4: [''],
    sample5: [''],
    sample6: [''],
    sample7: [''],
    sample8: [''],
    sample9: [''],
    sample10: ['']
  });

  onSubmit(): void {
    console.warn('Your data has been submitted', this.creationForm.value);
    this.resetForm();
  }

  resetForm() {
    this.creationForm.reset();  // Reset form controls to their initial values if set. Otherwise, null
  }
}
