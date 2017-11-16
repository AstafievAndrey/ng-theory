import {Directive, HostBinding, ElementRef, Renderer2, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{

    @Input('appBackground') hoverColor:string = 'green';
    @Input() defaultColor:string = 'transparent';

    @HostBinding('style.backgroundColor') background:string;

    @HostListener('mouseenter') mouseEnter(){
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave(){
        this.background = this.defaultColor;
    }

    ngOnInit(){
        this.background = this.defaultColor;
    }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

}
