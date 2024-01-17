import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  jobOffers: any[] = [
    {
      id: 1,
      title: 'Software Engineer',
      companyName: 'ABC Inc',
      location: 'City A',
    },
    {
      id: 2,
      title: 'Data Analyst',
      companyName: 'XYZ Ltd',
      location: 'City B',
    },
  ];
}
