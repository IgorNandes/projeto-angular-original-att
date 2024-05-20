import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[diretivaDois]'
})
export class DiretivadoisDirective {

  @HostListener('mouseenter') onMouseOver(){
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color','yellow');
    //this.backgroundColor = 'yellow;'  
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color','white');
    //this.backgroundColor = 'white;'  
  }

  //@HostBinding('style.background') backgroundColor: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

}
