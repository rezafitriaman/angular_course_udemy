import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsedOrNot = true;
    showOrNot = false;
    @Output() featureSelected = new EventEmitter<string>();
    recipeActive = true;
    shoppingListActive = false;

    ngOnInit(): void {}

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
     
        if(feature === 'recipe') {
            this.recipeActive = true
            this.shoppingListActive = false;
        }else {
            this.recipeActive = false
            this.shoppingListActive = true;
        }
    }
}