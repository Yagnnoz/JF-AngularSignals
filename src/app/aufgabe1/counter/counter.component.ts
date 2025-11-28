import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {

  count = signal<number>(0);
  countMultiplied = computed(() => this.count() * 10);

  addOne(): void {
    this.count.update(num => num + 1);
  }

  subtractOne(): void {
    this.count.update(num => num - 1);
  }

  reset(): void {
    this.count.set(0);
  }

  logCountEffect = effect(() => {
    console.log(this.count());
  });
}
