import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class RootViewContainerService {
  tooltipRef: ViewContainerRef;
  modalRef: ViewContainerRef;
}
