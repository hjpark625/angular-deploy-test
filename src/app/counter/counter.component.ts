import { environment } from '@/environments/environment'
import { Component } from '@angular/core'

@Component({
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0
  testValue = environment.testValue

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}
