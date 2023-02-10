import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  restaurantList=[{
    name: 'Pizzalicious',
    id: '1'
     
  },
  {
    name : 'BurgerKing',
    id: '2'
  },
  {
    name : 'French Fries',
    id: '3'
  }
     

  ]
  selectRestaurant(id:any){
 this.router.navigate(['/rest-details/'+ id])
  }

}
