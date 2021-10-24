import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PriceService } from './price.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate, OnDestroy {
  canActive = false;
  priceSubscription = new Subscription();
  constructor(
    private priceService: PriceService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.priceSubscription = this.priceService.priceChanges$.subscribe(price => {
      this.canActive = price ? true : false;
    });
    if (!this.canActive) {
      this.router.navigate(['/shopping']);
    }
    return this.canActive;
  }

  ngOnDestroy() {
    this.priceSubscription.unsubscribe();
  }
}
