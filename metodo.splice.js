let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];
console.log("antes do splice:");
console.table(playlist);

// removendo 2 elementos a partir do índice 2

let elementosRemovidos = playlist.splice(2, 2);

console.log("Depois do splice:");
console.table(playlist);

console.log("Elementos removidos:", elementosRemovidos);

