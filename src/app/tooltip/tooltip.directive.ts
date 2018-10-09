import { Directive, Input, HostListener, ComponentFactoryResolver, ComponentRef, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { RootViewContainerService } from '../root-view-container.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {
  message: string;
  private component: ComponentRef<TooltipComponent>;
  private factory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
  @Input('appTooltip') set setMessage(message) {
    this.message = message;
  }
  @HostListener('mouseenter') onMouseEnter() {
    if (!this.component && this.message) {
      this.component = this.rootViewContainerService.tooltipRef.createComponent(this.factory);
      this.component.instance.message = this.message;
      const rectHost = this.elementRef.nativeElement.getBoundingClientRect();
      const rectModal = this.component.location.nativeElement.getBoundingClientRect();
      const topPosition = (rectHost.top + rectHost.height);
      const leftPosition = rectHost.left + (rectHost.width / 2) - (rectModal.width / 2) - 4;
      this.renderer.setStyle(this.component.location.nativeElement, 'top', topPosition + 'px');
      this.renderer.setStyle(this.component.location.nativeElement, 'left', leftPosition + 'px');
      this.component.changeDetectorRef.detectChanges();
    }
  }
  @HostListener('mouseleave')
  @HostListener('click')
  onMouseLeave() {
    this.rootViewContainerService.tooltipRef.clear();
    this.component = null;
  }
  constructor(
    private rootViewContainerService: RootViewContainerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnDestroy() {
    this.rootViewContainerService.tooltipRef.clear();
    this.component = null;
  }
}
