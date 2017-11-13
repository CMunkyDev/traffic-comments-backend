let fs = require('fs')
let carMakes = ["Abarth","AC","Acura","Alfa Romeo","Allard","Alpina","Alpine","Alvis","AMC","Ariel",
    "Armstrong Siddeley","Ascari","Aston Martin","Audi","Austin","Austin-Healey","Autobianchi",
    "Auverland","Avanti","Beijing","Bentley","Berkeley","Bitter","Bizzarrini","BMW","Brilliance",
    "Bristol","Bugatti","Buick","Cadillac","Caterham","Checker","Chevrolet","Chrysler","Citroen",
    "Dacia","Daewoo","DAF","Daihatsu","Daimler","Datsun","De Tomaso","DKW","Dodge","Donkervoort",
    "Eagle","Fairthorpe","Ferrari","Fiat","Fisker","Ford","GAZ","Geely","Ginetta","GMC","Holden",
    "Honda","Hudson","Humber","Hummer","Hyundai","Infiniti","Innocenti","Isuzu","Italdesign",
    "Jaguar","Jeep","Jensen","Kia","Koenigsegg","Lada","Lamborghini","Lancia","Land Rover",
    "Lexus","Lincoln","Lotec","Lotus","Luxgen","Mahindra","Marcos","Maserati","Matra-Simca",
    "Maybach","Mazda","MCC","McLaren","Mercedes-Benz","Mercury","MG","Mini","Mitsubishi",
    "Monteverdi","Moretti","Morgan","Morris","Nissan","Noble","NSU","Oldsmobile","Opel",
    "Packard","Pagani","Panoz","Peugeot","Pininfarina","Plymouth","Pontiac","Porsche",
    "Proton","Reliant","Renault","Riley","Rolls-Royce","Rover","Saab","Saleen","Samsung",
    "Saturn","Scion","Seat","Simca","Singer","Skoda","Smart","Spyker","SsangYong","SSC","Steyr",
    "Studebaker","Subaru","Sunbeam","Suzuki","Talbot","Tata","Tatra","Tesla","Toyota","Trabant",
    "Triumph","TVR","Vauxhall","Vector","Venturi","Volkswagen","Volvo","Wartburg","Westfield",
    "Willys-Overland","Xedos","Zagato","Zastava","ZAZ","Zenvo","ZIL"]

let seedRows = ''
carMakes.forEach((e, index) => seedRows += `{ id: ${index + 1}, name: '${e}', show: true},
`)


fs.writeFileSync('./carRows.js', seedRows)