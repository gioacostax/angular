export interface ChuckNorrisJoke {
  readonly categories: readonly string[];
  readonly createdAt: Date;
  readonly iconUrl: string;
  readonly id: string;
  readonly updatedAt: Date;
  readonly url: string;
  readonly value: string;
}

export interface ChuckNorrisJokeDto {
  readonly categories: string[];
  readonly created_at: string;
  readonly icon_url: string;
  readonly id: string;
  readonly updated_at: string;
  readonly url: string;
  readonly value: string;
}

export function mapChuckNorrisJoke(dto: ChuckNorrisJokeDto): ChuckNorrisJoke {
  return {
    categories: dto.categories,
    createdAt: new Date(dto.created_at),
    iconUrl: dto.icon_url,
    id: dto.id,
    updatedAt: new Date(dto.updated_at),
    url: dto.url,
    value: dto.value,
  };
}
