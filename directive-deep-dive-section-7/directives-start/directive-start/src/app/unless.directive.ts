import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      console.log('a')
      this.vcRef.createEmbeddedView(this.templateRef)
    }else {
      console.log('b')
      this.vcRef.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
