import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      items: 1
    });
  }

}
