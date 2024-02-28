export class Pokemon {
  name: string;
  sprites: {
    front_shiny: string;
  }
  height: number;
  weight: number;

  constructor(name: string, sprites: { front_shiny: string; }, height: number, weight: number) {
    this.name = name;
    this.sprites = sprites;
    this.height = height;
    this.weight = weight;
  }
}
