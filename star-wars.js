let starWars = {
  image: 'image file path',
  length: '1:00',
  title: 'Special Look | The Mandalorian | Disney+',
  username: 'Star Wars',
  views: 1000000,
  uploaded: 1
};

console.log(starWars.title);
console.log(starWars.views);

for (let key in starWars) {
  console.log(`Key: ${key} // Value: ${starWars[key]}`)
}