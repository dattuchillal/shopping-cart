import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  isScreenSmall = false;

  constructor(
    private breakpointerObserver: BreakpointObserver,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.breakpointerObserver
      .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall= state.matches;
      })
  }

  payment() {
    this.router.navigate(["/payment"]);
  }
}
