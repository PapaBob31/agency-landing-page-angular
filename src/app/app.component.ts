import { Component, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuIsShown = false
  menu: HTMLElement;
  menuBtn: HTMLButtonElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.addEventListener("click", this.toggleMenuVisibility)
    this.menu = this.document.querySelector("nav")!;
    this.menuBtn = this.document.querySelector("menu-btn")!
    this.menuIsShown = false;
  }

  toggleMenuVisibility(e: MouseEvent): void {
    if (this.menuIsShown) {
      this.menu.classList.remove("shown")
      this.menuIsShown = false;
    }else{
      if (e.target !== this.menuBtn) {
        return; // only menuBtn should open the menu when clicked
      }
      this.menu.classList.add("shown")
      this.menuIsShown = true;
    }
  }
}
