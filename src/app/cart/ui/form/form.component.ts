import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export default class FormComponent {
  fb =inject(FormBuilder);
  
  form: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[,Validators.required,Validators.email]],
    city: ['',[Validators.required]],
    phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}[A-Z]{0}')]] 
  });
  onSubmit(): void{
    console.log('Form submitted', this.form.value);
  }
}
