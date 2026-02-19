import { Component, effect, inject } from '@angular/core';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';

import { ChuckService } from './chuck.service';

@Component({
  imports: [ProgressBar, ButtonModule, RippleModule],
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
})
export class ChuckComponent {
  private readonly messageService = inject(MessageService);
  chuck = inject(ChuckService);

  onError = effect(() => {
    if (this.chuck.joke.isError()) {
      this.messageService.add({
        detail: this.chuck.joke.error().name,
        severity: 'error',
        summary: 'Error fetching joke',
      });
    }
  });

  onSuccess = effect(() => {
    if (this.chuck.joke.data()?.id) {
      this.messageService.add({
        detail: 'Joke refetched',
        severity: 'success',
        summary: 'Success',
      });
    }
  });
}
