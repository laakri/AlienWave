import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  datas: any[] = [];

  constructor(private MoviesService: MoviesService) {}

  ngOnInit() {
    this.MoviesService.getMovies().subscribe((data) => {
      console.log(data);
      this.datas = data;
    });
  }
}
