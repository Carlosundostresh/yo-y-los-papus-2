import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-papu',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, FormsModule],
  templateUrl: './proyecto-papu.component.html',
  styleUrl: './proyecto-papu.component.scss'
})
export class ProyectoPapuComponent {
  users: any = []
  user: any = {
    name: "",
    description: "",
    position: {
      lat: "",
      ing: ""
    }
  }

  ngOnInit() {

  }

  submit() {
    this.users.push(this.user)
  }

  position(event: any) {
    this.user.position = {
      lat: event.latLng.lat(),
      ing: event.latLng.ing(),
    }
  }

}
