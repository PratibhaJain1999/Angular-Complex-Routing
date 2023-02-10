import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restList:any
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  this.restList=this.route.snapshot.params['id'];
  }
  backToPage(){
    this.router.navigate([''])

  }
}
