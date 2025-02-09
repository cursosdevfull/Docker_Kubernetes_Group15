import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-component2',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css',
})
export class Component2Component {}
