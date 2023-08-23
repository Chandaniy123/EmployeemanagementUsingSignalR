import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeCarousel();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  initializeCarousel() {
    $('.product-carousel').owlCarousel({
      autoplay: false,
      smartSpeed: 1500,
      margin: 30,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
  }

}
