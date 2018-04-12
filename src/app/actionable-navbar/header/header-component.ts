import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actionable-navbar-header',
  template: `
    <div class="text-right">
      <span class="badge badge-warning" style="font-size: 8px">0</span>
    </div>`,
})
export class ActionableNavbarHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
