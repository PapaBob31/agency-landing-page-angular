import { Component } from '@angular/core';
import { IntroComponent } from "../intro/intro.component"
import { FeaturesComponent } from "../features/features.component"
import { TestimonialsComponent } from "../testimonials/testimonials.component"

@Component({
  selector: 'app-main-content',
  imports: [IntroComponent, FeaturesComponent, TestimonialsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
