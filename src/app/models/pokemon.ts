export class Pokemon {
  name: string;
  sprites: { front_shiny: string; other: { dream_world: { front_default: string } } };
  types: { slot: number, type: { name: string, url: string } }[];
  height: number;
  weight: number;

  constructor(
    name: string,
    sprites: { front_shiny: string, other: { dream_world: { front_default: string } } },
    types: { slot: number, type: { name: string, url: string } }[],
    height: number,
    weight: number
  ) {
    this.name = name;
    this.sprites = sprites;
    this.types = types;
    this.height = height;
    this.weight = weight;
  }
}
