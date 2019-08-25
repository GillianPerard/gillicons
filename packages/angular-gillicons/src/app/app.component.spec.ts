import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Input } from '@angular/core';

class GilliconComponent {
    @Input() icon: any;
}

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                GilliconComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
