import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, AfterViewInit {
  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @Output() ingredientsAdd = new EventEmitter<Ingredient>();
  @Output() ingredientsDelete = new EventEmitter<void>();
  
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  onAdd() {
    this.ingredientsAdd.emit(new Ingredient(this.inputNameRef.nativeElement.value, this.inputAmountRef.nativeElement.value));
  }

  onDelete() {
    this.ingredientsDelete.emit();
  }

  onClear() {
    this.inputNameRef.nativeElement.value = '';
    this.inputAmountRef.nativeElement.value = '';
  }
}