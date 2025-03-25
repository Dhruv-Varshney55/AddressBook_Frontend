import { Component, OnInit, signal } from '@angular/core';
import { AddressService } from '../services/address.service';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  addresses = signal<any[]>([]); // Store fetched addresses

  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    this.fetchAllAddresses();
  }

  // Fetch all addresses from the backend
  fetchAllAddresses(): void {
    this.addressService.getAllAddresses().subscribe({
      next: (data) => this.addresses.set(data),
      error: (error) => console.error('Error fetching addresses:', error)
    });
  }

  // Add a new address
  addAddress(newAddress: any): void {
    this.addressService.createAddress(newAddress).subscribe({
      next: (response) => {
        console.log('Address added:', response);
        this.addresses.update((addresses) => [...addresses, response]);
      },
      error: (error) => console.error('Error adding address:', error)
    });
  }

  // Edit an address
  editAddress(id: number, updatedAddress: any): void {
    this.addressService.updateAddress(id, updatedAddress).subscribe({
      next: () => {
        console.log('Address updated');
        this.addresses.update((addresses) =>
          addresses.map((addr) => (addr.id === id ? updatedAddress : addr))
        );
      },
      error: (error) => console.error('Error updating address:', error)
    });
  }

  // Delete an address
  deleteAddress(id: number): void {
    this.addressService.deleteAddress(id).subscribe({
      next: () => {
        console.log('Address deleted');
        this.addresses.update((addresses) =>
          addresses.filter((addr) => addr.id !== id)
        );
      },
      error: (error) => console.error('Error deleting address:', error)
    });
  }
}
