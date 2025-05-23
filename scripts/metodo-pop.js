let playlist = ["Funk", "Hip-Hop", "Pop"];

console.log("antes do pop");
console.table(playlist);

// // Removendo a última primeira música da playlist
let estiloRemovido = playlist.pop();

console.log("depois do pop");
console.table(playlist);
console.log(`Estilo removido: ${estiloRemovido}`);