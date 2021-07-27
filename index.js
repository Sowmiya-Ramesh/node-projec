console.log("hello bts");
//ctrl+` to open the terminal
//https://60fcdb7a1fa9e90017c70cd7.mockapi.io/:endpoint
const user=[
    {
     "name": "Samsung",
     "color": "pink",
     "content": "Korea Based Company",
     "id": 1
    },
    {
     "name": "Oppo",
     "color": "green",
     "content": "India based company",
     "id": 2
    },
    {
     "name": "Real me",
     "color": "white",
     "content": "Busan based company",
     "id": 3
    },
    {
     "name": "Redmi",
     "color": "red",
     "content": "China based company",
     "id": 4
    },
    {
     "name": "Nokia",
     "color": "yellow",
     "content": "India based company",
     "id": 5
    },
    {
     "name": "Apple",
     "color": "color 6",
     "content": "Japan based company",
     "id": 6
    },
    {
     "name": "Vivo",
     "color": "Purple",
     "content": "US based company",
     "id": 7
    },
    {
     "name": "Samsung Y20",
     "color": "Blue",
     "content": "London based company",
     "id": "8"
    },
    {
     "name": "Redmi 10s pro",
     "color": "crimson",
     "content": "Seoul based company",
     "id": 9
    },
    {
     "name": "Redmi 7 pro",
     "color": "black",
     "content": "North Korea based company",
     "id": 10
    }
   ];
//to get a name alone(dot syntax)
   //console.log(user.map(user => user.name));

   //to see the arguments which passed through the terminal
   //console.log(process.argv);

   //get an object using box syntax
   //console.log(user.map(user => user['name']));

   const keyName= process.argv[2];
   console.log(user.map((user) => user[keyName]));