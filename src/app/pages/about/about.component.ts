import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }

  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
