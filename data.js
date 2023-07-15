const teams = [
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    region: 'Americas',
    population: 45376763,
    flag: 'https://flagcdn.com/ar.svg',
    players: {
      goalkeeper: ['Vanina Correa', 'Lara Esponda', 'Abigail Chaves'],
      defender: [
        'Adriana Sachs',
        'Eliana Stábile',
        'Julieta Cruz',
        'Alda Cometti',
        'Sophia Braun',
        'Miriam Mayorga',
        'Gabriela Chávez',
      ],
      midfield: [
        'Vanessa Santana',
        'Romina Núñez',
        'Daiana Faltán',
        'Dalila Ippolito',
        'Lorena Benítez',
        'Camila Gómez Ares',
        'Estefanía Banini',
      ],
      attacker: [
        'Paulina Gramaglia',
        'Yamila Rodríguez',
        'Florencia Bonsegundo',
        'Mariana Larroquette',
        'Chiara Singarella',
        'Érica Lonigro',
      ],
      coach: 'Germán Portanova',
    },
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    region: 'Oceania',
    population: 25687041,
    flag: 'https://flagcdn.com/au.svg',
    players: {
      goalkeeper: [
        'Mackenzie Arnold',
        'Teegan Micah',
        'Jada Whyman',
        'Lydia Williams',
      ],
      defender: [
        'Ellie Carpenter',
        'Steph Catley',
        'Charlotte Grant',
        'Clare Hunt',
        'Alanna Kennedy',
        'Aivi Luik',
        'Courtney Nevin',
        'Clare Polkinghorne',
      ],
      midfield: [
        'Alex Chidiac',
        'Kyra Cooney-Cross',
        'Katrina Gorry',
        'Chloe Logarzo',
        'Amy Sayer',
        'Emily van Egmond',
        'Clare Wheeler',
        'Tameka Yallop',
      ],
      attacker: [
        'Larissa Crummer',
        'Caitlin Foord',
        'Mary Fowler',
        'Emily Gielnik',
        'Sam Kerr',
        'Hayley Raso',
        'Atacante	Remy Siemsen',
        'Kyah Simon',
        'Cortnee Vine',
      ],
      coach: 'Tony Gustavsson',
    },
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    region: 'Americas',
    population: 212559409,
    flag: 'https://flagcdn.com/br.svg',
    players: {
      goalkeeper: ['Bárbara', 'Letícia Izidoro', 'Camila'],
      defender: [
        'Antonia',
        'Tamires',
        'Bruninha',
        'Kathellen',
        'Rafaelle',
        'Lauren',
        'Mônica',
      ],
      midfield: [
        'Luana',
        'Ana Vitória',
        'Adriana',
        'Duda Sampaio',
        'Ary Borges',
        'Kerolin',
      ],
      attacker: [
        'Andressa Alves',
        'Debinha',
        'Marta',
        'Bia Zaneratto',
        'Geyse',
        'Nycole',
        'Gabi Nunes',
      ],
      coach: 'Pia Sundhage',
    },
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    region: 'Americas',
    population: 38005238,
    flag: 'https://flagcdn.com/ca.svg',
    players: {
      goalkeeper: ["Sabrina D'Angelo", 'Lysianne Proulx', 'Kailen Sheridan'],
      defender: [
        'Kadeisha Buchanan',
        'Vanessa Gilles',
        'Shelina Zadorsky',
        'Jade Rose',
        'Allysha Chapman',
        'Ashley Lawrence',
        'Jayde Riviere',
      ],
      midfield: [
        'Quinn',
        "Marie-Yasmine Alidou D'Anjou",
        'Simi Awujo',
        'Jessie Fleming',
        'Julia Grosso',
        'Sophie Schmidt',
        'Desiree Scott',
      ],
      attacker: [
        'Jordyn Huitema',
        'Cloe Lacasse',
        'Clarissa Larisey',
        'Adriana Leon',
        'Christine Sinclair',
        'Nichelle Prince',
        'Deanne Rose',
        'Evelyne Viens',
      ],
      coach: 'Bev Priestman',
    },
  },
  {
    name: 'China',
    capital: 'Beijing',
    region: 'Asia',
    population: 1402112000,
    flag: 'https://flagcdn.com/cn.svg',
    players: {
      goalkeeper: ['Zhu Yu', 'Xu Huan', 'Pan Hongyan'],
      defender: [
        'Mengwen Li',
        'Jiaxing Dou',
        'Linlin Wang',
        'Haiyan Wu',
        'Wei Yao',
        'Qiaozhu Chen',
        'Chen Gao',
      ],
      midfield: [
        'Xin Zhang',
        'Mengyu Shen',
        'Rui Zhang',
        'Lina Yang',
        'Lingwei Yao',
        'Chengshu Wu',
        'Linyan Zhang',
        'Yasha Gu',
      ],
      attacker: [
        'Shuang Wang',
        'Shanshan Wang',
        'Jiahui Lou',
        'Jiali Tang',
        'Yuyi Xiao',
      ],
      coach: 'Shui Qingxia',
    },
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    region: 'Americas',
    population: 50882884,
    flag: 'https://flagcdn.com/co.svg',
    players: {
      goalkeeper: ['Catalina Pérez', 'Nathalia Giraldo', 'Sandra Sepúlveda'],
      defender: [
        'Ana María Guzmán',
        'Ángela Barón',
        'Carolina Arias',
        'Daniela Arias',
        'Daniela Caracas',
        'Jorelyn Carabalí',
        'Manuela Vanegas',
      ],
      midfield: [
        'Catalina Usme',
        'Daniela Montoya',
        'Diana Ospina',
        'Lorena Bedoya',
        'Marcela Restrepo',
        'María Camila Reyes',
        'Mónica Ramos',
      ],
      attacker: [
        'Elexa Bahr',
        'Ivonne Chacón',
        'Lady Andrade',
        'Leicy Santos',
        'Linda Caicedo',
        'Mayra Ramírez',
      ],
      coach: 'Nelson Abadía',
    },
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    region: 'Americas',
    population: 5094114,
    flag: 'https://flagcdn.com/cr.svg',
    players: {
      goalkeeper: ['Priscilla Tapia', 'Daniela Solera', 'Génesis Pérez'],
      defender: [
        'Mariana Benavides',
        'Maria Paula Elizondo',
        'Valeria del Campo',
        'Yesmi Rodríguez',
        'Fabíola Villalobos',
        'Maria Coto',
        'Gabriela Guillén',
      ],
      midfield: [
        'Katherine Alvarado',
        'Mariela Campos',
        'Gloriana Villalobos',
        'Emilie Valenciano',
        'Melissa Herrera',
        'Cristin Granados',
        'Alexandra Pineli',
        'Sheika Scott',
        'Raquel Rodríguez',
      ],
      attacker: [
        'Catalina Estrada',
        'Princila Chinchilla',
        'Sofia Varela',
        'Maria Paula Salas',
      ],
      coach: 'Amelia Valverde',
    },
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    region: 'Europe',
    population: 5831404,
    flag: 'https://flagcdn.com/dk.svg',
    players: {
      goalkeeper: [
        'Lene Christensen',
        'Katrhine Larsen',
        'Maja Bay Ostergaard',
      ],
      defender: [
        'Luna Gevitz',
        'Stine Pedersen',
        'Rikke Sevecke',
        'Simone Sorensen',
        'Sofie Svava',
        'Frederikke Thogersen',
        'Katrine Veje',
      ],
      midfield: [
        'Josefine Hasbo',
        'Karen Holmgaard',
        'Sofie Pedersen',
        'Kathrine Kühl',
        'Emma Snerle',
        'Nicoline Sorensen',
        'Janni Thomsen',
        'Sanne Nielsen',
      ],
      attacker: [
        'Signe Bruun',
        'Mille Gejl',
        'Pernille Harder',
        'Rikke Madsen',
        'Amalie Vangsgaard',
      ],
      coach: 'Lars Sondergaard',
    },
  },
  {
    name: 'England',
    capital: 'London',
    region: 'Europe',
    population: 67215293,
    flag: 'https://flagcdn.com/gb.svg',
    players: {
      goalkeeper: ['Mary Earps', 'Ellie Roebuck', 'Hannah Hampton'],
      defender: [
        'Lucy Bronze',
        'Millie Bright',
        'Alex Greenwood',
        'Jess Carter',
        'Esme Morgan',
        'Lotte Wubben-Moy',
        'Niamh Charles',
      ],
      midfield: [
        'Keira Walsh',
        'Georgia Stanway',
        'Ella Toone',
        'Jordan Nobbs',
        'Laura Coombs',
        'Katie Zelem',
      ],
      attacker: [
        'Alessia Russo',
        'Rachel Daly',
        'Lauren James',
        'Chloe Kelly',
        'Lauren Hemp',
        'Katie Robinson',
        'Beth England',
      ],
      coach: 'Sarina Wiegman',
    },
  },
  {
    name: 'France',
    capital: 'Paris',
    region: 'Europe',
    population: 67391582,
    flag: 'https://flagcdn.com/fr.svg',
    players: {
      goalkeeper: [
        'Solène Durand',
        'Pauline Peyraud-Magnin',
        'Constance Picaud',
      ],
      defender: [
        'Selma Bacha',
        'Estelle Cascarino',
        'Elisa de Almeida',
        'Sakina Karchaoui',
        'Maëlle Lakrar',
        'Eve Perisset',
        'Wendie Renard',
      ],
      midfield: [
        'Kenza Dali',
        'Laurina Fazer',
        'Grace Geyoro',
        'Léa Le Garrec',
        'Amel Majri',
        'Sandie Toletti',
        'Aïssatou Tounkara',
      ],
      attacker: [
        'Viviane Asseyi',
        'Vicki Becho',
        'Kadidiatou Diani',
        'Eugénie Le Sommer',
        'Clara Mateo',
        'Naomie Feller',
      ],
      coach: 'Hervé Renard',
    },
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    region: 'Europe',
    population: 83240525,
    flag: 'https://flagcdn.com/de.svg',
    players: {
      goalkeeper: ['Ann-Katrin Berger', 'Merle Frohms', 'Stina Johannes'],
      defender: [
        'Sara Doorsoun',
        'Marina Hegering',
        'Kathrin Hendrich',
        'Sophia Kleinhern',
        'Sjoeke Nüsken',
        'Felicitas Rauch',
      ],
      midfield: [
        'Jule Brand',
        'Klara Bühl',
        'Sara Däbritz',
        'Chantal Hagel',
        'Lena Lattwein',
        'Melanie Leupolz',
        'Sydney Lohmann',
        'Lina Magull',
        'Lena Oberdorf',
      ],
      attacker: [
        'Alexandra Popp',
        'Svenja Huth',
        'Laura Freigang',
        'Lea Schüller',
        'Nicole Anyomi',
      ],
      coach: 'Martina Voss-Tecklenburg',
    },
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    region: 'Americas',
    population: 11402533,
    flag: 'https://flagcdn.com/ht.svg',
    players: {
      goalkeeper: ['Nahomie Abroise', 'Lara Larco', 'Kerly Théus'],
      defender: [
        'Esthericove Joseph',
        'Tabita Joseph',
        'Kethna Louis',
        'Ruthny Mathurin',
        'Betina Petit-Frère',
        'Milan Pierre-Jérôme',
        'Chelsea Surpris',
      ],
      midfield: [
        'Michele Dumornay',
        'Danielle Étienne',
        'Noa Ganthier',
        'Sherly Jeudy',
        'Jennyfer Limage',
        'Maudeline Moryl',
        'Dayana Pierre-Louis',
      ],
      attacker: [
        'Roselord Borgella',
        'Roseline Éloissaint',
        'Darlina Joseph',
        'Shwendesky Joseph',
        'Batcheba Louis',
        'Nérilia Mondésir',
      ],
      coach: 'Nicolas Delépine',
    },
  },
  {
    name: 'Italy',
    capital: 'Rome',
    region: 'Europe',
    population: 59554023,
    flag: 'https://flagcdn.com/it.svg',
    players: {
      goalkeeper: ['Laura Giuliane', 'Francesca Durante', 'Rachele Baldi'],
      defender: [
        'Elena Linari',
        'Elisa Bartoli',
        'Lisa Boattin',
        'Cecilia Salvai',
        'Martina Lenzini',
        'Lucia Di Guglielmo',
        'Benedetta Orsi',
      ],
      midfield: [
        'Valentina Cernoia',
        'Manuela Giugliano',
        'Arianna Caruso',
        'Giada Greggi',
        'Emma Severini',
        'Giulia Dragoni',
      ],
      attacker: [
        'Cristiana Girelli',
        'Barbara Bonansea',
        'Valentina Giacinti',
        'Annamaria Serturini',
        'Benedetta Glionna',
        'Sofia Cantore',
        'Chiara Beccari',
      ],
      coach: 'Milena Bertolini',
    },
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    region: 'Americas',
    population: 2961161,
    flag: 'https://flagcdn.com/jm.svg',
    players: {
      goalkeeper: ['Rebecca Spencer', 'Sydney Schneider', 'Liya Brooks'],
      defender: [
        'Allyson Swaby',
        'Chatelle Swaby',
        'Konya Plummer',
        'Deneisha Blackwood',
        'Vyan Sampson',
        'Tiernny Wiltshire',
      ],
      midfield: [
        'Peyton McNamara',
        'Drew Spence',
        'Trudi Carter',
        'Solai Washington',
        'Atlanta Primus',
        'Havana Solaun',
      ],
      attacker: [
        'hadija "Bunny" Shaw',
        'Jody Brown',
        'Tiffany Cameron',
        'Kameron Simmonds',
        'Kiki van Zanten',
        'Paige Bailey-Gayle',
        'Cheyna Matthews',
        'Kayla McKenna',
      ],
      coach: 'Lorne Donaldson',
    },
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    region: 'Asia',
    population: 125836021,
    flag: 'https://flagcdn.com/jp.svg',
    players: {
      goalkeeper: ['Ayaka Yamashita', 'Chika Hirao', 'Momoko Tanaka'],
      defender: [
        'Saki Kumagai',
        'Shiori Miyake',
        'Risa Shimizu',
        'Kiko Seike',
        'Miyabi Moriya',
        'Moeka Minami',
        'Hana Takahashi',
        'Rion Ishikawa',
      ],
      midfield: [
        'Hikaru Naomoto',
        'Yui Hasegawa',
        'Hina Sugita',
        'Honoka Hayashi',
        'Fuka Nagano',
        'Hinata Miyazawa',
        'Jun Endo',
        'Aoba Fujino',
      ],
      attacker: ['Mina Tanaka', 'Remina Chiba', 'Riko Ueki', 'Maika Hamano'],
      coach: '',
    },
  },
  {
    name: 'Korea Republic',
    capital: 'Seoul',
    region: 'Asia',
    population: 51780579,
    flag: 'https://flagcdn.com/kr.svg',
    players: {
      goalkeeper: ['Kim Jung-mi', 'Yoon Young-geul', 'Ryu Ji-soo'],
      defender: [
        'Kim Hye-ri',
        'Lim Seon-joo',
        'Jang Sei-gi',
        'Shim Seo-yeon',
        'Lee Young-ju',
        'Heong Hye-ji',
        'Choo Hyo-joo',
      ],
      midfield: [
        'Cho So-hyun',
        'Ji So-yun',
        'Lee Geum-min',
        'Jeon Eun-ha',
        'Kim Yun-ji',
        'Chun Ga-ram',
        'Bae Ye-bin',
      ],
      attacker: [
        'Choe Yu-ri',
        'Son Hwa-yeon',
        'Park Eun-sun',
        'Moon Mi-ra',
        'Kang Chae-rim',
        'Casey Phair',
      ],
      coach: 'Colin Bell',
    },
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    region: 'Africa',
    population: 36910558,
    flag: 'https://flagcdn.com/ma.svg',
    players: {
      goalkeeper: ['Inès Arouaissa', 'Khadija Er-Rmichi', 'Assia Zouhair'],
      defender: [
        'Hanane Aït El Haj',
        'Nouhaila Benzina',
        'Siham Boukhami',
        'Zineb Redouani',
        'Yasmin Mrabet',
        'Rkia Mazrouai',
        'Nesryne El Chad',
        'Ghizlane Chhiri',
        'Sabah Seghir',
      ],
      midfield: [
        'Najat Badri',
        'Anissa Lahmari',
        'Élodie Nakkach',
        'Sarah Kassi',
        'Fatima Tagnaout',
        'Salma Amani',
      ],
      attacker: [
        'Rosella Ayane',
        'Ghizlane Chebbak',
        'Anissa Belkasmi',
        'Sofia Bouftini',
        'Imane Saoud',
        'Ibtissam Jraidi',
        'Samya Hassani',
        'Kenza Chapelle',
        'Sakina Ouzraoui Diki',
        'Fatima Zohra Gharbi',
      ],
      coach: 'Reynald Pedros',
    },
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    region: 'Europe',
    population: 17441139,
    flag: 'https://flagcdn.com/nl.svg',
    players: {
      goalkeeper: [
        'Daphne van Domselaar',
        'Lize Kop',
        'Barbara Lorsheyd',
        'Jacintha Weimar',
      ],
      defender: [
        'Stefanie van der Gragt',
        'Dominique Janssen',
        'Kika van Es',
        'Merel van Dongen',
        'Aniek Nouwen',
        'Lynn Wilms',
        'Caitlin Dijkstra',
        'Alieke Tuin',
      ],
      midfield: [
        'Sherida Spitse',
        'Danielle van de Donk',
        'Jackie Groenen',
        'Jill Roord',
        'Victoria Pelova',
        'Karstin Casparij',
        'Damaris Egurrola',
        'Jil Baijings',
        'Wieke Kaptein',
      ],
      attacker: [
        'Lieke Martens',
        'Shanice van de Sanden',
        'Lineth Beerensteyn',
        'Renate Jansen',
        'Esmee Brugts',
        'Katja Snoeijs',
        'Roméen Leuchter',
        'Fenna Kalma',
        'Tiny Hoekstra',
      ],
      coach: 'Andries Jonker',
    },
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    region: 'Oceania',
    population: 5084300,
    flag: 'https://flagcdn.com/nz.svg',
    players: {
      goalkeeper: ['Victoria Esson', 'Anna Leat', 'Erin Nayler'],
      defender: [
        'Liz Anton',
        'C.J.Bott',
        'Katie Bowen',
        'Claudia Bunge',
        'Michaela Foster',
        'Ali Riley',
        'Rebekah Stott',
      ],
      midfield: [
        'Olivia Chance',
        'Daisy Cleverley',
        'Betsy Hassett',
        'Annalie Longo',
        'Ria Percival',
        'Malia Steinmetz',
      ],
      attacker: [
        'Milly Clegg',
        'Jacqui Hand',
        'Grace Jale',
        'Gabi Rennie',
        'Indiah-Paige Riley',
        'Paige Satchell',
        'Hannah Wilkinson',
      ],
      coach: 'Jitka Klimková',
    },
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    region: 'Africa',
    population: 206139587,
    flag: 'https://flagcdn.com/ng.svg',
    players: {
      goalkeeper: ['Chiamaka Nnadozie', 'Tochukwu Oluehi', 'Yewande Balogun'],
      defender: [
        'Onome Ebi',
        'Osinachi Ohale',
        'Glory Ogbonna',
        'Ashleigh Pluptre',
        'Rofiat Imuran',
        'Michelle Alozie',
        'Oluwatosin Demehin',
      ],
      midfield: [
        'Halimatu Ayinde',
        'Rasheedat Ajibade',
        'Toni Payne',
        'Christy Ucheibe',
        'Debora Abiodun',
        'Jennifer Echegini',
      ],
      attacker: [
        'Uchenna Kanu',
        'Gift Monday',
        'Ifeoma Onumonu',
        'Asisat Oshoala',
        'Desire Oparanozie',
        'Francisca Ordega',
        'Esther Okoronkwo',
      ],
      coach: 'Randy Waldrum',
    },
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    region: 'Europe',
    population: 5379475,
    flag: 'https://flagcdn.com/no.svg',
    players: {
      goalkeeper: ['Cecilie Fiskerstrand', 'Aurora Mikalsen', 'Guro Pettersen'],
      defender: [
        'Maren Mjelde',
        'Anja Sonstevold',
        'Tuva Hansen',
        'Guro Bergsvand',
        'Mathilde Harviken',
        'Marit Lund',
        'Sara Horte',
        '.',
      ],
      midfield: [
        'Guro Reiten',
        'Frida Maanum',
        'Vilde Rise',
        'Ingrid Engen',
        'Amalie Eikeland',
        'Julie Blakstad',
        'Thea Bjelde',
      ],
      attacker: [
        'Carolina Graham Hansen',
        'Emilie Haavi',
        'Ada Hegerberg',
        'Karina Saevik',
        'Sophie Haug',
        'Anna Josendal',
      ],
      coach: 'Hege Riise',
    },
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    region: 'Americas',
    population: 4314768,
    flag: 'https://flagcdn.com/pa.svg',
    players: {
      goalkeeper: ['Sasha Fábrega', 'Yenith Bailey', 'Farissa Córdoba'],
      defender: [
        'Hilary Jaén',
        'Wendy Natis',
        'Katherine Castillo',
        'Yomira Pinzón',
        'Rosario Vargas',
        'Rebeca Espinosa',
        'Nicole de Obaldía',
        'CArina Baltrip-Reyes',
      ],
      midfield: [
        'Deysiré Salazar',
        'Emily Cedeño',
        'Schiandra González',
        'Marta Cox',
        'Natalia Mills',
        'Carmen Montenegro',
        'Laurie Batista',
        'Erika Hernández',
        'Aldrith Quintero',
      ],
      attacker: ['Karla Riley', 'Riley Tanner', 'Lineth Cedeño'],
      coach: 'Ignacio Quintana',
    },
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    region: 'Asia',
    population: 109581085,
    flag: 'https://flagcdn.com/ph.svg',
    players: {
      goalkeeper: ['Kiara Fontanilla', 'Kaiya Jota', 'Olivia McDaniel'],
      defender: [
        'Maya Alcantara',
        'Alicia Barker',
        'Angela Beard',
        'Reina Bonta',
        'Malea Cesar',
        'Jessika Cowart',
        'Hali Long',
        'Sofia Harrison',
        'Dominique Randle',
      ],
      midfield: [
        'Tahnai Annis',
        'Anicka Castañeda',
        'Sara Eggesvik',
        'Quinley Quezada',
        'Jaclyn Sawicki',
      ],
      attacker: [
        'Sarina Bolden',
        'Isabella Flanigan',
        'Carleigh Frilles',
        'Katrina Guillou',
        'Chadler McDaniel',
        'Meryll Serrano',
      ],
      coach: 'Alen Stajcic',
    },
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    region: 'Europe',
    population: 10305564,
    flag: 'https://flagcdn.com/pt.svg',
    players: {
      goalkeeper: ['Rute Costa', 'Inês Pereira', 'Patrícia Morais'],
      defender: [
        'Ana Seiça',
        'Carole Costa',
        'Catarina Amado',
        'Diana Gomes',
        'Joana Marchão',
        'Lúcia Alves',
        'Sílvia Rebelo',
      ],
      midfield: [
        'Ana Rute',
        'Andreia Norton',
        'Andreia Jacinto',
        'Dolores Silva',
        'Fátima Pinto',
        "Francisca 'Kika' Nazareth",
        'Tatiana Pinto',
      ],
      attacker: [
        'Ana Borges',
        'Ana Capeta',
        'Carolina Mendes',
        'Diana Silva',
        'Jéssica Silva',
        'Telma Encarnação',
      ],
      coach: 'Francisco Neto',
    },
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    region: 'Europe',
    population: 4994724,
    flag: 'https://flagcdn.com/ie.svg',
    players: {
      goalkeeper: ['Courtney Brosnan', 'Grace Moloney', 'Megan Walsh'],
      defender: [
        "Aine O'Gorman",
        'Niamh Fahey',
        'Louise Quinn',
        'Diane Caldwell',
        'Heather Payne',
        "Claire O'Riordan",
        'Chloe Mustaki',
        'Isibeal Atkinson',
      ],
      midfield: [
        "Denise O'Sullivan",
        'Katie McCabe',
        'Ruesha Littlejohn',
        'Megan Connolly',
        'Ciara Grant',
        'Lucy Quinn',
        'Lily Agg',
        'Sinead Farrelly',
      ],
      attacker: [
        'Amber Barrett',
        'Kyra Carusa',
        'Abbie Larkin',
        'Marissa Sheva',
      ],
      coach: 'Vera Pauw',
    },
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    region: 'Africa',
    population: 59308690,
    flag: 'https://flagcdn.com/za.svg',
    players: {
      goalkeeper: ['Andile Dlamini', 'Kaylin Swart', 'Kebotseng Moletsane'],
      defender: [
        'Karabo Dhlamini',
        'Fikilie Magama',
        'Lebohang Ramalepe',
        'Tiisetso Makhubela',
        'Noko Matlou',
        'Bambanani Mbane',
        'Bongeka Gamede',
      ],
      midfield: [
        'Kholosa Biyana',
        'Refiloe Jane',
        'Sibulele Holweni',
        'Linda Motlhalo',
        'Nomvula Kgoale',
        'Robyn Moodaly',
      ],
      attacker: [
        'Gabriela Salgado',
        'Jermaine Seoposenwe',
        'Noxolo Cesane',
        'Melinda Kgadiete',
        'Wendy Shongwe',
        'Hildah Magaia',
        'Thembi Kgantlana',
      ],
      coach: 'Desiree Ellis',
    },
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    region: 'Europe',
    population: 47351567,
    flag: 'https://flagcdn.com/es.svg',
    players: {
      goalkeeper: [],
      defender: [],
      midfield: [],
      attacker: [],
      coach: '',
    },
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    region: 'Europe',
    population: 10353442,
    flag: 'https://flagcdn.com/se.svg',
    players: {
      goalkeeper: [],
      defender: [],
      midfield: [],
      attacker: [],
      coach: '',
    },
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    region: 'Europe',
    population: 8636896,
    flag: 'https://flagcdn.com/ch.svg',
    players: {
      goalkeeper: [],
      defender: [],
      midfield: [],
      attacker: [],
      coach: '',
    },
  },
  {
    name: 'United States',
    capital: 'Washington, D.C.',
    region: 'Americas',
    population: 329484123,
    flag: 'https://flagcdn.com/us.svg',
    players: {
      goalkeeper: [],
      defender: [],
      midfield: [],
      attacker: [],
      coach: '',
    },
  },
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    region: 'Asia',
    population: 97338583,
    flag: 'https://flagcdn.com/vn.svg',
    players: {
      goalkeeper: [],
      defender: [],
      midfield: [],
      attacker: [],
      coach: '',
    },
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    region: 'Africa',
    population: 18383956,
    flag: 'https://flagcdn.com/zm.svg',
    players: {
      goalkeeper: [],
      defender: [],
      midfield: [],
      attacker: [],
      coach: '',
    },
  },
];

export { teams };
