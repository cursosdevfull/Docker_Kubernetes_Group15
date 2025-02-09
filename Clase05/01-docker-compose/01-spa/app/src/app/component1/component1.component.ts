import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { endpoint } from '../environment';

@Component({
  selector: 'app-component1',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css',
})
export class Component1Component {
  http = inject(HttpClient);
  users = signal<any>([]);

  ngAfterContentInit() {
    this.http.get(endpoint + '/list').subscribe({
      next: (data: any) => {
        this.users.set(data);
      },
    });
  }
}
