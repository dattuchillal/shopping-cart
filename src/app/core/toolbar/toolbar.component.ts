import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent  } from '@angular/router';
import { Subscription } from 'rxjs';
import { PriceService } from 'src/app/core/services/price.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() payment = new EventEmitter<void>();
  enablePay = false;
  event$ = new Subscription();
  price = 0;
  constructor(
    private priceService: PriceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.priceService.priceChanges$.subscribe(price => this.price = price);
    this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                console.log(event.url);
                if(event.url === "/payment") {
                  this.enablePay = true;
                } else {
                  this.enablePay = false;
                }
              }
            });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.event$.unsubscribe();
  }
}
