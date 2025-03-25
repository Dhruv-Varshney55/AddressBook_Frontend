import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private addressService: AddressService) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.addressService.createAddress(this.addressForm.value).subscribe({
        next: (response) => {
          console.log('Address added successfully:', response);
          this.addressForm.reset();
        },
        error: (error) => {
          console.error('Error adding address:', error);
        }
      });
    }
  }

  resetForm() {
    this.addressForm.reset();
  }
}
