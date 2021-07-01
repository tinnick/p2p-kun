import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'shul-default-template',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultTemplateComponent implements AfterViewInit {
  @ViewChild(RouterOutlet, { static: true })
  private readonly routerOutlet: RouterOutlet = null!;

  @Input() protected animation?: AnimationMetadata | AnimationMetadata[];

  constructor(
    private readonly elementRef: ElementRef,
    private readonly animationBuilder: AnimationBuilder,
  ) {}

  public ngAfterViewInit(): void {
    if (!this.animation && this.routerOutlet?.activatedRouteData?.animation) {
      this.animation = this.routerOutlet.activatedRouteData.animation;
    }

    if (this.animation) {
      this.animationBuilder.build(this.animation).create(this.elementRef.nativeElement).play();
    }
  }
}
