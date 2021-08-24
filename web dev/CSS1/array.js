
console.log('Following is an array of animes')
const anime = ['Death Note', 'tokyo ghoul', 'demon slayer'];
console.log(anime)
console.log('Is anime an array?')
console.log(Array.isArray(anime));
anime[3] = 'Naruto';
anime.push('AOT');
anime.unshift('BLEACH');
console.log('Adding 3 anime to array.')
console.log(anime)
anime.pop();
console.log('Array after removing AOT')
console.log(anime)
console.log('Searching for AOT which returns -1 as it has been deleted')
console.log(game.indexOf('AOT'));
console.log(game);