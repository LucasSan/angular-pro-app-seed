import { Component, OnInit, OnDestroy } from '@angular/core';
import { MealsService, Meal } from '../../../shared/service/meals/meals.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from 'store';

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    templateUrl: 'meals.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {
    
    meals$: Observable<Meal[]>;
    subscription: Subscription;
    
    constructor(private store: Store,
        private mealsService: MealsService) {
    }

    ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
