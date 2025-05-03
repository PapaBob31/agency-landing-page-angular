import { Component, inject, ElementRef } from '@angular/core';
import { HeaderComponent } from "./header/header.component"
import { MainContentComponent } from "./main-content/main-content.component"
import { IntroComponent } from "./intro/intro.component"
import { FooterComponent } from "./footer/footer.component"
import { OutroImagesComponent } from "./outro-images/outro-images.component"

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainContentComponent, OutroImagesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
}