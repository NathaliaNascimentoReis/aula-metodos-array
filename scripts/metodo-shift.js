let playlist = ['Funk', 'Hip-Hop', 'Pop'];

console.log(`Antes do shift: ${playlist}`);

// Removendo a primeira música da playlist
let musicaRemovida = playlist.shift();

console.log(`depois do shift: ${playlist}`);
console.table(playlist);
console.log(musicaRemovida);