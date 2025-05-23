let playlist = ['Funk', 'Hip-Hop', 'Pop'];
console.log("Antes do unshift:", playlist);
console.table(playlist);

// Adicionando uma nova música no início da playlist

playlist.unshift('Rock');
console.log("Depois do unshift:", playlist);

console.table(playlist);