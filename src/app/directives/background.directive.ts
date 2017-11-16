import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{

    @HostBinding('style.backgroundColor') background:string;

    @HostListener('mouseenter',['$event']) mouseEnter(event:Event){
        this.background = 'red';
    }

    @HostListener('mouseleave') mouseLeave(){
        this.background = 'transparent';
    }

    constructor(private element:ElementRef, private renderer:Renderer2) { }

    ngOnInit(){

    }

}
