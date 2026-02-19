import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

import { injectQuery } from '@tanstack/angular-query-experimental';

import { environment } from '@/environments';

import { type ChuckNorrisJoke, type ChuckNorrisJokeDto, mapChuckNorrisJoke } from './chuck.model';

@Injectable({ providedIn: 'root' })
export class ChuckService {
  private readonly http = inject(HttpClient);

  joke = injectQuery(() => ({
    queryFn: this.loadJoke.bind(this),
    queryKey: ['joke'],
  }));

  protected loadJoke(): Promise<ChuckNorrisJoke> {
    return firstValueFrom(
      this.http
        .get<ChuckNorrisJokeDto>(`${environment.chuckApiBaseUrl}/jokes/random`)
        .pipe(map(mapChuckNorrisJoke))
    );
  }
}
