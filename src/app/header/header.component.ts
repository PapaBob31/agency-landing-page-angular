import { Component, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsShown: boolean = false; // controls the visisbility of the menu on mobile screens

  constructor() {
    const elementRef = inject(ElementRef);
    elementRef.nativeElement.addEventListener("click", ()=>{this.menuIsShown = false})
  }

  toggleMenuVisibility(event: MouseEvent): void {
    event.stopPropagation()
    this.menuIsShown = !this.menuIsShown;
  }
}
