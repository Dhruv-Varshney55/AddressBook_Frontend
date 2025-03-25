import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = 'http://localhost:8080/address'; // Base API URL

  constructor(private http: HttpClient) {}

  // Get all addresses
  getAllAddresses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`,{headers: new HttpHeaders({
      'Authorization':'Bearer : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAyLCJleHAiOjE3NDI5MTEyNzB9.iDZ1FMvw2_OqW7ajYIwJdZcBs_RP5kW28OvXMr0i4fk'
    })});
  }

  // Get a single address by ID
  getAddressById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${id}`,{headers: new HttpHeaders({
      'Authorization':'Bearer : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAyLCJleHAiOjE3NDI5MTEyNzB9.iDZ1FMvw2_OqW7ajYIwJdZcBs_RP5kW28OvXMr0i4fk'
    })});
  }

  // Create a new address
  createAddress(address: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, address,{headers: new HttpHeaders({
      'Authorization':'Bearer : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAyLCJleHAiOjE3NDI5MTEyNzB9.iDZ1FMvw2_OqW7ajYIwJdZcBs_RP5kW28OvXMr0i4fk'
    })});
  }

  // Update an address by ID
  updateAddress(id: number, updatedAddress: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/edit/${id}`, updatedAddress,{headers: new HttpHeaders({
      'Authorization':'Bearer : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAyLCJleHAiOjE3NDI5MTEyNzB9.iDZ1FMvw2_OqW7ajYIwJdZcBs_RP5kW28OvXMr0i4fk'
    })});
  }

  // Delete an address by ID
  deleteAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`,{headers: new HttpHeaders({
      'Authorization':'	Bearer : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAyLCJleHAiOjE3NDI5MTEyNzB9.iDZ1FMvw2_OqW7ajYIwJdZcBs_RP5kW28OvXMr0i4fk'
    })});
  }
}
