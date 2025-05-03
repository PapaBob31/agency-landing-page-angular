import { Component, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
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