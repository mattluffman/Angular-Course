/* tslint:disable:no-unused-variable */

import {async, TestBed} from '@angular/core/testing';
import {UserComponent} from './user.component';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

describe('Component: User', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent]
        });
    });

    it('should create teh app', function () {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should use the user name from the service', function () {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        // example of how to get a service from the test bed
        const userService = fixture.debugElement.injector.get(UserService);
        fixture.detectChanges(); // needed to be updated because the state of the user changes after ngOnInit()
        expect(userService.user.name).toEqual(app.user.name);
    });

    it('should display the user name if the user is logged in', function () {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        app.isLoggedIn = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(app.user.name);
    });

    it('shouldn\'t display the user name if the user is not logged in', function () {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
        expect(compiled.querySelector('p').textContent).toContain('Please log in first');
    });

    it('shouldn\'t fetch data successfully if not called asynchronously', function () {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        // get service from test bed
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails')
            .and.returnValue(Promise.resolve('Fake Data'));
        fixture.detectChanges();
        expect(app.data).toBe(undefined);
    });

    it('should fetch data successfully if called asynchronously', async(() => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        // get service from test bed
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails')
            .and.returnValue(Promise.resolve('Fake Data'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(app.data).toBe('Fake Data');
        });
    }));

    /* tests that were downloaded with the final solution */
    /*it('should create the app', () => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should use the user name from the service', () => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        const userService = fixture.debugElement.injector.get(UserService);
        fixture.detectChanges();
        expect(userService.user.name).toEqual(app.user.name);
    });

    it('should display the user name if user is logged in', () => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        app.isLoggedIn = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(app.user.name);
    });

    it('shouldn\'t display the user name if user is not logged in', () => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
    });

    it('shouldn\'t fetch data successfully if not called asynchronously', () => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails')
            .and.returnValue(Promise.resolve('Data'));
        fixture.detectChanges();
        expect(app.data).toBe(undefined);
    });

    it('should fetch data successfully if called asynchronously', async(() => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails')
            .and.returnValue(Promise.resolve('Data'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(app.data).toBe('Data');
        });
    }));

    it('should fetch data successfully if called asynchronously', fakeAsync(() => {
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.debugElement.componentInstance;
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails')
            .and.returnValue(Promise.resolve('Data'));
        fixture.detectChanges();
        tick();
        expect(app.data).toBe('Data');
    }));*/
});
