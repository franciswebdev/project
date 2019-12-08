const world = '🗺️';

export function hello(word: string = world): string {
  let name: string = 'All women are queens.';
  let anyRat: any[] = [100, 'No no'];

  enum Big {
    Booty,
    Thot = 'if it breathes',
    Beches = 'it\'s a thot'
  }

  console.log(Math.max(...[1,2,3]));

  return `${name} ${Big.Booty} ${anyRat[1]}, ${Big.Thot} ${Big.Beches} ${world}! `;
}