import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { AnimateDirective } from './animate.directive';
import { RootViewContainerService } from './root-view-container.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CardComponent,
    TooltipComponent,
    TooltipDirective,
    AnimateDirective
  ],
  providers: [
    RootViewContainerService
  ],
  entryComponents: [
    TooltipComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
