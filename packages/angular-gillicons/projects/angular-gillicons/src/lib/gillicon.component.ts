import { Component, Input } from '@angular/core';

import { IconDefinition } from 'gillicons/icon-definition';

@Component({
    selector: 'gillicon',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" [style.width]="icon.width" [attr.name]="icon.name" [attr.viewBox]="icon.viewBox">
            <path fill="currentColor" fill-rule="evenodd" [attr.d]="icon.svgPath"/>
        </svg>
    `,
    styles: [`
    :host { display: inline-block; line-height: 0; }
    :host > svg { height: 1em; }
    `]
})
export class GilliconComponent {
    @Input() icon: IconDefinition;
}
