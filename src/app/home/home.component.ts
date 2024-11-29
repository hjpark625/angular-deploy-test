import { Component } from '@angular/core'
import { environment } from '@/environments/environment'

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  testVal = environment.testValue
}
