import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-component3',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.css',
})
export class Component3Component {}
