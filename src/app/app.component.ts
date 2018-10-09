import { Component, AfterViewInit, ViewContainerRef, ViewChild } from '@angular/core';

import { RootViewContainerService } from './root-view-container.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tooltip', {read: ViewContainerRef}) private tooltipView: ViewContainerRef;
  constructor(private rootViewContainerService: RootViewContainerService) {}
  ngAfterViewInit() {
    this.rootViewContainerService.tooltipRef = this.tooltipView;
  }
}
