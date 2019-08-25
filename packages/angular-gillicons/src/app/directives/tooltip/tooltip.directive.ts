import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Placement } from 'popper.js';
import Tooltip from 'tooltip.js';

@Directive({
    selector: '[appTooltip]'
})
export class TooltipDirective {

    private instance: Tooltip;
    private timer: any;

    @Input() public appTooltip: string;
    @Input() public placement: Placement = 'bottom';
    @Input() public delay: number | {show: number, hide: number} = 0;

    constructor(private readonly el: ElementRef) {}

    private createTooltip() {
        this.instance = new Tooltip(this.el.nativeElement, {
            placement: this.placement,
            title: this.appTooltip
        });
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.timer = setTimeout(() => {
            this.createTooltip();
            this.instance.show();
        }, this.delay['show'] || this.delay);
    }

    @HostListener('mouseleave') onMouseLeave() {
        clearTimeout(this.timer);
        if (!this.instance) {
            return;
        }
        this.timer = setTimeout(() => {
            this.instance.dispose();
        }, this.delay['hide'] || this.delay);
    }
}
