const teams = [
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    code: 'ARG',
    region: 'Americas',
    population: 45376763,
    flag: 'https://flagcdn.com/ar.svg',
    players: {
      goalkeeper: [
        {
          name: 'Vanina Correa',
          img: 'https://digitalhub.fifa.com/transform/cd057c0d-cc00-4132-937f-6b69df5dedad/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Lara Esponda',
          img: 'https://digitalhub.fifa.com/transform/19fb48a4-8333-4764-8e68-2ee76deb065f/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Abigail Chaves',
          img: 'https://digitalhub.fifa.com/transform/9c7fa3ac-b7aa-476b-bf94-adc5878c9c17/?io=transform:fill,width:264,height:300',
        },
      ],
      defender: [
        {
          name: 'Adriana Sachs',
          img: 'https://digitalhub.fifa.com/transform/5992d863-6a81-407b-99fd-4d15ad0ebb25/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Eliana Stábile',
          img: 'https://digitalhub.fifa.com/transform/f5ea9e38-bbb4-481a-b7bd-25af0cfbba42/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Julieta Cruz',
          img: 'https://digitalhub.fifa.com/transform/f4dcaa27-089a-480a-a535-dbdc0ddf0395/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Alda Cometti',
          img: 'https://digitalhub.fifa.com/transform/7f4a693b-87e0-4c5c-a78c-f20b65f3efff/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Sophia Braun',
          img: 'https://digitalhub.fifa.com/transform/9cdb8694-af74-4bc4-9f64-2e834fdf7e8c/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Miriam Mayorga',
          img: 'https://digitalhub.fifa.com/transform/3c8b10f8-a645-4466-a587-737667de48d0/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Gabriela Chávez',
          img: 'https://digitalhub.fifa.com/transform/a2c9cdab-c911-441a-99ec-e5ca50f5d341/?io=transform:fill,width:264,height:300',
        },
      ],
      midfield: [
        {
          name: 'Vanessa Santana',
          img: 'https://digitalhub.fifa.com/transform/af9ff8ce-6046-4d8a-bb39-145900b61125/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Romina Núñez',
          img: 'https://digitalhub.fifa.com/transform/1b78dd4c-4675-41be-9a85-c500acd48d63/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Daiana Faltán',
          img: 'https://digitalhub.fifa.com/transform/2b674faa-44e5-4e2e-acf8-f2c95e4d117c/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Dalila Ippolito',
          img: 'https://digitalhub.fifa.com/transform/d3b46f41-1cbc-40a1-895a-6aab1c0d897e/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Florencia',
          img: 'https://digitalhub.fifa.com/transform/a7887241-c1fe-4956-8e3c-1ce7a1af0144/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Lorena Benítez',
          img: 'https://digitalhub.fifa.com/transform/290870a5-5051-404c-a524-6be80d2965f0/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Camila Gómez Ares',
          img: 'https://digitalhub.fifa.com/transform/85180595-ee8a-4c85-bc93-4c174b42cce8/?io=transform:fill,width:264,height:300',
        },
      ],
      attacker: [
        {
          name: 'Estefanía Banini',
          img: 'https://digitalhub.fifa.com/transform/272c66b5-5d9c-468f-a3a8-6bda455e68d3/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Paulina Gramaglia',
          img: 'https://digitalhub.fifa.com/transform/06f656a5-9c29-44f7-85a3-13a54128c5af/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Yamila Rodríguez',
          img: 'https://digitalhub.fifa.com/transform/1274a494-2e72-456f-8473-193c6904cc79/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Mariana Larroquette',
          img: 'https://digitalhub.fifa.com/transform/8a5656fe-58f9-42e7-804c-a9c071f4c12a/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Chiara Singarella',
          img: 'https://digitalhub.fifa.com/transform/53d06ecb-b1bd-4974-8878-39fe7032f5f0/?io=transform:fill,width:264,height:300',
        },
        {
          name: 'Érica Lonigro',
          img: 'https://digitalhub.fifa.com/transform/560f0948-5d09-4846-8edf-a0ede9051999/?io=transform:fill,width:264,height:300',
        },
      ],
      coach: {
        name: 'Germán Portanova',
        img: 'https://digitalhub.fifa.com/transform/aa8f9cdc-eef0-446e-8a6d-33088d0eb508/Argentina-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    code: 'AUS',
    region: 'Oceania',
    population: 25687041,
    flag: 'https://flagcdn.com/au.svg',
    players: {
      goalkeeper: [
        {
          name: 'Lydia WILLIAMS',
          img: 'https://digitalhub.fifa.com/transform/bc19f8c8-597a-42df-ba80-9ad8f10ac456/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Teagan MICAH',
          img: 'https://digitalhub.fifa.com/transform/9b6cea0f-4295-4943-8a72-3b27e81fc10a/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mackenzie ARNOLD',
          img: 'https://digitalhub.fifa.com/transform/b6b29769-961c-4adc-9a98-61a59f1c5a4c/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Courtney NEVIN',
          img: 'https://digitalhub.fifa.com/transform/6afaa153-7e02-4d90-b77d-9aab28c7a70d/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Aivi LUIK',
          img: 'https://digitalhub.fifa.com/transform/66d45f36-5caf-4d79-a0cc-5718bef4ce5d/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Clare POLKINGHORNE',
          img: 'https://digitalhub.fifa.com/transform/f32a1b18-0c12-4176-8154-f5befaddff34/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Steph CATLEY',
          img: 'https://digitalhub.fifa.com/transform/eee94407-004c-43a1-93d8-f1cdeb060d1f/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alanna KENNEDY',
          img: 'https://digitalhub.fifa.com/transform/432742d5-0668-415d-a612-e6d365e3fe9c/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Clare HUNT',
          img: 'https://digitalhub.fifa.com/transform/84459cd5-7ca8-4a03-8591-a13ff96b0c2a/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ellie CARPENTER',
          img: 'https://digitalhub.fifa.com/transform/48e30b09-c895-44aa-899a-9af3af2081f3/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Charlotte GRANT',
          img: 'https://www.canva.com/design/DAFpZbzk0GY/',
        },
      ],
      midfield: [
        {
          name: 'Clare WHEELER',
          img: 'https://digitalhub.fifa.com/transform/63795416-596c-4ee2-a356-3268d74b4c13/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alex CHIDIAC',
          img: 'https://digitalhub.fifa.com/transform/cbf0979c-2b4b-4ce9-ac5f-3b1f71960ae8/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Emily VAN EGMOND',
          img: 'https://digitalhub.fifa.com/transform/85a814cb-17cb-477b-bcd4-7d2de4b4d955/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tameka YALLOP',
          img: 'https://digitalhub.fifa.com/transform/edf41884-c7c6-477f-be4a-9c2efb4c86a1/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katrina GORRY',
          img: 'https://digitalhub.fifa.com/transform/12c6127b-0e2d-4554-81cc-f84f31d9a20c/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kyra COONEY-CROSS',
          img: 'https://digitalhub.fifa.com/transform/a0be21b4-0ae4-4937-a23d-5eed4ce5a4fd/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Cortnee VINE',
          img: 'https://digitalhub.fifa.com/transform/53a840eb-fe3c-4385-a701-c6122af058d8/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Caitlin FOORD',
          img: 'https://digitalhub.fifa.com/transform/a0229a12-406e-442f-85d1-0ed5e07cd12e/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mary FOWLER',
          img: 'https://digitalhub.fifa.com/transform/f113fc62-ccfd-42b2-96f5-97129faff97e/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hayley RASO',
          img: 'https://digitalhub.fifa.com/transform/3553656d-80eb-4560-813e-d845b2447510/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kyah SIMON',
          img: 'https://digitalhub.fifa.com/transform/c6e1ea68-a1c1-45dd-b8bf-833c1883793b/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sam KERR',
          img: 'https://digitalhub.fifa.com/transform/7b61165a-5f23-4086-b8d5-6f767a8216bd/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Tony Gustavsson',
        img: 'https://digitalhub.fifa.com/transform/147099e2-bdb4-4802-b5c1-82c724051ea4/Australia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    code: 'BRA',
    region: 'Americas',
    population: 212559409,
    flag: 'https://flagcdn.com/br.svg',
    players: {
      goalkeeper: [
        {
          name: 'Bárbara',
          img: 'https://digitalhub.fifa.com/transform/d808f022-38db-4a2f-aac0-c533d8cc1326/1556714212?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Letícia Izidoro',
          img: 'https://digitalhub.fifa.com/transform/e23a5538-1aca-4eab-98b9-d1b5e6919f30/1556714218?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Camila',
          img: 'https://digitalhub.fifa.com/transform/2bca0d55-f03f-4bf7-9825-09e5ea280261/1556714720?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Antonia',
          img: 'https://digitalhub.fifa.com/transform/6915b6a2-c4ae-4969-a559-f13476fb4954/1556715229?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tamires',
          img: 'https://digitalhub.fifa.com/transform/7db8f79b-622e-435c-9213-b0bcaf726678/1556716781?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Bruninha',
          img: 'https://digitalhub.fifa.com/transform/f76f9c93-8cc7-4b9f-9758-5623c6407501/1556721958?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kathellen',
          img: 'https://digitalhub.fifa.com/transform/5f0f7663-5bf8-4738-898e-ce8c850d6fff/1556434301?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rafaelle',
          img: 'https://digitalhub.fifa.com/transform/0bca8912-4df1-4b2a-8bb0-263ff89884c5/1556434840?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lauren',
          img: 'https://digitalhub.fifa.com/transform/c56fec4e-009d-4b93-b65b-b90be064f58f/1556722469?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Luana',
          img: 'https://digitalhub.fifa.com/transform/15456d21-9b8c-48bc-a68e-7d76c20e61da/1556716272?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mônica Hickman',
          img: 'https://digitalhub.fifa.com/transform/f1ff4d8e-5714-4494-bab2-2cabbc335ec9/1556724717?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ana Vitória',
          img: 'https://digitalhub.fifa.com/transform/58f6ede2-e6c4-4024-838d-ad002e10c211/1556717312?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Adriana',
          img: 'https://digitalhub.fifa.com/transform/b56c5095-32a7-471f-9dee-825993cd8991/1556721949?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ary Borges',
          img: 'https://digitalhub.fifa.com/transform/9c906efd-d238-42ee-bb4a-3c2edfecba51/1556723995?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Angelina',
          img: 'https://digitalhub.fifa.com/transform/e0ca5f23-e950-4d60-b067-470a9d205742/1556725041?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Andressa Alves',
          img: 'https://digitalhub.fifa.com/transform/73e0c4d0-3f85-4678-8cf0-074fac9c6fc2/1556717299?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Duda Sampaio',
          img: 'https://digitalhub.fifa.com/transform/153bd7a6-3878-47d9-8146-dc2e503029ff/1556722979?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kerolin',
          img: 'https://digitalhub.fifa.com/transform/586daffe-bf8c-44ff-84a1-321ba38d4213/1556725548?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Debinha',
          img: 'https://digitalhub.fifa.com/transform/2446727f-c33e-4224-8f51-7636d405649c/1556721443?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Marta',
          img: 'https://digitalhub.fifa.com/transform/27b226f4-fe77-46c3-b44a-59151f6f8c68/1556721444?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Bia Zaneratto',
          img: 'https://digitalhub.fifa.com/transform/a02e0fa2-4212-48fc-955c-54a3000802f6/1556722981?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Geyse',
          img: 'https://digitalhub.fifa.com/transform/cf028091-cb27-4ad1-88c9-97e738c9d251/1556724518?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Gabi Nunes',
          img: 'https://digitalhub.fifa.com/transform/917cfeae-99d6-408d-a84a-b5ec4dfaed72/1556725554?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Pia Sundhage',
        img: 'https://digitalhub.fifa.com/transform/ed1c772f-88e0-438a-9aad-daf27b8af959/1556713702?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    code: 'CAN',
    region: 'Americas',
    population: 38005238,
    flag: 'https://flagcdn.com/ca.svg',
    players: {
      goalkeeper: [
        {
          name: 'Kailen SHERIDAN',
          img: 'https://digitalhub.fifa.com/transform/af578751-bbb9-4e0b-92ef-955a9d64984d/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sabrina DANGELO',
          img: 'https://digitalhub.fifa.com/transform/687d60db-fce8-42d4-b07c-20d1157f7fd7/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lysianne PROULX',
          img: 'https://digitalhub.fifa.com/transform/eafe0cdb-e83b-4386-9352-c40bdeb5d6a0/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Allysha CHAPMAN',
          img: 'https://digitalhub.fifa.com/transform/f2442707-7f6c-4df2-bd4b-8ae6cd474ca1/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kadeisha BUCHANAN',
          img: 'https://digitalhub.fifa.com/transform/391711d8-1035-48db-a2af-228f42624ae1/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Shelina ZADORSKY',
          img: 'https://digitalhub.fifa.com/transform/c30808e7-cc7f-4342-af5d-8bbb7c6b4a3b/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jayde RIVIERE',
          img: 'https://digitalhub.fifa.com/transform/704907c9-d5d3-4958-b9cf-83a959053a91/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ashley LAWRENCE',
          img: 'https://digitalhub.fifa.com/transform/eab717bb-ffe1-4b50-91b5-4b4582fbd794/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Vanessa GILLES',
          img: 'https://digitalhub.fifa.com/transform/23b73512-92a3-4132-a159-af9e16a9f888/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Gabrielle CARLE',
          img: 'https://digitalhub.fifa.com/transform/b8e952ab-4513-4330-b609-04670104a748/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'QUINN',
          img: 'https://digitalhub.fifa.com/transform/f67e383b-5565-47df-85b7-427f0b11315a/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Julia GROSSO',
          img: 'https://digitalhub.fifa.com/transform/1b524686-b128-4c1e-940c-03d5fc9d0f13/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sophie SCHMIDT',
          img: 'https://digitalhub.fifa.com/transform/e113f761-4ef2-48a9-b91e-2175887cb9ee/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jessie FLEMING',
          img: 'https://digitalhub.fifa.com/transform/736142dd-8ecb-4eb3-845a-b0427a7d8ab4/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Simi AWUJO',
          img: 'https://digitalhub.fifa.com/transform/950359af-ac57-45b1-b054-3e36611c4538/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Deanne ROSE',
          img: 'https://digitalhub.fifa.com/transform/85be5844-e7d3-45e2-86e4-11173694cbb3/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jordyn HUITEMA',
          img: 'https://digitalhub.fifa.com/transform/bc0155ca-514a-48aa-b5b7-b2733854d3ee/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Evelyne VIENS',
          img: 'https://digitalhub.fifa.com/transform/7c8e43cf-4e57-4ba7-b730-7625db434820/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Christine SINCLAIR',
          img: 'https://digitalhub.fifa.com/transform/00e96f48-57e1-4ac3-b4bd-66f6a86e9189/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nichelle PRINCE',
          img: 'https://digitalhub.fifa.com/transform/57c3254d-a747-4638-830b-0852a3eccc47/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Adriana LEON',
          img: 'https://digitalhub.fifa.com/transform/b863e80d-4193-4176-ad8e-a7ada025e924/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Cloe LACASSE',
          img: 'https://digitalhub.fifa.com/transform/47cd379b-170c-4bed-a1f2-48251f1df76e/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Olivia SMITH',
          img: 'https://digitalhub.fifa.com/transform/12b36bf9-cc04-4acc-8dbc-9c6fbc3b2b4f/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Beverly Priestman',
        img: 'https://digitalhub.fifa.com/transform/74ec3eca-afb2-4b23-864a-bc71c3d2566b/Canada-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'China',
    capital: 'Beijing',
    code: 'CHN',
    region: 'Asia',
    population: 1402112000,
    flag: 'https://flagcdn.com/cn.svg',
    players: {
      goalkeeper: [
        {
          name: 'ZHU Yu',
          img: 'https://digitalhub.fifa.com/transform/1e494dda-a4c5-4dae-9cf8-5090d853f770/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'XU Huan',
          img: 'https://digitalhub.fifa.com/transform/c1d86a33-cfd5-4eb9-b55e-e4dd81e12425/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'PAN Hongyan',
          img: 'https://digitalhub.fifa.com/transform/53467760-d144-476b-82ca-6e76f4db046e/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'LI Mengwen',
          img: 'https://digitalhub.fifa.com/transform/511e52f4-9e29-41e0-a850-000e9a1b65b4/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'DOU Jiaxing',
          img: 'https://digitalhub.fifa.com/transform/3acd4712-1da3-4aa7-a76a-bf342bb953b7/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'WANG Linlin',
          img: 'https://digitalhub.fifa.com/transform/7b6ebe21-2a9e-4ad3-840a-f6deb4f5c95a/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'WU Haiyan',
          img: 'https://digitalhub.fifa.com/transform/6c2b8da7-b994-448b-84b3-dd30aefa933c/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'YAO Wei',
          img: 'https://digitalhub.fifa.com/transform/371b1732-76a3-4760-814f-00c14ec6fbf5/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Miriam',
          img: 'https://digitalhub.fifa.com/transform/15e1a623-cc40-4df6-928a-2d6b32239085/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'CHEN Qiaozhu',
          img: 'https://digitalhub.fifa.com/transform/99dcd8f9-8232-4f16-b268-61f6406148d5/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'GAO Chen',
          img: 'https://digitalhub.fifa.com/transform/67bde3da-e81e-46d0-9719-db1be755a55e/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ZHANG Xin',
          img: 'https://digitalhub.fifa.com/transform/0d7dfb20-27d8-4148-a612-96e34a4d27bf/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'SHEN Mengyu',
          img: 'https://digitalhub.fifa.com/transform/e2ef324e-0901-4938-8629-a4e230064c9f/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ZHANG Rui',
          img: 'https://digitalhub.fifa.com/transform/bc45ff0b-c5c4-4e45-a2d4-6ee281a85ea6/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Florencia',
          img: 'https://digitalhub.fifa.com/transform/9badff62-aaf2-46ff-9a6e-3afa2a34dbed/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'YANG Lina',
          img: 'https://digitalhub.fifa.com/transform/977ca6b1-ea51-40dd-a364-ff757dacd54d/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'YAO Lingwei',
          img: 'https://digitalhub.fifa.com/transform/7f3fff84-005b-4fc0-854e-f97efc30e387/CHINA-Headshots?io=transform:fill,width:792,height:900',
        },
        {
          name: 'WU Chengshu',
          img: 'https://digitalhub.fifa.com/transform/063ece3c-ad6f-4d72-8137-2f954e557820/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'ZHANG Linyan',
          img: 'https://digitalhub.fifa.com/transform/d49db1b5-1773-4c67-9bb9-ed9d24dfea50/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'GU Yasha',
          img: 'https://digitalhub.fifa.com/transform/c11adc71-6039-4517-9d59-0a4c06b29186/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'WANG Shuang',
          img: 'https://digitalhub.fifa.com/transform/1d647fb7-7034-440e-8fd1-4af463b30dee/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'WANG Shanshan',
          img: 'https://digitalhub.fifa.com/transform/010f8a6b-4958-434b-86c2-341a0adef103/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'LOU Jiahui',
          img: 'https://digitalhub.fifa.com/transform/ee6276f3-61c6-40ba-9a8c-9af2a31f1a09/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Shui Qingxia',
        img: 'https://digitalhub.fifa.com/transform/4c27a044-cbdb-43d8-85de-a99c0cfc2235/China-PR-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    code: 'COL',
    region: 'Americas',
    population: 50882884,
    flag: 'https://flagcdn.com/co.svg',
    players: {
      goalkeeper: [
        {
          name: 'Catalina PEREZ',
          img: 'https://digitalhub.fifa.com/transform/a2f2ff3d-16ce-46b8-ac0b-cd30514b13ea/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sandra SEPULVEDA',
          img: 'https://digitalhub.fifa.com/transform/56fbdad4-ce25-4645-81bc-e6725ae48e71/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Natalia GIRALDO',
          img: 'https://digitalhub.fifa.com/transform/019c290c-dbe7-407e-aced-08d87c3a35f9/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Manuela VANEGAS',
          img: 'https://digitalhub.fifa.com/transform/de899e6d-3bea-4f7a-8a79-ec5cdf12686f/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Daniela ARIAS',
          img: 'https://digitalhub.fifa.com/transform/8f0e1a50-73be-4c19-9d89-e92bef8cff09/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Angela BARON',
          img: 'https://digitalhub.fifa.com/transform/5ca7a95b-b80e-4f96-9d78-12938e4ad34c/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ana GUZMAN',
          img: 'https://digitalhub.fifa.com/transform/8029396d-59af-45d8-99b5-15655928b56c/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Carolina ARIAS',
          img: 'https://digitalhub.fifa.com/transform/4e5c1db3-0fd2-41ee-a370-f954461a2e33/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jorelyn CARABALI',
          img: 'https://digitalhub.fifa.com/transform/9e9ae1f1-0b86-4a9b-bf62-8a254c161f3a/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Monica RAMOS',
          img: 'https://digitalhub.fifa.com/transform/669ea03d-f9ae-4fdb-a7a3-a677ede89a40/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Daniela CARACAS',
          img: 'https://digitalhub.fifa.com/transform/ffdd7e2d-44f3-467c-b320-0f951da27d86/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Diana OSPINA GARCIA',
          img: 'https://digitalhub.fifa.com/transform/34e3d0e7-d8f7-421c-856f-46b2cab93ccd/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lorena BEDOYA DURANGO',
          img: 'https://digitalhub.fifa.com/transform/e31ac07f-cfef-4840-ab2a-43f7f580e418/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Daniela MONTOYA',
          img: 'https://digitalhub.fifa.com/transform/d8be0427-1fd6-4f30-bdb9-a0d046945040/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maria Camila REYES',
          img: 'https://digitalhub.fifa.com/transform/9dade575-7e1d-4813-b97c-4981e3c0e94c/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Marcela RESTREPO',
          img: 'https://digitalhub.fifa.com/transform/df7df1ba-6648-4849-a270-77d99b6585d9/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Leicy SANTOS',
          img: 'https://digitalhub.fifa.com/transform/9b2d8b2d-a4b4-46c1-bb2b-ae9524488a6d/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lady ANDRADE',
          img: 'https://digitalhub.fifa.com/transform/04dbe55d-e3ba-462e-94c8-b15236eab3f2/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Mayra RAMIREZ',
          img: 'https://digitalhub.fifa.com/transform/6ef3c4af-94e2-46d2-8af6-9e68d4dea350/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Catalina USME',
          img: 'https://digitalhub.fifa.com/transform/7102023a-8cad-46fa-a86a-6e8ab85ddc68/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Linda CAICEDO',
          img: 'https://digitalhub.fifa.com/transform/a570d251-7c82-4129-9f69-ec93891fac1c/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ivonne CHACON',
          img: 'https://digitalhub.fifa.com/transform/985f8270-f30c-437e-b8c1-0985dce12776/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Elexa BAHR',
          img: 'https://digitalhub.fifa.com/transform/9d0de430-af46-43f6-b853-377d7ceffe9a/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Nelson ABADIA',
        img: 'https://digitalhub.fifa.com/transform/928acc20-6437-44fb-bd05-5c443a25d448/Colombia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    code: 'CRC',
    region: 'Americas',
    population: 5094114,
    flag: 'https://flagcdn.com/cr.svg',
    players: {
      goalkeeper: [
        {
          name: 'Genesis PEREZ',
          img: 'https://digitalhub.fifa.com/transform/71b98f36-cdd9-4271-aec9-4e3ff02b0f24/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Priscilla TAPIA',
          img: 'https://digitalhub.fifa.com/transform/e66aad9b-f36c-49e7-aba9-f0d3225c09bc/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Daniela SOLERA',
          img: 'https://digitalhub.fifa.com/transform/90c2e9e4-ba4b-47ff-8a4a-44ab8fd9b6fa/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Gabriela GUILLEN',
          img: 'https://digitalhub.fifa.com/transform/6a526fc7-b11b-424a-8283-d4588ceff196/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maria Paula COTO',
          img: 'https://digitalhub.fifa.com/transform/5497de12-ca86-42f5-93f4-36c49e734edd/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mariana BENAVIDES',
          img: 'https://digitalhub.fifa.com/transform/bc367ca9-7b08-4623-b485-ac88294fcb9a/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Valeria DEL CAMPO GUTIERREZ',
          img: 'https://digitalhub.fifa.com/transform/f6c44fdf-bda2-438d-b1b7-926cf9684f8a/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Carol SANCHEZ',
          img: 'https://digitalhub.fifa.com/transform/34f5ca59-6e72-4f59-acd7-84990a1c2ba3/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maria Paula ELIZONDO',
          img: 'https://digitalhub.fifa.com/transform/fc20edb0-1492-4064-bc0f-de0e0d463b71/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Emilie VALENCIANO',
          img: 'https://digitalhub.fifa.com/transform/a6f4fe1b-3eaf-48de-954c-d4c03d8f2af3/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Fabiola VILLALOBOS',
          img: 'https://digitalhub.fifa.com/transform/a67d64e0-90d5-4aaf-8d43-0e4dc4a6be07/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Melissa HERRERA',
          img: 'https://digitalhub.fifa.com/transform/9d813dfc-b3cc-4ee6-a706-13c76bc604d1/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mariela CAMPOS',
          img: 'https://digitalhub.fifa.com/transform/8ad22149-768e-4e4c-906a-f696d8c0153f/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Gloriana VILLALOBOS',
          img: 'https://digitalhub.fifa.com/transform/0e43abe8-dcea-4826-9342-61bdbbb653c8/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Raquel RODRIGUEZ',
          img: 'https://digitalhub.fifa.com/transform/dd8c2d81-b34c-459b-a8b1-7da315487fda/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Priscilla CHINCHILLA',
          img: 'https://digitalhub.fifa.com/transform/f1aa7b77-41bb-44b1-a916-8abc1ad5de0f/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Cristin GRANADOS',
          img: 'https://digitalhub.fifa.com/transform/81e11d0b-00ce-4a1c-a575-e1226ba51e05/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katherine ALVARADO',
          img: 'https://digitalhub.fifa.com/transform/3aa4a8a3-5e13-4a7f-b0b4-39236b522975/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alexandra PINELL',
          img: 'https://digitalhub.fifa.com/transform/1ef23514-2426-4073-b782-b0de29573670/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sheika SCOTT',
          img: 'https://digitalhub.fifa.com/transform/5f338ae8-f08b-460e-b12f-c0ec54ba7b60/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Maria Paula SALAS',
          img: 'https://digitalhub.fifa.com/transform/a83c0051-d232-431e-bd30-37929e8bcf83/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sofia VARELA',
          img: 'https://digitalhub.fifa.com/transform/e2e2effe-cc81-4665-ace2-1f17cc6ca968/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Catalina ESTRADA',
          img: 'https://digitalhub.fifa.com/transform/604cd1e8-aef7-4e61-abc3-a15d37c11321/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Amelia VALVERDE',
        img: 'https://digitalhub.fifa.com/transform/af8d7634-5986-4d77-8e0f-59c2e571e8e0/Costa-Rica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    code: 'DNK',
    region: 'Europe',
    population: 5831404,
    flag: 'https://flagcdn.com/dk.svg',
    players: {
      goalkeeper: [
        {
          name: 'Lene CHRISTENSEN',
          img: 'https://digitalhub.fifa.com/transform/e37c4224-b310-4620-9d1e-9ed521ff5e6e/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kathrine LARSEN',
          img: 'https://digitalhub.fifa.com/transform/af59d424-c0df-4da8-86b0-60621d0db6d6/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maja BAY',
          img: 'https://digitalhub.fifa.com/transform/8d37e74c-a9b5-4497-b514-549ae5f6172e/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Stine BALLISAGER',
          img: 'https://digitalhub.fifa.com/transform/b0465146-d5c7-45a2-9c3b-d082de494cf0/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rikke SEVECKE',
          img: 'https://digitalhub.fifa.com/transform/fa69d72e-3a28-4a4d-a0ea-a6ff6b3d6c9f/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Simone BOYE',
          img: 'https://digitalhub.fifa.com/transform/fb692a78-4f76-4ce9-bef7-dca076fdea16/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katrine VEJE',
          img: 'https://digitalhub.fifa.com/transform/a6ba6ce2-1bbf-4fbd-8c95-5b5ea2e9b53d/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sara THRIGE',
          img: 'https://digitalhub.fifa.com/transform/ee78757c-1054-43c3-91d6-b891fe308f1c/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Luna GEVITZ',
          img: 'https://digitalhub.fifa.com/transform/0871a621-b8bc-4a97-9af8-16c4804f94a6/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Janni THOMSEN',
          img: 'https://digitalhub.fifa.com/transform/af03445e-3715-4021-9e5f-f277cb4c42e2/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sofie SVAVA',
          img: 'https://digitalhub.fifa.com/transform/6bf05349-9ed8-44aa-8d12-1291a1b1b0ca/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Josefine HASBO',
          img: 'https://digitalhub.fifa.com/transform/705cbd1a-360f-4e5e-a4b4-52795d5fdf2a/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Karen HOLMGAARD',
          img: 'https://digitalhub.fifa.com/transform/6c998b25-79be-4293-98ac-54455d743947/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sanne TROELSGAARD',
          img: 'https://digitalhub.fifa.com/transform/df014c58-3cbd-4213-9995-5182c632bb00/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Emma SNERLE',
          img: 'https://digitalhub.fifa.com/transform/932dc497-75a5-410a-a8fe-061f4ee3484d/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kathrine KUHL',
          img: 'https://digitalhub.fifa.com/transform/ddbe1541-161d-4963-92be-87f4d7894f9f/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nicoline SORENSEN',
          img: 'https://digitalhub.fifa.com/transform/4c1b2a95-c18f-476e-9cc7-eb069f00b0f5/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Frederikke THOGERSEN',
          img: 'https://digitalhub.fifa.com/transform/4be72d32-d2ab-40e4-b737-50ed0df9c8aa/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Amalie VANGSGAARD',
          img: 'https://digitalhub.fifa.com/transform/fadcba54-de18-42c9-b996-a097c1ed944e/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Pernille HARDER',
          img: 'https://digitalhub.fifa.com/transform/0bcf50bf-2ea1-4f83-8de2-4e44c80f92e4/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rikke Marie MADSEN',
          img: 'https://digitalhub.fifa.com/transform/8bed17dc-fb49-4086-8311-c4f5ff41a602/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Signe BRUUN',
          img: 'https://digitalhub.fifa.com/transform/99d9d5a9-1044-4d4e-9bea-03ae5afeb397/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mille GEJL',
          img: 'https://digitalhub.fifa.com/transform/254015e0-ac52-4b01-8645-6a3d7e6b7ee4/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Lars SONDERGAARD',
        img: 'https://digitalhub.fifa.com/transform/0bb39e2b-fcda-4605-914e-17e0c0d872c0/Denmark-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'England',
    capital: 'London',
    code: 'ENG',
    region: 'Europe',
    population: 67215293,
    flag: 'https://flagcdn.com/gb.svg',
    players: {
      goalkeeper: [
        {
          name: 'Mary EARPS',
          img: 'https://digitalhub.fifa.com/transform/a3fc994b-a1d6-4eb8-aecb-f13d0eca5a50/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hannah HAMPTON',
          img: 'https://digitalhub.fifa.com/transform/94e99fae-88b7-420b-81d6-52c1ed69997c/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ellie ROEBUCK',
          img: 'https://digitalhub.fifa.com/transform/a2f4abc4-56f4-4e05-bc27-ca9173afa7eb/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Lucy BRONZE',
          img: 'https://digitalhub.fifa.com/transform/56844788-b06c-4466-a47e-0709b94272b8/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Niamh CHARLES',
          img: 'https://digitalhub.fifa.com/transform/43cc1516-d9ad-4b3e-86f3-9502ad81e6c5/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alex GREENWOOD',
          img: 'https://digitalhub.fifa.com/transform/b84f5e45-1dcf-4144-8d9a-340fe9efd1fc/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Millie BRIGHT',
          img: 'https://digitalhub.fifa.com/transform/1ca89ec7-7ad7-4924-a08f-9cab1558d5ac/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lotte WUBBEN-MOY',
          img: 'https://digitalhub.fifa.com/transform/fd9125d7-728a-4d4f-9761-59a3eab22976/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Esme MORGAN',
          img: 'https://digitalhub.fifa.com/transform/43ac1fc4-bc3f-4004-ba83-5eb559129d17/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jessica CARTER',
          img: 'https://digitalhub.fifa.com/transform/7703add9-2be3-4cad-990d-c7a0478b923d/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Keira WALSH',
          img: 'https://digitalhub.fifa.com/transform/9ba4386a-2f31-4e8a-8b02-5ed18c469119/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Georgia STANWAY',
          img: 'https://digitalhub.fifa.com/transform/c2249f03-be7e-4c53-ac27-0670c0d466d7/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ella TOONE',
          img: 'https://digitalhub.fifa.com/transform/904a8f03-b080-49b7-a428-af220d36bace/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jordan NOBBS',
          img: 'https://digitalhub.fifa.com/transform/d5bfd148-1c8e-4919-9e5e-2e51bc351b3a/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Laura COOMBS',
          img: 'https://digitalhub.fifa.com/transform/b15eb9a8-5833-48f5-a5df-5f7cdb477326/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katie ZELEM',
          img: 'https://digitalhub.fifa.com/transform/b545f243-a2fe-4fad-b5df-959e20b3e727/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Lauren JAMES',
          img: 'https://digitalhub.fifa.com/transform/13aaa497-647c-4c84-a1e2-dbe21d7eb16f/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rachel DALY',
          img: 'https://digitalhub.fifa.com/transform/6e91b1fd-72fc-4430-a1b8-6bfe1892678b/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lauren HEMP',
          img: 'https://digitalhub.fifa.com/transform/b8e7098f-806d-4baa-83e7-752a2cae3ee4/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Chloe KELLY',
          img: 'https://digitalhub.fifa.com/transform/03440caa-27fe-4401-849e-bf6e8f8a91e9/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Beth ENGLAND',
          img: 'https://digitalhub.fifa.com/transform/5e18795e-9f03-45fd-a425-7bae4c1537b1/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katie ROBINSON',
          img: 'https://digitalhub.fifa.com/transform/a0876116-6318-4ec1-b025-efa87292a378/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alessia RUSSO',
          img: 'https://digitalhub.fifa.com/transform/7c44c789-389e-41f9-bf1b-3c53a4eee9d8/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Sarina Wiegman-Glotzbach',
        img: 'https://digitalhub.fifa.com/transform/47a5d8df-25d9-4236-b182-c0f5a695fce7/England-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'France',
    capital: 'Paris',
    code: 'FRA',
    region: 'Europe',
    population: 67391582,
    flag: 'https://flagcdn.com/fr.svg',
    players: {
      goalkeeper: [
        {
          name: 'Solene DURAND',
          img: 'https://digitalhub.fifa.com/transform/5897eaf3-7ef7-4c7a-9588-25e7a507bef1/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Pauline PEYRAUD-MAGNIN',
          img: 'https://digitalhub.fifa.com/transform/03ddb834-6e71-464d-b2d7-c5db6d3566c8/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Constance PICAUD',
          img: 'https://digitalhub.fifa.com/transform/393d52c3-18ce-4a2b-bf88-4458b3b4c145/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Maelle LAKRAR',
          img: 'https://digitalhub.fifa.com/transform/e6a7c8d5-ea00-4d86-a513-a5249629fa78/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Wendie RENARD',
          img: 'https://digitalhub.fifa.com/transform/17c90575-b3d0-4838-b17b-caf70979948f/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Elisa DE ALMEIDA',
          img: 'https://digitalhub.fifa.com/transform/ce1c0525-3969-4b15-bc72-3a1db104381f/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sakina KARCHAOUI',
          img: 'https://digitalhub.fifa.com/transform/3684be0d-ebfb-491e-a552-87de3d793a90/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Selma BACHA',
          img: 'https://digitalhub.fifa.com/transform/d56f07fb-ede7-455a-83d6-26dc8d081032/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Aissatou TOUNKARA',
          img: 'https://digitalhub.fifa.com/transform/a85904cd-1cdc-4f42-8ea9-284fd4576679/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Estelle CASCARINO',
          img: 'https://digitalhub.fifa.com/transform/28e99667-e3b7-4654-a929-016253776d97/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Eve PERISSET',
          img: 'https://digitalhub.fifa.com/transform/eee68f73-a728-4004-b3b2-cc6d03418d10/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Laurina FAZER',
          img: 'https://digitalhub.fifa.com/transform/e289a921-6043-4282-b3d1-abbb0115cfeb/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sandie TOLETTI',
          img: 'https://digitalhub.fifa.com/transform/e4b86efe-c1d6-4e2d-98e8-af9e12fd3063/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Grace GEYORO',
          img: 'https://digitalhub.fifa.com/transform/ee8e2bf6-e20e-4aad-9902-e3f856262d14/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Amel MAJRI',
          img: 'https://digitalhub.fifa.com/transform/a4fab148-945a-4b49-9b67-a737f4d7bc59/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kenza DALI',
          img: 'https://digitalhub.fifa.com/transform/b85b335e-356d-42ff-9664-11da11d5e922/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lea LE GARREC',
          img: 'https://digitalhub.fifa.com/transform/0c23a323-9f65-4410-949f-9cae40bda06b/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Eugenie LE SOMMER',
          img: 'https://digitalhub.fifa.com/transform/48da9d41-8ead-4948-a02e-34bc8c004adb/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kadidiatou DIANI',
          img: 'https://digitalhub.fifa.com/transform/ce1f36e9-52f6-4520-b4d0-79a8dcf64c18/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Clara MATEO',
          img: 'https://digitalhub.fifa.com/transform/c122d2b8-3521-4958-8b65-e5b411d1dbe1/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Viviane ASSEYI',
          img: 'https://digitalhub.fifa.com/transform/d0da548b-3f38-4931-8419-1fee96fcb014/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Naomie FELLER',
          img: 'https://digitalhub.fifa.com/transform/f4026921-fb02-4373-ab20-55fae576626f/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Vicki BECHO',
          img: 'https://digitalhub.fifa.com/transform/957da7a1-d0d3-4ac8-9bb2-8a560ee646cc/France-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Herve RENARD',
        img: 'https://digitalhub.fifa.com/transform/e49439b0-9d41-4442-8caa-0dde929fca3a/RENARD-Herve-296787?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    code: 'GER',
    region: 'Europe',
    population: 83240525,
    flag: 'https://flagcdn.com/de.svg',
    players: {
      goalkeeper: [
        {
          name: 'Merle FROHMS',
          img: 'https://digitalhub.fifa.com/transform/266f1aca-8dde-44b6-8a7e-c14cd683f5e4/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ann-Katrin BERGER',
          img: 'https://digitalhub.fifa.com/transform/7301c4f2-8931-49fb-ac46-7c607ef6ef03/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Stina JOHANNES',
          img: 'https://digitalhub.fifa.com/transform/fa524fde-144c-4d8e-bba6-1c8122ff87c5/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Kathrin HENDRICH',
          img: 'https://digitalhub.fifa.com/transform/cfc2cac0-16d6-4b28-817f-3f2344d6a27e/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sophia KLEINHERNE',
          img: 'https://digitalhub.fifa.com/transform/ab601fc6-62ad-49e5-a445-48cd89bf8d7b/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Marina HEGERING',
          img: 'https://digitalhub.fifa.com/transform/8b8a1733-bebe-4656-a402-12d2dfb68138/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sjoeke NUESKEN',
          img: 'https://digitalhub.fifa.com/transform/63267ee1-9fe1-48f0-8c0a-ad51b7dd870f/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Felicitas RAUCH',
          img: 'https://digitalhub.fifa.com/transform/f16f5df4-35bc-4ee6-bc2e-2215344f7eb0/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sara DOORSOUN',
          img: 'https://digitalhub.fifa.com/transform/f9614814-923c-44f6-9d13-19fac2f4e2d0/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Chantal HAGEL',
          img: 'https://digitalhub.fifa.com/transform/5b8e6edc-0f7b-415f-85fe-4adb9fae6836/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lena OBERDORF',
          img: 'https://digitalhub.fifa.com/transform/778fe268-5515-4fd2-9870-9605f293fd2a/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sydney LOHMANN',
          img: 'https://digitalhub.fifa.com/transform/db90d554-715d-4916-9451-ab20bda6b19b/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Svenja HUTH',
          img: 'https://digitalhub.fifa.com/transform/4afc6de1-214b-4d0e-a209-797483126c2a/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sara DAEBRITZ',
          img: 'https://digitalhub.fifa.com/transform/fae46a7f-f8f1-4ac9-9b22-2093116fcf63/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lena LATTWEIN',
          img: 'https://digitalhub.fifa.com/transform/6734d82f-1e57-48e5-9671-3cd2c6f7eed9/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Melanie LEUPOLZ',
          img: 'https://digitalhub.fifa.com/transform/b1c5e77a-126f-4ef7-a2d5-a32ccd625152/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Klara BUEHL',
          img: 'https://digitalhub.fifa.com/transform/23137ff3-8722-4db6-ba35-fb986cc42349/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lina MAGULL',
          img: 'https://digitalhub.fifa.com/transform/9dc7ba89-657a-46fd-9c2e-801d7008d40c/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jule BRAND',
          img: 'https://digitalhub.fifa.com/transform/c0d94a93-0cb0-4bd4-9b1d-baa947748bd4/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Lea SCHUELLER',
          img: 'https://digitalhub.fifa.com/transform/4a6df28e-6f06-45f6-b6ea-e9c675502530/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Laura FREIGANG',
          img: 'https://digitalhub.fifa.com/transform/d2392e54-8135-4bcf-9b46-6224d6bc8e90/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alexandra POPP',
          img: 'https://digitalhub.fifa.com/transform/03fc75a8-3d4d-45e0-98a3-328efb432419/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nicole ANYOMI',
          img: 'https://digitalhub.fifa.com/transform/8b265c2e-7c9c-4aee-838f-c5c733390ba4/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Martina Voss-Tecklenburg',
        img: 'https://digitalhub.fifa.com/transform/df806782-1092-4e6e-9fdf-d12cb6993a55/Germany-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    code: 'HAI',
    region: 'Americas',
    population: 11402533,
    flag: 'https://flagcdn.com/ht.svg',
    players: {
      goalkeeper: [
        {
          name: 'Kerly THEUS',
          img: 'https://digitalhub.fifa.com/transform/b64c61f4-eaa3-4342-85c1-3ecbcf39988d/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nahomie AMBROISE',
          img: 'https://digitalhub.fifa.com/transform/f572a53a-2fee-46f3-9e5a-6be55a949ff8/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lara LARCO',
          img: 'https://digitalhub.fifa.com/transform/514a91e4-24b6-4a93-a9f7-f8ad1b28f1b3/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Chelsea SURPRIS',
          img: 'https://digitalhub.fifa.com/transform/9505db79-b0d5-4327-b8ae-1c586ddcbe07/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jennyfer LIMAGE',
          img: 'https://digitalhub.fifa.com/transform/d1700089-871a-4055-8527-de70b09555b1/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tabita JOSEPH',
          img: 'https://digitalhub.fifa.com/transform/e91155e2-5554-4934-8032-86671909e53a/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maudeline MORYL',
          img: 'https://digitalhub.fifa.com/transform/474cae04-75ac-4084-ae2d-5d8140ce3fdb/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Betina PETIT-FRERE',
          img: 'https://digitalhub.fifa.com/transform/f01e4b44-7e8b-44ed-ba57-3fa5aacfc2c4/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Esthericove JOSEPH',
          img: 'https://digitalhub.fifa.com/transform/c0696fed-2417-4b75-8942-d88a59254e7f/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Milan PIERRE-JEROME',
          img: 'https://digitalhub.fifa.com/transform/0380869f-e817-4e7d-b240-4717d806c08f/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kethna LOUIS',
          img: 'https://digitalhub.fifa.com/transform/fb28ca9b-464e-45f0-946a-217f6ce43287/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ruthny MATHURIN',
          img: 'https://digitalhub.fifa.com/transform/76c69200-8d68-4320-b577-06ab5ba4ffb9/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Melchie DUMORNAY',
          img: 'https://digitalhub.fifa.com/transform/8c0e4be6-67f1-4956-82c2-0c209048d666/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Danielle ETIENNE',
          img: 'https://digitalhub.fifa.com/transform/8978230d-23ca-4919-a241-2f40e1c6488b/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sherly JEUDY',
          img: 'https://digitalhub.fifa.com/transform/31ee07b3-c9b9-4d64-848d-db92bbd246a9/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Noa GANTHIER',
          img: 'https://digitalhub.fifa.com/transform/e6987467-f2d7-4083-bc6e-821d45bba8d8/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Dayana PIERRE-LOUIS',
          img: 'https://digitalhub.fifa.com/transform/0a7dd434-887a-4813-ab32-c4c08993324d/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Batcheba LOUIS',
          img: 'https://digitalhub.fifa.com/transform/03c3db3d-a20d-4d04-a394-1f109045ec2a/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nerilia MONDESIR',
          img: 'https://digitalhub.fifa.com/transform/62a9df6c-77bc-4729-91e0-905fa1632732/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Roseline ELOISSAINT',
          img: 'https://digitalhub.fifa.com/transform/489e8c2d-3861-4851-a3ca-78e058414510/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Darlina JOSEPH',
          img: 'https://digitalhub.fifa.com/transform/4388120c-f5fd-4a3e-b170-48ca4081f522/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Shwendesky JOSEPH',
          img: 'https://digitalhub.fifa.com/transform/d376951d-592f-499a-b73c-617c6c9f4f17/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Roselord BORGELLA',
          img: 'https://digitalhub.fifa.com/transform/ef2228fc-6d50-4c52-a150-f233e2d75e42/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Nicolas Delépine',
        img: 'https://digitalhub.fifa.com/transform/5bedceba-e49e-4642-9019-4b49b606989c/Haiti-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Italy',
    capital: 'Rome',
    code: 'ITA',
    region: 'Europe',
    population: 59554023,
    flag: 'https://flagcdn.com/it.svg',
    players: {
      goalkeeper: [
        {
          name: 'Laura GIULIANI',
          img: 'https://digitalhub.fifa.com/transform/b2cb8b70-c209-4221-8baa-3fc1d2af16d2/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rachele BALDI',
          img: 'https://digitalhub.fifa.com/transform/2d9fff7f-a8e0-425e-a0d8-27c1c963fce6/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Francesca DURANTE',
          img: 'https://digitalhub.fifa.com/transform/f6d47b37-ed5c-454d-b9f8-67cac1be3304/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Benedetta ORSI',
          img: 'https://digitalhub.fifa.com/transform/f26c5037-b593-476a-b2c9-f4cd8f9a46ba/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lucia DI GUGLIELMO',
          img: 'https://digitalhub.fifa.com/transform/44522504-dcf8-4bb8-81f4-7d9e2389e0e0/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Elena LINARI',
          img: 'https://digitalhub.fifa.com/transform/fe57ca09-0e03-48f6-829c-e06b9cf38845/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Elisa BARTOLI',
          img: 'https://digitalhub.fifa.com/transform/0729cdd0-fda8-4b4f-a321-2e94f5c3786b/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lisa BOATTIN',
          img: 'https://digitalhub.fifa.com/transform/8c577966-84f9-430a-8a9a-e34c3eba6f2c/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Martina LENZINI',
          img: 'https://digitalhub.fifa.com/transform/14d5c09e-287a-493b-944e-c060ad60af7d/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Cecilia SALVAI',
          img: 'https://digitalhub.fifa.com/transform/400d1aa0-606d-4872-bd35-b8b015fc0da1/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Emma SEVERINI',
          img: 'https://digitalhub.fifa.com/transform/cd0aea70-1419-4753-adb2-046f1fa0fb22/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Manuela GIUGLIANO',
          img: 'https://digitalhub.fifa.com/transform/4bc15e32-ef8e-4a84-9247-317631171087/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Giulia DRAGONI',
          img: 'https://digitalhub.fifa.com/transform/0bf9e6d5-b43a-44a7-993f-b96f2ff714b9/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Arianna CARUSO',
          img: 'https://digitalhub.fifa.com/transform/619917db-6068-4218-9c6e-4ebaef1969cd/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Giada GREGGI',
          img: 'https://digitalhub.fifa.com/transform/001ef0bd-1d69-408f-8f54-846cdb102185/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Valentina CERNOIA',
          img: 'https://digitalhub.fifa.com/transform/4c8b4c46-5e22-4d7c-8217-7ae5be37b661/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Sofia CANTORE',
          img: 'https://digitalhub.fifa.com/transform/910da97b-6b2a-4c66-ba9d-d9933f940c6e/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Barbara BONANSEA',
          img: 'https://digitalhub.fifa.com/transform/691f30d0-89b5-415f-95e2-b79f05adbfc0/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Valentina GIACINTI',
          img: 'https://digitalhub.fifa.com/transform/a4d8c33e-1373-4a2a-b547-3b89fe8a6145/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Cristiana GIRELLI',
          img: 'https://digitalhub.fifa.com/transform/bb310606-9e8d-4770-a261-264afc71395c/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Benedetta GLIONNA',
          img: 'https://digitalhub.fifa.com/transform/33dd9ef0-7293-474b-9846-a5ea21958ca0/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Chiara BECCARI',
          img: 'https://digitalhub.fifa.com/transform/6d6e0a2e-e677-4502-abb8-5d165d6e283c/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Annamaria SERTURINI',
          img: 'https://digitalhub.fifa.com/transform/0dc5f81d-0a64-4c16-84a7-fa47c095e112/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Milena Bertolini',
        img: 'https://digitalhub.fifa.com/transform/ad9236a4-6d19-4b52-a03e-5dcccc48f3c8/Italy-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    code: 'JAM',
    region: 'Americas',
    population: 2961161,
    flag: 'https://flagcdn.com/jm.svg',
    players: {
      goalkeeper: [
        {
          name: 'Sydney SCHNEIDER',
          img: 'https://digitalhub.fifa.com/transform/e4454f54-8e73-4136-864b-da936b3682c8/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rebecca SPENCER',
          img: 'https://digitalhub.fifa.com/transform/2a068749-92e8-4cca-a98e-23eddf902b41/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Liya BROOKS',
          img: 'https://digitalhub.fifa.com/transform/8a7fce2d-13c1-41eb-85ae-6dbb62a36809/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Vyan SAMPSON',
          img: 'https://digitalhub.fifa.com/transform/99948dd5-3e19-4a0e-b494-133e494ace11/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Chantelle SWABY',
          img: 'https://digitalhub.fifa.com/transform/9d4ceec6-c744-4ed7-850a-06fad6767f03/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Konya PLUMMER',
          img: 'https://digitalhub.fifa.com/transform/ed2e9c1a-cb27-4bb5-b8bd-f46a1b4f4e87/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Deneisha BLACKWOOD',
          img: 'https://digitalhub.fifa.com/transform/487fb877-8502-4044-bd5f-ead423a6bcf6/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Allyson SWABY',
          img: 'https://digitalhub.fifa.com/transform/c1c3e87d-ab74-4d6e-b3f3-8c130921306d/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Solai WASHINGTON',
          img: 'https://digitalhub.fifa.com/transform/d219776c-f7fb-4b08-ab95-e383edabc571/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Havana SOLAUN',
          img: 'https://digitalhub.fifa.com/transform/7d3b0184-8a63-43d0-a7f4-cf360e1d7d22/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Peyton McNAMARA',
          img: 'https://digitalhub.fifa.com/transform/a883ae6a-e261-473b-b577-a8586520143b/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Drew SPENCE',
          img: 'https://digitalhub.fifa.com/transform/a015b2de-d262-4004-b6fa-23b3aeb6e81b/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jody BROWN',
          img: 'https://digitalhub.fifa.com/transform/44cd8a3d-afc9-48e1-9c93-053b3e34f745/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kalyssa VAN ZANTEN',
          img: 'https://digitalhub.fifa.com/transform/e63c5983-57d8-47bc-aede-6becf0520c56/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tiffany CAMERON',
          img: 'https://digitalhub.fifa.com/transform/fcba999b-6362-4af2-9b21-f50f6da1bcd7/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Paige BAILEY-GAYLE',
          img: 'https://digitalhub.fifa.com/transform/fcbbc58c-d373-497b-8e05-b6f64864c447/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Trudi CARTER',
          img: 'https://digitalhub.fifa.com/transform/11b709cb-cd1c-45fa-beff-1159cba77314/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tiernny WILTSHIRE',
          img: 'https://digitalhub.fifa.com/transform/bf2e9cc5-3e01-42b5-86c3-9989858e546e/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Atlanta PRIMUS',
          img: 'https://digitalhub.fifa.com/transform/027ef2da-c8f2-4e1d-bd38-2e16cf62ba58/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kayla McKENNA',
          img: 'https://digitalhub.fifa.com/transform/ed9a9b98-8094-42e3-a87d-c70026dff8a3/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Kameron SIMMONDS',
          img: 'https://digitalhub.fifa.com/transform/76a14d4e-c113-4d9c-8bb1-f1dd45c903f7/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Khadija SHAW',
          img: 'https://digitalhub.fifa.com/transform/0e2ff671-673c-4da1-96f0-74f0a6f9d6c2/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Cheyna MATTHEWS',
          img: 'https://digitalhub.fifa.com/transform/98a11fcb-9c70-41ae-8abc-96cff18c4635/Jamaica-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Lorne DONALDSON',
        img: 'https://digitalhub.fifa.com/transform/4e276dc9-2567-42f2-913c-e6850af0ce65/DONALDSON-Lorne-48674?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    code: 'JPN',
    region: 'Asia',
    population: 125836021,
    flag: 'https://flagcdn.com/jp.svg',
    players: {
      goalkeeper: [
        {
          name: 'Ayaka YAMASHITA',
          img: 'https://digitalhub.fifa.com/transform/cbb8b1fe-e440-40e8-ab83-c061b14ed726/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Momoko TANAKA',
          img: 'https://digitalhub.fifa.com/transform/48b61ab0-f135-4ff5-ae79-39d06551ba4e/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Chika HIRAO',
          img: 'https://digitalhub.fifa.com/transform/ac8d2ec8-c817-450e-82d9-f48489848f8b/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Risa SHIMIZU',
          img: 'https://digitalhub.fifa.com/transform/9892b389-377f-47bf-bc5e-2092b00b69cd/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Moeka MINAMI',
          img: 'https://digitalhub.fifa.com/transform/a2aa3eba-a079-47d3-b532-330fee96e217/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Saki KUMAGAI',
          img: 'https://digitalhub.fifa.com/transform/feb282b8-3880-48b1-a7f6-0e7ac9c16353/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Shiori MIYAKE',
          img: 'https://digitalhub.fifa.com/transform/acc3b48a-1dc7-417b-bbd0-dd61421b253e/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hana TAKAHASHI',
          img: 'https://digitalhub.fifa.com/transform/d28f4add-c51e-4044-b3e5-3e78d8cc3455/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Miyabi MORIYA',
          img: 'https://digitalhub.fifa.com/transform/0c23881a-2e02-41ba-b2dc-cba3290bdc70/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rion ISHIKAWA',
          img: 'https://digitalhub.fifa.com/transform/23fed033-ba71-4eb1-b06e-7e637683a002/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Hina SUGITA',
          img: 'https://digitalhub.fifa.com/transform/3f241225-49b0-4824-a2a3-979135106298/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hinata MIYAZAWA',
          img: 'https://digitalhub.fifa.com/transform/9596fe0d-92b5-4858-a8fd-ebe3972137d6/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hikaru NAOMOTO',
          img: 'https://digitalhub.fifa.com/transform/3725ea98-86c5-42a8-887f-34e69c814bbf/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Fuka NAGANO',
          img: 'https://digitalhub.fifa.com/transform/971485dc-202e-44e3-8387-a8b7b53ebfaf/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jun ENDO',
          img: 'https://digitalhub.fifa.com/transform/5ae3bb39-5ee1-4ae9-876d-a8488a5da9a2/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Yui HASEGAWA',
          img: 'https://digitalhub.fifa.com/transform/027d3428-dd19-41a5-9957-f5fcd095111b/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Aoba FUJINO',
          img: 'https://digitalhub.fifa.com/transform/9d6027e9-4865-4035-b16d-223519f3c5e5/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Honoka HAYASHI',
          img: 'https://digitalhub.fifa.com/transform/acb15495-afdc-45c3-b23e-47681a80df6c/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kiko SEIKE',
          img: 'https://digitalhub.fifa.com/transform/55d7d3ff-251a-4792-8806-a8586012f718/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Riko UEKI',
          img: 'https://digitalhub.fifa.com/transform/2c2a4b23-9e68-493c-b822-9b3924da0a3c/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mina TANAKA',
          img: 'https://digitalhub.fifa.com/transform/bcf6ea71-8acb-404f-879b-9f613b419830/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maika HAMANO',
          img: 'https://digitalhub.fifa.com/transform/70c7e2c3-3cfb-4b3f-9e7f-1c4e368533ef/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Remina CHIBA',
          img: 'https://digitalhub.fifa.com/transform/76d0ee39-44be-4a19-9a3c-86e80439b38d/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Futoshi Ikeda',
        img: 'https://digitalhub.fifa.com/transform/100bbd1c-5e46-421b-a9c8-0943d7c2c012/Japan-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Korea Republic',
    capital: 'Seoul',
    code: 'KOR',
    region: 'Asia',
    population: 51780579,
    flag: 'https://flagcdn.com/kr.svg',
    players: {
      goalkeeper: [
        {
          name: 'YOON Younggeul',
          img: 'https://digitalhub.fifa.com/transform/b4b6df1c-6058-48b9-b844-aa93486c6d22/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'KIM Jungmi',
          img: 'https://digitalhub.fifa.com/transform/21611eb2-15e6-486f-9164-e5b925747a98/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'RYU Jisu',
          img: 'https://digitalhub.fifa.com/transform/8e81c7e7-f90b-4712-919f-f3de7e31a412/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'CHOO Hyojoo',
          img: 'https://digitalhub.fifa.com/transform/0ecb2700-b244-4e20-b0f4-8857fc33d3a0/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'HONG Hyeji',
          img: 'https://digitalhub.fifa.com/transform/20929501-f933-476d-aeec-eddd764ccc80/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'SHIM Seoyeon',
          img: 'https://digitalhub.fifa.com/transform/fe77fea9-d6c9-4d23-bbcc-b0b0c4d50bc8/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'LIM Seonjoo',
          img: 'https://digitalhub.fifa.com/transform/c19ea83a-8f74-4ce9-91cd-b7c70164a505/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'JANG Selgi',
          img: 'https://digitalhub.fifa.com/transform/da996530-a5d8-43fd-a69e-a77baf7fa443/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'LEE Youngju',
          img: 'https://digitalhub.fifa.com/transform/a9c7b3e2-c827-4362-a32a-3d654c7799d6/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'KIM Hyeri',
          img: 'https://digitalhub.fifa.com/transform/d4cfe554-07e3-4b87-ab16-c62d31d26119/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'KIM Yunji',
          img: 'https://digitalhub.fifa.com/transform/737bf4bd-e99f-4d6c-91b8-f8384552fc6b/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'CHO Sohyun',
          img: 'https://digitalhub.fifa.com/transform/d0f122af-45b5-4823-9d02-cc155125e276/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'LEE Geummin',
          img: 'https://digitalhub.fifa.com/transform/7d082810-b92c-4cf0-9bac-63427645cbb6/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'JI Soyun',
          img: 'https://digitalhub.fifa.com/transform/f0d74895-d963-47e6-96a4-5a6f6b68f39a/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'JEON Eunha',
          img: 'https://digitalhub.fifa.com/transform/373aa35b-38e9-4352-a8e1-102ffb74f53d/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'CHUN Garam',
          img: 'https://digitalhub.fifa.com/transform/b2c9db67-86ff-4998-ba3e-3b8077e699d6/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'BAE Yebin',
          img: '',
        },
      ],
      attacker: [
        {
          name: 'SON Hwayeon',
          img: 'https://digitalhub.fifa.com/transform/79cdace3-df90-43c9-b94f-d70bc300acb8/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'CHOE Yuri',
          img: 'https://digitalhub.fifa.com/transform/c0accf4b-b204-496b-ad81-00f46d05b1cc/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'MOON Mira',
          img: 'https://digitalhub.fifa.com/transform/459db0dc-9e7b-4a18-ba9a-32ee3a151002/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'PARK Eunsun',
          img: 'https://digitalhub.fifa.com/transform/9483026f-9831-4455-a153-e043e0e6c803/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'PHAIR Casey',
          img: 'https://digitalhub.fifa.com/transform/8d891e15-9b18-42fa-958e-a5a1c8a8e2ab/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'KANG Chaerim',
          img: 'https://digitalhub.fifa.com/transform/6a088b04-fc77-4739-89cc-06b1bf347275/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Colin Bell',
        img: 'https://digitalhub.fifa.com/transform/0be27d99-5aad-42b8-9224-55ff11741f26/Korea-Republic-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    code: 'MAR',
    region: 'Africa',
    population: 36910558,
    flag: 'https://flagcdn.com/ma.svg',
    players: {
      goalkeeper: [
        {
          name: 'Khadija ER-RMICHI',
          img: 'https://digitalhub.fifa.com/transform/54e1141a-96c3-48e7-9095-b67e4d40fa13/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Assia ZOUHAIR',
          img: 'https://digitalhub.fifa.com/transform/b2b5b696-a485-46d7-943b-6e56ea315eed/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ines AROUAISSA',
          img: 'https://digitalhub.fifa.com/transform/1b24d935-8258-4d5c-bf97-d23c469d22b5/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Zineb REDOUANI',
          img: 'https://digitalhub.fifa.com/transform/8621fa06-2543-4500-a337-2a8725fd54db/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nouhaila BENZINA',
          img: 'https://digitalhub.fifa.com/transform/79857577-2046-44de-9a2f-e5896554a998/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nesryne EL CHAD',
          img: 'https://digitalhub.fifa.com/transform/633b71ee-8c98-4ac6-a12f-0f2ea34ea764/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Najat BADRI',
          img: 'https://digitalhub.fifa.com/transform/56d33445-0435-4491-a266-5265f2a5fbd2/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sabah SEGHIR',
          img: 'https://digitalhub.fifa.com/transform/6bcad76f-4d80-456b-96bd-ac62bd646614/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rkia MAZROUAI',
          img: 'https://digitalhub.fifa.com/transform/bcbbffe4-b90b-402c-8df3-a73bb9d5dc35/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hanane AIT EL HAJ',
          img: 'https://digitalhub.fifa.com/transform/c75d5676-4ae9-4ddb-b1d0-10d9e83b29a5/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Yasmin MRABET',
          img: 'https://digitalhub.fifa.com/transform/9411bd71-3d09-4345-8b12-cc170d452611/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Sarah KASSI',
          img: 'https://digitalhub.fifa.com/transform/2902f1e9-32ce-4b18-952c-dc68b7eeb602/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Elodie NAKKACH',
          img: 'https://digitalhub.fifa.com/transform/33a704cb-4ca8-4cd7-a851-d2bc0b623455/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Salma AMANI',
          img: 'https://digitalhub.fifa.com/transform/448e4c96-adb8-437f-8b52-934c08e3bdb2/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Anissa LAHMARI',
          img: 'https://digitalhub.fifa.com/transform/8cd6b0e2-3afc-430f-9348-571a1598f788/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kenza CHAPELLE',
          img: 'https://digitalhub.fifa.com/transform/54bc9a51-b2ef-4860-b875-939e5085d9a4/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Sofia BOUFTINI',
          img: 'https://digitalhub.fifa.com/transform/9b756f77-24f0-4b95-aa4e-0dcbe74ff953/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ghizlane CHEBBAK',
          img: 'https://digitalhub.fifa.com/transform/9d7ab756-cdad-4be1-8783-0a09c3cfd37e/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ibtissam JRAIDI',
          img: 'https://digitalhub.fifa.com/transform/bc5212d6-1745-48ad-81d8-7bec87bf6152/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Fatima TAGNAOUT',
          img: 'https://digitalhub.fifa.com/transform/68b556ab-ac95-45f5-a3f2-6c70675a0e38/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Fatima GHARBI',
          img: 'https://digitalhub.fifa.com/transform/b3ea81c0-d306-4630-9760-a789c584e9e9/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sakina OUZRAOUI',
          img: 'https://digitalhub.fifa.com/transform/a62fc59d-00f3-494b-8cba-345505e65d21/Morocco-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rosella AYANE',
          img: 'https://digitalhub.fifa.com/transform/d349ec43-2114-49e5-9576-d961d822c19b/AYANE-Rosella-467252-10G56J3?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Reynald Pedros',
        img: 'https://digitalhub.fifa.com/transform/5da963e1-d3eb-4f1c-bab8-36638372f244/PEDROS-Reynald-95651?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    code: 'NLD',
    region: 'Europe',
    population: 17441139,
    flag: 'https://flagcdn.com/nl.svg',
    players: {
      goalkeeper: [
        {
          name: 'Daphne VAN DOMSELAAR',
          img: 'https://digitalhub.fifa.com/transform/c67e979a-944a-46a1-ae23-3fff2ab5a2f3/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lize KOP',
          img: 'https://digitalhub.fifa.com/transform/1c186ced-7a87-4966-88b5-b31268f6db35/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jacintha WEIMAR',
          img: 'https://digitalhub.fifa.com/transform/f9084f29-3f5c-4c44-a450-4f2ec4f235ef/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Lynn WILMS',
          img: 'https://digitalhub.fifa.com/transform/0fa442f6-0dee-4bc9-8f64-3a4ecc279ddf/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Stefanie VAN DER GRAGT',
          img: 'https://digitalhub.fifa.com/transform/2f632638-99f4-484e-814a-66bceffa6fb9/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Aniek NOUWEN',
          img: 'https://digitalhub.fifa.com/transform/f020351e-0bf2-4907-ae95-cfc13f4dfafd/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Merel VAN DONGEN',
          img: 'https://digitalhub.fifa.com/transform/4ba99a47-7e4f-4ec5-acd9-abcdc41aec23/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Caitlin DIJKSTRA',
          img: 'https://digitalhub.fifa.com/transform/b8a4b8aa-3b02-46e8-b60f-42bdedab9fd6/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kerstin CASPARIJ',
          img: 'https://digitalhub.fifa.com/transform/2327b7ce-691a-4c29-a9c2-1322184bc48a/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Dominique JANSSEN',
          img: 'https://digitalhub.fifa.com/transform/f08c1558-771a-44b9-a88c-eab8705862b1/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Jill ROORD',
          img: 'https://digitalhub.fifa.com/transform/602ae17d-753e-459d-a932-7000fbcd2d92/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sherida SPITSE',
          img: 'https://digitalhub.fifa.com/transform/35a332ef-19f7-4c3b-9615-a5e680c33329/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Danielle VAN DE DONK',
          img: 'https://digitalhub.fifa.com/transform/9a8d74ab-d7c4-4872-95a3-cdc340240ed3/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jill BAIJINGS',
          img: 'https://digitalhub.fifa.com/transform/f7e33bb3-9b52-4470-b5f6-38f6c632afc6/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jackie GROENEN',
          img: 'https://digitalhub.fifa.com/transform/f80f576a-679a-4448-b966-34264040b420/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Victoria PELOVA',
          img: 'https://digitalhub.fifa.com/transform/8eaab075-cb4b-4845-ad6a-4e6a9190bb1f/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Wieke KAPTEIN',
          img: 'https://digitalhub.fifa.com/transform/b9bda4cf-2d5a-48e1-9e91-5228c8393460/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Damaris EGURROLA',
          img: 'https://digitalhub.fifa.com/transform/968bcdce-e0ea-4754-be53-2a22d2092ab6/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Lineth BEERENSTEYN',
          img: 'https://digitalhub.fifa.com/transform/ea6d8589-27b7-4c86-9b58-916658c0c887/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katja SNOEIJS',
          img: 'https://digitalhub.fifa.com/transform/16639cbf-61c3-4968-a267-40cdc9697e86/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lieke MARTENS',
          img: 'https://digitalhub.fifa.com/transform/df2e6e56-2ca1-4e58-9e70-65ca4d2aa82c/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Renate JANSEN',
          img: 'https://digitalhub.fifa.com/transform/51998ee1-b5ae-4098-aa3d-59ad7b3bfb9c/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Esmee BRUGTS',
          img: 'https://digitalhub.fifa.com/transform/e9b33e5c-a9d0-46d2-a90a-912fa33775f3/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Andries JONKER',
        img: 'https://digitalhub.fifa.com/transform/ed1274f3-92c4-4e82-ad31-253711602ed2/Netherlands-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    code: 'NZL',
    region: 'Oceania',
    population: 5084300,
    flag: 'https://flagcdn.com/nz.svg',
    players: {
      goalkeeper: [
        {
          name: 'Erin NAYLER',
          img: 'https://digitalhub.fifa.com/transform/18aac4c8-9a6b-4b93-aa8b-48dcbe653aac/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Victoria ESSON',
          img: 'https://digitalhub.fifa.com/transform/68f0963b-8308-479f-b7c9-9ad2b0ec48d0/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Anna LEAT',
          img: 'https://digitalhub.fifa.com/transform/07ba7a5f-64fe-491e-aec9-738fa6df8418/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Claudia BUNGE',
          img: 'https://digitalhub.fifa.com/transform/0ddb2ed6-c4a6-474c-adad-e46703eed98b/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'C.J. BOTT',
          img: 'https://digitalhub.fifa.com/transform/b7c5c211-8797-488e-90e3-1461c4992371/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Michaela FOSTER',
          img: 'https://digitalhub.fifa.com/transform/54c31b9b-4c56-42d7-86ec-c3a38e7eb22c/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ali RILEY',
          img: 'https://digitalhub.fifa.com/transform/0f7d4c92-8a9b-4090-a863-1321d5e6b821/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rebekah STOTT',
          img: 'https://digitalhub.fifa.com/transform/e7859941-e3c2-44c9-a5b5-b980fe346986/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katie BOWEN',
          img: 'https://digitalhub.fifa.com/transform/289da760-c30b-4d0c-9155-ddcae410b259/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Elizabeth ANTON',
          img: 'https://digitalhub.fifa.com/transform/088e7045-b056-48f2-b74c-b5ec8604e66b/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Ria PERCIVAL',
          img: 'https://digitalhub.fifa.com/transform/0a53d90c-aa31-4e88-a8d3-f32e94326645/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Malia STEINMETZ',
          img: 'https://digitalhub.fifa.com/transform/79acf504-d054-472f-b41b-dd0cca1f99cc/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Daisy CLEVERLEY',
          img: 'https://digitalhub.fifa.com/transform/256833e0-99e6-450a-9e12-30dd754ac9a6/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Annalie LONGO',
          img: 'https://digitalhub.fifa.com/transform/7084cafe-2ba1-4b14-9f18-5453efc265ef/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Olivia CHANCE',
          img: 'https://digitalhub.fifa.com/transform/52442774-4d97-40de-8d7b-051d08c371af/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Betsy HASSETT',
          img: 'https://digitalhub.fifa.com/transform/e7778cc3-0c6a-4ed3-808a-1e0ba4557e83/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Grace JALE',
          img: 'https://digitalhub.fifa.com/transform/54f43c30-ae30-4ce7-b3fc-88b4ea158dca/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Gabi RENNIE',
          img: 'https://digitalhub.fifa.com/transform/8cd12257-4514-4c06-87fa-0ecd2cb801d0/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Paige SATCHELL',
          img: 'https://digitalhub.fifa.com/transform/2a8a8ef7-4230-42ce-943e-dfa58202d64d/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jacqui HAND',
          img: 'https://digitalhub.fifa.com/transform/5cb26529-a305-4e20-8872-48f2abf22c7a/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hannah WILKINSON',
          img: 'https://digitalhub.fifa.com/transform/9aabeced-2747-4a02-ac3f-b3ef68a0b0fb/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Indiah-Paige RILEY',
          img: 'https://digitalhub.fifa.com/transform/56ea3cca-6964-42ad-9a21-50913437bb3e/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Milly CLEGG',
          img: 'https://digitalhub.fifa.com/transform/7650c7f9-9f14-4ec7-8581-5e89fd498fa6/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Jitka KLIMKOVA',
        img: 'https://digitalhub.fifa.com/transform/b6b99416-7102-4077-936b-5eaec5f701e3/New-Zealand-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    code: 'NGA',
    region: 'Africa',
    population: 206139587,
    flag: 'https://flagcdn.com/ng.svg',
    players: {
      goalkeeper: [
        {
          name: 'Tochukwu OLUEHI',
          img: 'https://digitalhub.fifa.com/transform/5cc52c87-f322-4e9e-b217-3f704bf025e9/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Chiamaka NNADOZIE',
          img: 'https://digitalhub.fifa.com/transform/8166ff21-ecd6-4161-9ca8-2621854d6658/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Zainab BALOGUN',
          img: 'https://digitalhub.fifa.com/transform/221165ff-f5d2-4e78-8794-7e2ac5fa076b/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Ashleigh PLUMPTRE',
          img: 'https://digitalhub.fifa.com/transform/6a780b76-e330-480d-916c-f2827e2881f2/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Osinachi OHALE',
          img: 'https://digitalhub.fifa.com/transform/4333d20d-04e9-45af-8ec0-237fde83110c/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Glory OGBONNA',
          img: 'https://digitalhub.fifa.com/transform/571539f7-e8f5-4c93-8c1f-472d85fa95af/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Onome EBI',
          img: 'https://digitalhub.fifa.com/transform/4ed9e40b-971f-4370-bcd9-692af04f8a8a/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Blessing DEMEHIN',
          img: 'https://digitalhub.fifa.com/transform/f0fbe974-a000-4016-8fe9-8a0b466c30d6/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rofiat IMURAN',
          img: 'https://digitalhub.fifa.com/transform/58509d8b-8c71-47e9-8e47-0714e563f709/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Michelle ALOZIE',
          img: 'https://digitalhub.fifa.com/transform/78e46543-6a9b-4b95-90b4-77a2d6cda4f6/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Toni PAYNE',
          img: 'https://digitalhub.fifa.com/transform/330e9f6a-1db1-4494-ad80-065ce5b2c4a8/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Christy UCHEIBE',
          img: 'https://digitalhub.fifa.com/transform/35ad4887-b701-46e7-92d0-37c19bcc053f/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Deborah ABIODUN',
          img: 'https://digitalhub.fifa.com/transform/6c930846-0809-4dbb-a372-5ff974006445/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rasheedat AJIBADE',
          img: 'https://digitalhub.fifa.com/transform/862aede9-cdcc-4d89-96a7-b64baf41dadf/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Halimatu AYINDE',
          img: 'https://digitalhub.fifa.com/transform/7c1abc44-2462-45da-bf16-e448de098246/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jennifer ECHEGINI',
          img: 'https://digitalhub.fifa.com/transform/83a32ce8-fd36-46d6-af31-045a4b366f55/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Ifeoma ONUMONU',
          img: 'https://digitalhub.fifa.com/transform/b1857bc9-c860-4363-9c64-0bb684c6bd81/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Asisat OSHOALA',
          img: 'https://digitalhub.fifa.com/transform/b8aebb97-54c9-4c8e-9615-2ee9ac73e7bf/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Desire OPARANOZIE',
          img: 'https://digitalhub.fifa.com/transform/b072a565-a3aa-4f53-80d6-d90a889c5baa/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Gift MONDAY',
          img: 'https://digitalhub.fifa.com/transform/cf614837-b3ed-44fc-92de-9e78da65212d/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Uchenna KANU',
          img: 'https://digitalhub.fifa.com/transform/ba51a891-4b6e-4436-9262-6d4c03e4bb06/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Francisca ORDEGA',
          img: 'https://digitalhub.fifa.com/transform/d73e9ecb-c011-486b-b856-ebebd366f5d7/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Esther OKORONKWO',
          img: 'https://digitalhub.fifa.com/transform/5777506c-b286-43a3-8b6f-05b1234e4980/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Randy WALDRUM',
        img: 'https://digitalhub.fifa.com/transform/480f27de-a1bb-4095-8ed7-3915216860e6/Nigeria-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    code: 'NOR',
    region: 'Europe',
    population: 5379475,
    flag: 'https://flagcdn.com/no.svg',
    players: {
      goalkeeper: [
        {
          name: 'Cecilie FISKERSTRAND',
          img: 'https://digitalhub.fifa.com/transform/be5738a5-0630-4483-a54e-93caf4c7ff7c/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Guro PETTERSEN',
          img: 'https://digitalhub.fifa.com/transform/b19e4997-ae21-4375-9ee6-e284fc390cc3/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Aurora MIKALSEN',
          img: 'https://digitalhub.fifa.com/transform/b52e9f92-d674-41e1-b912-f374c044a71e/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Anja SONSTEVOLD',
          img: 'https://digitalhub.fifa.com/transform/81bc9661-28a4-4292-9415-03b9c3ae46b2/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sara HORTE',
          img: 'https://digitalhub.fifa.com/transform/8601b227-a2a4-424d-a7a6-34c5a5d0212e/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tuva HANSEN',
          img: 'https://digitalhub.fifa.com/transform/645998de-ca8d-409c-a2fc-d9762da0f700/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Guro BERGSVAND',
          img: 'https://digitalhub.fifa.com/transform/b43f16cf-eb04-42a8-8cb9-6e7f74a6ee11/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Maren MJELDE',
          img: 'https://digitalhub.fifa.com/transform/c0c7a731-03a1-4540-a3ea-d116b81cfea2/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Thea BJELDE',
          img: 'https://digitalhub.fifa.com/transform/0ad794c5-cddb-49c4-86ed-6fab2681268d/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Mathilde HARVIKEN',
          img: 'https://digitalhub.fifa.com/transform/c57a2670-b046-4257-bf61-004c7338d08d/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Marit BRATBERG LUND',
          img: 'https://digitalhub.fifa.com/transform/ce79b719-8931-4a29-bd30-851d87a13959/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Ingrid SYRSTAD ENGEN',
          img: 'https://digitalhub.fifa.com/transform/0e5bab1e-a419-486a-8bc8-79d6e5ed3670/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Vilde BOE RISA',
          img: 'https://digitalhub.fifa.com/transform/dfcc9f3d-c6a4-460c-86ed-14a961214c59/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Guro REITEN',
          img: 'https://digitalhub.fifa.com/transform/f8297726-eaa5-4ec7-ab7f-f56ea91f8046/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Frida MAANUM',
          img: 'https://digitalhub.fifa.com/transform/c9add999-a9f8-4b26-be89-99f55ad20b24/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Karina SAEVIK',
          img: 'https://digitalhub.fifa.com/transform/8027c393-02e8-41b2-b4aa-7d88db68fabd/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Caroline GRAHAM HANSEN',
          img: 'https://digitalhub.fifa.com/transform/011c7f9d-eece-42b4-9b96-d4965779c7fc/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ada HEGERBERG',
          img: 'https://digitalhub.fifa.com/transform/2f817109-fdec-4b6c-83e9-69c763974fee/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Amalie EIKELAND',
          img: 'https://digitalhub.fifa.com/transform/9fa9ad80-3948-46a3-9cc3-fc66ac365694/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Julie BLAKSTAD',
          img: 'https://digitalhub.fifa.com/transform/6fd1546e-8632-4bbd-89c3-9e911fbaad3b/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Emilie HAAVI',
          img: 'https://digitalhub.fifa.com/transform/5788b8e1-2403-4364-aee4-846bab55628b/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Anna JOSENDAL',
          img: 'https://digitalhub.fifa.com/transform/25aefbac-5f90-4bc7-beee-92e24538f527/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sophie ROMAN HAUG',
          img: 'https://digitalhub.fifa.com/transform/aa2dfbaa-6e50-4b02-a605-63c994833b97/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Hege Riise',
        img: 'https://digitalhub.fifa.com/transform/5a9b0870-9f08-4174-95b1-8da1479c1ded/Norway-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    code: 'PAN',
    region: 'Americas',
    population: 4314768,
    flag: 'https://flagcdn.com/pa.svg',
    players: {
      goalkeeper: [
        {
          name: 'Sasha FABREGA',
          img: 'https://digitalhub.fifa.com/transform/2c0f0ddb-21da-4f4f-8239-4cd20d2e8259/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Yenith BAILEY',
          img: 'https://digitalhub.fifa.com/transform/7fc214d3-c9d6-41d9-ad60-77fdc07917d5/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Farissa CORDOBA',
          img: 'https://digitalhub.fifa.com/transform/52392abe-e0c5-4137-8535-b33256588b93/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Hilary JAEN',
          img: 'https://digitalhub.fifa.com/transform/227e4be5-53f5-41c5-b435-b7261e55bdf7/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Wendy NATIS',
          img: 'https://digitalhub.fifa.com/transform/a0d23e6e-27eb-4695-9392-255d198a195d/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katherine CASTILLO',
          img: 'https://digitalhub.fifa.com/transform/1ddd523d-06ae-4636-84b4-abacb4d20222/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Yomira PINZON',
          img: 'https://digitalhub.fifa.com/transform/ed67d282-d68d-4c67-9325-a7eee62e347c/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rosario VARGAS',
          img: 'https://digitalhub.fifa.com/transform/8a5b012f-3afc-4de6-b844-4055825cc79b/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Rebeca ESPINOSA',
          img: 'https://digitalhub.fifa.com/transform/66de7cfd-c442-4e63-891c-7a0cfc3fa6a1/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Nicole DE OBALDIA',
          img: 'https://digitalhub.fifa.com/transform/747683bb-86c1-48ab-b91a-0633d7753205/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Carina BALTRIP-REYES',
          img: 'https://digitalhub.fifa.com/transform/bcca993c-3fd6-4626-9bd3-43acdf7f1c1a/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Deysire SALAZAR',
          img: 'https://digitalhub.fifa.com/transform/db241c24-de96-4ea9-8516-0a7adaf0eaf0/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Emily CEDENO',
          img: 'https://digitalhub.fifa.com/transform/280d3cb9-4f8f-4e87-8909-e25140ecbe4a/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Schiandra GONZALEZ',
          img: 'https://digitalhub.fifa.com/transform/d5087d6f-d379-4a37-b2aa-3f24a0c5d375/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Marta COX',
          img: 'https://digitalhub.fifa.com/transform/9e7a3250-cdc5-4e1e-b710-e73202e63ad4/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Natalia MILLS',
          img: 'https://digitalhub.fifa.com/transform/de45a7d9-c6dc-46ee-8984-75dec5916e59/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Carmen MONTENEGRO',
          img: 'https://digitalhub.fifa.com/transform/a51b9afa-2111-450f-8b4b-b5190df6680b/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Laurie BATISTA',
          img: 'https://digitalhub.fifa.com/transform/f489000f-b821-48de-97ee-3d338e09f2f2/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Aldrith QUINTERO',
          img: 'https://digitalhub.fifa.com/transform/c52b0727-4bf5-40b5-81c3-860ce8d9fae0/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Karla RILEY',
          img: 'https://digitalhub.fifa.com/transform/30ced751-940d-4e5a-ab94-f936e9edfdb1/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Riley TANNER',
          img: 'https://digitalhub.fifa.com/transform/1e6f91f9-4dce-4845-b937-1bf14bd39d68/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Erika HERNANDEZ',
          img: 'https://digitalhub.fifa.com/transform/f5e55def-7f22-4647-913c-3359906ddf6d/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Lineth CEDENO',
          img: 'https://digitalhub.fifa.com/transform/55c58852-b5e5-4fb9-9802-30d920ad16fc/Panama-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: 'Ignacio Quintana',
    },
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    code: 'PHL',
    region: 'Asia',
    population: 109581085,
    flag: 'https://flagcdn.com/ph.svg',
    players: {
      goalkeeper: [
        {
          name: 'Olivia McDANIEL',
          img: 'https://digitalhub.fifa.com/transform/e5f76629-7704-4d3c-8a5e-3305c8594156/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kaiya JOTA',
          img: 'https://digitalhub.fifa.com/transform/774a7a97-cccb-47b4-8ffd-a82f2e90d971/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Kiara FONTANILLA',
          img: 'https://digitalhub.fifa.com/transform/b235e13f-90d4-45ab-bfc7-16612596c4e2/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'Malea CESAR',
          img: 'https://digitalhub.fifa.com/transform/a60d4812-5053-4cfa-b4e2-d400b402d5a3/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Jessika COWART',
          img: 'https://digitalhub.fifa.com/transform/d08b56cb-28e6-457d-b8df-b65a4541d093/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Hali LONG',
          img: 'https://digitalhub.fifa.com/transform/087aead2-16c2-4d57-8d63-1aad2c7a2f45/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Angela BEARD',
          img: 'https://digitalhub.fifa.com/transform/415535ce-deb3-4376-9023-757919bfafc3/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sofia HARRISON',
          img: 'https://digitalhub.fifa.com/transform/7d458445-8ec3-447a-aef1-d6c48b11df8b/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Alicia BARKER',
          img: 'https://digitalhub.fifa.com/transform/84ff5d44-9f5c-4a40-af42-731e23ad97b4/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Dominique RANDLE',
          img: 'https://digitalhub.fifa.com/transform/fdb95cbf-8420-4058-b96a-0ba962fad2ba/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Reina BONTA',
          img: 'https://digitalhub.fifa.com/transform/1af67a2b-bba7-4f78-969b-75d1ab28d6c8/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'Jaclyn SAWICKI',
          img: 'https://digitalhub.fifa.com/transform/62ada1b5-5bc6-4160-b460-b4837c582ca2/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Tahnai ANNIS',
          img: 'https://digitalhub.fifa.com/transform/7924bd75-debb-40da-93c7-8018dd9cf815/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sara EGGESVIK',
          img: 'https://digitalhub.fifa.com/transform/42c87672-bef0-48b4-9871-b2978359cedb/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Anicka CASTANEDA',
          img: 'https://digitalhub.fifa.com/transform/2443baeb-b8b8-44d0-aa12-e58ad32812ae/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Ryley BUGAY',
          img: 'https://digitalhub.fifa.com/transform/98c2b091-4ca2-4aa9-8b96-2cb81b80efd5/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Meryll SERRANO',
          img: 'https://digitalhub.fifa.com/transform/e41ee115-db4a-4cd3-ba50-4ee705348eaf/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Quinley QUEZADA',
          img: 'https://digitalhub.fifa.com/transform/83aee8f0-4d66-4475-828f-48b6a1c92c13/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Sarina BOLDEN',
          img: 'https://digitalhub.fifa.com/transform/a6d64456-6b86-43b8-957f-ac59e927d6ba/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'Isabella FLANIGAN',
          img: 'https://digitalhub.fifa.com/transform/b2790b48-201a-46ec-b787-16ddb9f1efe9/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Chandler McDANIEL',
          img: 'https://digitalhub.fifa.com/transform/707609fd-386e-4a03-b19d-f996e565b0fc/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Carleigh FRILLES',
          img: 'https://digitalhub.fifa.com/transform/af52ebc0-6ea7-4a61-8db5-d6f1362bbf11/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'Katrina GUILLOU',
          img: 'https://digitalhub.fifa.com/transform/7426ca7c-ce87-48d7-a664-78bc7d002c49/Philippines-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Alen Stajcic',
        img: 'https://digitalhub.fifa.com/transform/3e1c17ea-931d-42b1-9411-9250a313a1ae/STAJCIC-Alen_255000?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    code: 'PRT',
    region: 'Europe',
    population: 10305564,
    flag: 'https://flagcdn.com/pt.svg',
    players: {
      goalkeeper: [
        {
          name: 'INES PEREIRA',
          img: 'https://digitalhub.fifa.com/transform/38a3c309-9709-4b8a-a973-28188acdda90/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'PATRICIA MORAIS',
          img: 'https://digitalhub.fifa.com/transform/1145d4e6-fe10-4048-a351-b3b3a0243966/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'RUTE COSTA',
          img: 'https://digitalhub.fifa.com/transform/efd1d745-a1ac-4cbb-82b0-0f7cd4d2ac01/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      defender: [
        {
          name: 'CATARINA AMADO',
          img: 'https://digitalhub.fifa.com/transform/90c33335-a3e2-4d9e-90ba-b239c049e962/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'LUCIA ALVES',
          img: 'https://digitalhub.fifa.com/transform/d4caf1e8-474a-4824-92c1-1a8879815021/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'SILVIA REBELO',
          img: 'https://digitalhub.fifa.com/transform/50d72525-5bad-4ee2-94ee-165ace3c0a40/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'JOANA MARCHAO',
          img: 'https://digitalhub.fifa.com/transform/7d68f3e8-a008-4bde-ad7e-4629eba5fe80/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ANA BORGES',
          img: 'https://digitalhub.fifa.com/transform/c3afe86c-1f5a-4c98-9061-0654f4d0530a/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'CAROLE COSTA',
          img: 'https://digitalhub.fifa.com/transform/1b8179f6-b163-4573-a4bb-711c83b2d1a4/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ANA SEICA',
          img: 'https://digitalhub.fifa.com/transform/7507614a-3212-4169-a9a3-dac35ac39cd0/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'DIANA GOMES',
          img: 'https://digitalhub.fifa.com/transform/ea8b1c85-c24a-4622-918f-e3bf8431b612/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      midfield: [
        {
          name: 'ANDREIA JACINTO',
          img: 'https://digitalhub.fifa.com/transform/1b8ac0fd-b76f-470c-8277-74ac56350cb5/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ANA RUTE',
          img: 'https://digitalhub.fifa.com/transform/ee4bddf2-4667-456e-a365-86cf0e50de28/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ANDREIA NORTON',
          img: 'https://digitalhub.fifa.com/transform/0eeaaa7d-3a89-45e9-ad3a-a842af4f489b/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'TATIANA PINTO',
          img: 'https://digitalhub.fifa.com/transform/4e30f480-e477-4a45-8401-0c559fc2c758/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'FATIMA PINTO',
          img: 'https://digitalhub.fifa.com/transform/7bfe87fd-e801-4af9-8705-68ac2d8f70fd/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'DOLORES SILVA',
          img: 'https://digitalhub.fifa.com/transform/18978e23-66f7-4d52-9c2e-6def1e34418d/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      attacker: [
        {
          name: 'JESSICA SILVA',
          img: 'https://digitalhub.fifa.com/transform/7528ae61-6a6c-48e0-81b1-483d30a35dc1/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'DIANA SILVA',
          img: 'https://digitalhub.fifa.com/transform/a9c58e82-3ca1-4a70-8e00-86c6af42c011/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'CAROLINA MENDES',
          img: 'https://digitalhub.fifa.com/transform/9b4b3c25-2342-4870-9457-8e9bc1825c5d/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'KIKA NAZARETH',
          img: 'https://digitalhub.fifa.com/transform/60bd4c33-7054-405e-94c1-98cac1a0e180/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'ANA CAPETA',
          img: 'https://digitalhub.fifa.com/transform/4aabc0f3-513e-4176-9320-85df1f633ce0/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
        {
          name: 'TELMA ENCARNACAO',
          img: 'https://digitalhub.fifa.com/transform/941265eb-0253-4ee3-a81e-f3b86d04e666/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:792,height:900',
        },
      ],
      coach: {
        name: 'Francisco Neto',
        img: 'https://digitalhub.fifa.com/transform/bf93e0a4-beec-45ee-ba5b-c1a835f4f5ca/Portugal-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,width:264,height:300',
      },
    },
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    code: 'IRL',
    region: 'Europe',
    population: 4994724,
    flag: 'https://flagcdn.com/ie.svg',
    players: {
      goalkeeper: [
        {
          name: 'Courtney BROSNAN',
          img: 'https://digitalhub.fifa.com/transform/1761ac22-58e8-4d6d-8a17-ec08b73d3bbd/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Grace MOLONEY',
          img: 'https://digitalhub.fifa.com/transform/33d1d17e-50e4-45a8-b6a8-a33bc4174376/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Megan WALSH',
          img: 'https://digitalhub.fifa.com/transform/640d7618-4549-40f0-b748-7d48560a02e9/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Claire ORIORDAN',
          img: 'https://digitalhub.fifa.com/transform/1d0ec6ea-63e6-4804-89f8-631774af8bcb/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Louise QUINN',
          img: 'https://digitalhub.fifa.com/transform/26bec165-f6e7-4f93-8c1a-2a6ab51ba57a/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Niamh FAHEY',
          img: 'https://digitalhub.fifa.com/transform/b1aa5112-5e79-4a3b-9859-e617179a8736/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Diane CALDWELL',
          img: 'https://digitalhub.fifa.com/transform/d54dc344-be5a-47ae-a1b5-aa4f89f6918c/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Aine OGORMAN',
          img: 'https://digitalhub.fifa.com/transform/e8deedea-dd12-4397-af0f-af6339c499c4/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Chloe MUSTAKI',
          img: 'https://digitalhub.fifa.com/transform/8c45d3d1-ca53-43c6-9b12-fbbc21db8283/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Megan CONNOLLY',
          img: 'https://digitalhub.fifa.com/transform/7df66502-b938-42b1-9ade-4b0a5d85bf46/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Ruesha LITTLEJOHN',
          img: 'https://digitalhub.fifa.com/transform/1423eece-d7fd-4f66-9cb4-98bb48533466/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Denise OSULLIVAN',
          img: 'https://digitalhub.fifa.com/transform/6bd5e142-b50f-4b98-a0e8-6d514a8858aa/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Katie McCABE',
          img: 'https://digitalhub.fifa.com/transform/78737b87-7454-41bd-b3c7-fd235f7d04a7/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lily AGG',
          img: 'https://digitalhub.fifa.com/transform/76902cfa-b274-40fd-aa61-e6a925916bba/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lucy QUINN',
          img: 'https://digitalhub.fifa.com/transform/8957e73f-2f46-4b7e-bdfc-38a2ce04ddc3/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Sinead FARRELLY',
          img: 'https://digitalhub.fifa.com/transform/07cfc113-6f45-4cca-9e98-4cf71016a69a/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Marissa SHEVA',
          img: 'https://digitalhub.fifa.com/transform/bec86c73-50c2-47cd-a01c-1c2abe20f131/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Ciara GRANT',
          img: 'https://digitalhub.fifa.com/transform/0a05e845-f6d6-43dd-87a6-80f2662e9f4c/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Isibeal ATKINSON',
          img: 'https://digitalhub.fifa.com/transform/1a018197-8e5c-4639-a50f-843ed9589d46/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Amber BARRETT',
          img: 'https://digitalhub.fifa.com/transform/3e9e66a3-3544-4d22-9fdf-e5097024c1e1/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Heather PAYNE',
          img: 'https://digitalhub.fifa.com/transform/7007c5ba-2a1c-4ff1-ae58-0aa7e9075f30/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Kyra CARUSA',
          img: 'https://digitalhub.fifa.com/transform/cfe4e3fa-949f-4d22-8e86-afe19670a031/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Abbie LARKIN',
          img: 'https://digitalhub.fifa.com/transform/e63faf8d-0f03-4593-a14a-e611128e112d/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Vera Pauw',
        img: 'https://digitalhub.fifa.com/transform/e2e02141-7dbf-4fe5-9e6b-eef4ca450acd/Republic-of-Ireland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    code: 'ZAF',
    region: 'Africa',
    population: 59308690,
    flag: 'https://flagcdn.com/za.svg',
    players: {
      goalkeeper: [
        {
          name: 'Kaylin SWART',
          img: 'https://digitalhub.fifa.com/transform/143dad22-1e38-49e7-b138-39c0ec8afe63/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Andile DLAMINI',
          img: 'https://digitalhub.fifa.com/transform/c51f1f25-82aa-44b0-85b1-4e4958c97046/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Kebotseng MOLETSANE',
          img: 'https://digitalhub.fifa.com/transform/417a7811-3fa4-41b0-94cd-13e2937b10d7/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Lebohang RAMALEPE',
          img: 'https://digitalhub.fifa.com/transform/8a616bd4-9772-4b4b-88e5-59dee9db0980/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Bongeka GAMEDE',
          img: 'https://digitalhub.fifa.com/transform/2fa3d70c-a71a-4d1b-a9cb-bd7506d13157/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Noko MATLOU',
          img: 'https://digitalhub.fifa.com/transform/ab9b7ee1-1943-4a45-9b9f-96e92f64fff4/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Fikile MAGAMA',
          img: 'https://digitalhub.fifa.com/transform/f7473584-b513-416c-925d-1007bf83195c/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Karabo DHLAMINI',
          img: 'https://digitalhub.fifa.com/transform/99d448f0-983a-4f68-bd99-3f6e5a420a9a/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Bambanani MBANE',
          img: 'https://digitalhub.fifa.com/transform/9a627400-6fe9-4ae2-81b9-28d37771c9bb/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Tiisetso MAKHUBELA',
          img: 'https://digitalhub.fifa.com/transform/568b0111-f5a2-4d37-872d-6309ecdebba4/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Sibulele HOLWENI',
          img: 'https://digitalhub.fifa.com/transform/51a23da3-1b57-440a-8f83-0a602b6de2d6/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Noxolo CESANE',
          img: 'https://digitalhub.fifa.com/transform/0a20c41d-f51b-4540-a2bf-3204d016cad3/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Gabriela SALGADO',
          img: 'https://digitalhub.fifa.com/transform/b48256a8-70d5-49d2-b00b-f667c559c12c/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Linda MOTLHALO',
          img: 'https://digitalhub.fifa.com/transform/7970ab67-d5e8-4bf2-b809-3105e6027339/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Refiloe JANE',
          img: 'https://digitalhub.fifa.com/transform/2d1595eb-d146-43da-ae48-b68d71eca337/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Kholosa BIYANA',
          img: 'https://digitalhub.fifa.com/transform/cd99ef68-650e-4b02-97c2-cd90ae5297fc/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Robyn MOODALY',
          img: 'https://digitalhub.fifa.com/transform/a534da36-bc82-4be4-9453-189b8e3d8e47/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Mapula KGOALE',
          img: 'https://digitalhub.fifa.com/transform/eea5cbee-6f6c-4a0f-8023-2cbbbfb00106/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Wendy SHONGWE',
          img: 'https://digitalhub.fifa.com/transform/7a947dea-9fb3-452b-86d2-85186e4a9cc5/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Hildah MAGAIA',
          img: 'https://digitalhub.fifa.com/transform/b38c8045-e4fe-4ce2-803a-6f2bfe6199d9/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thembi KGATLANA',
          img: 'https://digitalhub.fifa.com/transform/46dfa63f-f10c-4251-8b4c-540631308635/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Jermaine SEOPOSENWE',
          img: 'https://digitalhub.fifa.com/transform/d17a8cea-1647-4941-8b04-98922af73191/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Melinda KGADIETE',
          img: 'https://digitalhub.fifa.com/transform/b5ada488-5888-4644-96ce-8bab139bb4ed/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Desiree Ellis',
        img: 'https://digitalhub.fifa.com/transform/72c638f6-36ef-4810-bd2d-e366e4c0f45b/South-Africa-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    code: 'ESP',
    region: 'Europe',
    population: 47351567,
    flag: 'https://flagcdn.com/es.svg',
    players: {
      goalkeeper: [
        {
          name: 'Misa RODRIGUEZ',
          img: 'https://digitalhub.fifa.com/transform/323fdf70-fdd7-433d-9c60-1b83bd5c1dfb/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Enith SALON',
          img: 'https://digitalhub.fifa.com/transform/5402ac64-7fde-4fa6-b395-6ed0f7de4e47/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Cata COLL',
          img: 'https://digitalhub.fifa.com/transform/a04c0c80-59a5-45df-a3f0-db93ae8c2d9e/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Ona BATLLE',
          img: 'https://digitalhub.fifa.com/transform/85397789-fffb-400c-a2b9-ca873715c44b/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Irene PAREDES',
          img: 'https://digitalhub.fifa.com/transform/74df8e06-6629-469c-b905-05f8cd4776f4/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Ivana ANDRES',
          img: 'https://digitalhub.fifa.com/transform/91f65ec8-0af9-427d-9ea7-893b940b0232/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Oihane HERNANDEZ',
          img: 'https://digitalhub.fifa.com/transform/ee00cb6c-0c50-4891-bfca-06832b84a281/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Laia CODINA',
          img: 'https://digitalhub.fifa.com/transform/ea0243c1-96f3-4d22-8d2c-c5d1ea1094dd/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Olga CARMONA',
          img: 'https://digitalhub.fifa.com/transform/730c73e3-8669-4f98-aae4-467154ac0f04/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Rocio GALVEZ',
          img: 'https://digitalhub.fifa.com/transform/7610ce04-aeac-4203-b398-f68568fd7eb3/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Teresa ABELLEIRA',
          img: 'https://digitalhub.fifa.com/transform/10b7efd2-5913-4cf3-ad73-583d8507ee4e/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Aitana BONMATI',
          img: 'https://digitalhub.fifa.com/transform/95aa42d4-26b6-40c8-823f-4f914fe1820a/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Irene GUERRERO',
          img: 'https://digitalhub.fifa.com/transform/a45e5098-8f0d-4425-8cf4-411a689837a4/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Alexia PUTELLAS',
          img: 'https://digitalhub.fifa.com/transform/b621ce67-7acb-4916-bc9a-d0f1a5ae31dc/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Maria PEREZ',
          img: 'https://digitalhub.fifa.com/transform/02a1ec1e-a06a-46a8-a4b1-38481b4ffd46/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Claudia ZORNOZA',
          img: 'https://digitalhub.fifa.com/transform/e15338f7-29f0-4486-a57f-346f913ecc04/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Mariona CALDENTEY',
          img: 'https://digitalhub.fifa.com/transform/85f63e4d-ee74-4f66-bd1e-f4fcafe09a13/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Esther GONZALEZ',
          img: 'https://digitalhub.fifa.com/transform/bbb47b03-0192-4e30-9450-88f050536889/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Jennifer HERMOSO',
          img: 'https://digitalhub.fifa.com/transform/198c08c8-3bba-4678-8ffa-c1978f7da8b0/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Eva NAVARRO',
          img: 'https://digitalhub.fifa.com/transform/f0dd755c-d776-4dcc-91c0-cb00dac2f142/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Alba REDONDO',
          img: 'https://digitalhub.fifa.com/transform/158892f5-5838-4379-bbed-29e4ee8c6267/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Salma PARALLUELO',
          img: 'https://digitalhub.fifa.com/transform/b3663e79-9fe7-4c99-9def-fa28f1447dc5/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Athenea DEL CASTILLO',
          img: 'https://digitalhub.fifa.com/transform/c6f3179c-f7e7-44a2-b2cb-9a5748a399a4/Spain-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Jorge Vilda',
        img: 'https://digitalhub.fifa.com/transform/9d561d76-9a78-4fa1-8402-fa082f220d41/ILDA-Jorge-322809?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    code: 'SWE',
    region: 'Europe',
    population: 10353442,
    flag: 'https://flagcdn.com/se.svg',
    players: {
      goalkeeper: [
        {
          name: 'Zecira MUSOVIC',
          img: 'https://digitalhub.fifa.com/transform/c4ad7a34-8b2f-42c5-a58c-b9bcc80a4a4e/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Jennifer FALK',
          img: 'https://digitalhub.fifa.com/transform/700cf1fe-c28a-4972-a653-f433cb60ad8c/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Tove ENBLOM',
          img: 'https://digitalhub.fifa.com/transform/0b25d5fa-f49b-4112-a486-7c97d0182be3/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Jonna ANDERSSON',
          img: 'https://digitalhub.fifa.com/transform/0d769ea8-60dd-404e-b79d-5258c27f4edf/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Linda SEMBRANT',
          img: 'https://digitalhub.fifa.com/transform/912eb243-cd08-4891-9875-68447a84b3fe/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Stina LENNARTSSON',
          img: 'https://digitalhub.fifa.com/transform/a5a5195f-f30a-4063-8084-63890b65b297/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Anna SANDBERG',
          img: 'https://digitalhub.fifa.com/transform/5dcf8685-c769-4dc9-a1c3-5f098e547f01/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Magdalena ERIKSSON',
          img: 'https://digitalhub.fifa.com/transform/6473b58e-3358-49d9-afd6-5c7cd0955555/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Amanda ILESTEDT',
          img: 'https://digitalhub.fifa.com/transform/f9254009-2761-45fd-b8aa-f2330710c0b9/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Nathalie BJORN',
          img: 'https://digitalhub.fifa.com/transform/55034674-0dba-49e9-ad32-09021e319767/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Kosovare ASLLANI',
          img: 'https://digitalhub.fifa.com/transform/e5ec9909-cfd2-459e-9dfa-9088b38740fc/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Filippa ANGELDAL',
          img: 'https://digitalhub.fifa.com/transform/f06d14fe-0176-4e48-aebf-12ec10e52fba/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Caroline SEGER',
          img: 'https://digitalhub.fifa.com/transform/604c0926-3905-4dc8-b96e-ae9499585a6c/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Fridolina ROLFO',
          img: 'https://digitalhub.fifa.com/transform/0538cec4-7229-4ceb-9e45-e8d24c408ea1/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Johanna KANERYD',
          img: 'https://digitalhub.fifa.com/transform/2a8ffccf-14f1-4276-86b6-48792b8584a1/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Hanna BENNISON',
          img: 'https://digitalhub.fifa.com/transform/20f283b5-b58a-47ce-b2b2-6d46d12734b5/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Olivia SCHOUGH',
          img: 'https://digitalhub.fifa.com/transform/034e65d2-6201-493d-a417-1e3153d547b4/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Elin RUBENSSON',
          img: 'https://digitalhub.fifa.com/transform/84f7adbf-9e47-4799-9a21-4a8d9f08d6c2/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Madelen JANOGY',
          img: 'https://digitalhub.fifa.com/transform/e2285e32-fced-4eb1-af71-bd1d20897101/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lina HURTIG',
          img: 'https://digitalhub.fifa.com/transform/30194806-8db1-4b78-b768-9ece5a0b805c/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Sofia JAKOBSSON',
          img: 'https://digitalhub.fifa.com/transform/547da2d4-767e-4527-9f2f-38f74f0c497c/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Stina BLACKSTENIUS',
          img: 'https://digitalhub.fifa.com/transform/295ba2ba-eee8-43f7-9d6d-1bf30141b447/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Rebecka BLOMQVIST',
          img: 'https://digitalhub.fifa.com/transform/bbfdc0db-df00-43d4-a27a-92775e1d52e2/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Peter Gerhardsson',
        img: 'https://digitalhub.fifa.com/transform/a96e1128-3bc4-4255-a70e-616467d419fc/Sweden-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    code: 'CHE',
    region: 'Europe',
    population: 8636896,
    flag: 'https://flagcdn.com/ch.svg',
    players: {
      goalkeeper: [
        {
          name: 'Gaelle THALMANN',
          img: 'https://digitalhub.fifa.com/transform/ec2ef576-1666-4507-9c1d-26ebb5ae3dda/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Livia PENG',
          img: 'https://digitalhub.fifa.com/transform/c7aea0a2-f113-4a1c-8b32-03479ffbe14e/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Seraina FRIEDLI',
          img: 'https://digitalhub.fifa.com/transform/36848fdc-b1d1-41d1-a454-7bd93cb55c5c/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Julia STIERLI',
          img: 'https://digitalhub.fifa.com/transform/3b9fce5a-3543-4bf7-94f4-b23d14e66961/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lara MARTI',
          img: 'https://digitalhub.fifa.com/transform/59d32567-944b-4955-ba52-58602800cc88/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Laura FELBER',
          img: 'https://digitalhub.fifa.com/transform/2de0c1b6-3ff6-4b8b-85de-c5d635e9c930/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Noelle MARITZ',
          img: 'https://digitalhub.fifa.com/transform/9e89e217-4109-4bee-b2ed-1851412d8b2c/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Nadine RIESEN',
          img: 'https://digitalhub.fifa.com/transform/5066789a-fe9a-484d-84c3-ce185ac04dd8/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Marion REY',
          img: 'https://digitalhub.fifa.com/transform/50cbfa43-8ab0-46fd-a791-4844c6a6ff79/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Luana BUEHLER',
          img: 'https://digitalhub.fifa.com/transform/f73ab89a-ffce-46d9-b4dc-960131c5799f/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Viola CALLIGARIS',
          img: 'https://digitalhub.fifa.com/transform/4dbd97ff-6799-4887-813b-0c3b5ee88a79/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Eseosa AIGBOGUN',
          img: 'https://digitalhub.fifa.com/transform/54c9c1ac-b25c-448a-869a-886eb39173d1/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Geraldine REUTELER',
          img: 'https://digitalhub.fifa.com/transform/b35ce1a9-ab86-4525-9fa6-fee7778f5f88/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Amira ARFAOUI',
          img: 'https://digitalhub.fifa.com/transform/fe014361-7887-4e1a-89d3-db5aa625e20d/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Coumba SOW',
          img: 'https://digitalhub.fifa.com/transform/37f8df36-3bd0-4319-bc46-8b4f46120b66/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lia WAELTI',
          img: 'https://digitalhub.fifa.com/transform/8f42e472-723a-43b7-8f44-dcab2d3119ae/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Sandrine MAURON',
          img: 'https://digitalhub.fifa.com/transform/eaa0c07d-b32f-4fb6-833c-56edc5519c7f/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Seraina PIUBEL',
          img: 'https://digitalhub.fifa.com/transform/12f71ebf-6b40-4900-80f5-1c9a6cb91f3d/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Ana Maria CRNOGORCEVIC',
          img: 'https://digitalhub.fifa.com/transform/f25b760f-bca8-4a44-8917-d0862bb45424/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Ramona BACHMANN',
          img: 'https://digitalhub.fifa.com/transform/bcd33eb5-1cb5-4104-9bf1-ee72371eb5d1/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Fabienne HUMM',
          img: 'https://digitalhub.fifa.com/transform/fde69d10-f259-4f58-8bea-3b1f8dcef324/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Meriame TERCHOUN',
          img: 'https://digitalhub.fifa.com/transform/3f0e1b90-0b23-455c-a064-928f053dd4d2/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Alisha LEHMANN',
          img: 'https://digitalhub.fifa.com/transform/7adc82d7-8ffa-4fed-abd8-8cc50fd33852/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Inka Grings',
        img: 'https://digitalhub.fifa.com/transform/51e42dff-a36b-48d7-9580-2db2128573a9/Switzerland-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'United States',
    capital: 'Washington, D.C.',
    code: 'USA',
    region: 'Americas',
    population: 329484123,
    flag: 'https://flagcdn.com/us.svg',
    players: {
      goalkeeper: [
        {
          name: 'Alyssa NAEHER',
          img: 'https://digitalhub.fifa.com/transform/135dfedc-f634-4c8a-b961-a5984a2682bb/NAEHER-Alyssa-301016-10QLGN3?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Casey MURPHY',
          img: 'https://digitalhub.fifa.com/transform/aeb2093c-69cb-41de-9032-ada860eb5e5f/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Aubrey KINGSBURY',
          img: 'https://digitalhub.fifa.com/transform/6bc61833-7b80-486c-aeb1-8bd8a276f2e2/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Sofia HUERTA',
          img: 'https://digitalhub.fifa.com/transform/17ad7227-b240-411c-b084-eae35e1e4a7c/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Naomi GIRMA',
          img: 'https://digitalhub.fifa.com/transform/2968a425-8fad-4eb5-a7e5-0e5c0bd6eb90/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Kelley OHARA',
          img: 'https://digitalhub.fifa.com/transform/982d6626-1d4c-452b-b97b-abab345724e6/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Alana COOK',
          img: 'https://digitalhub.fifa.com/transform/66b59d20-187b-437f-a6ae-8755c752403e/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Emily SONNETT',
          img: 'https://digitalhub.fifa.com/transform/def0142c-d156-40db-ad82-d20c7477e11d/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Crystal DUNN',
          img: 'https://digitalhub.fifa.com/transform/2dada080-8eac-4b76-9abd-238defa47c7b/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Emily FOX',
          img: 'https://digitalhub.fifa.com/transform/6477841e-bc1a-4ff7-9996-a32e8fe158a8/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Ashley SANCHEZ',
          img: 'https://digitalhub.fifa.com/transform/925170eb-58b0-4f6f-a052-952fca3c5a39/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Julie ERTZ',
          img: 'https://digitalhub.fifa.com/transform/c9094338-899f-4e8a-9176-92d4a1ef84f4/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Savannah DEMELO',
          img: 'https://digitalhub.fifa.com/transform/0643d79a-eff0-4e89-ba4c-fd7d2d00f38a/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lindsey HORAN',
          img: 'https://digitalhub.fifa.com/transform/222c182e-3428-472c-a558-eb0c2d6c9c32/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Rose LAVELLE',
          img: 'https://digitalhub.fifa.com/transform/df3eae2d-bbc4-4657-b434-18ecf8ad702b/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Andi SULLIVAN',
          img: 'https://digitalhub.fifa.com/transform/c13a8778-89a4-45e1-bc6c-146536fcb82c/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Kristie MEWIS',
          img: 'https://digitalhub.fifa.com/transform/f8e05754-eb4f-4c96-b312-2eca7f039a06/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Lynn WILLIAMS',
          img: 'https://digitalhub.fifa.com/transform/8c035a85-408b-47cf-af65-630f948bf319/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Alyssa THOMPSON',
          img: 'https://digitalhub.fifa.com/transform/9a24d1bf-5271-4582-ad46-ac84df906686/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Sophia SMITH',
          img: 'https://digitalhub.fifa.com/transform/2d747e1b-cdef-46e3-8c86-f8d80dbaf2ae/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Alex MORGAN',
          img: 'https://digitalhub.fifa.com/transform/532bbc89-905f-4fee-82db-319c64265ce6/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Megan RAPINOE',
          img: 'https://digitalhub.fifa.com/transform/46bec190-87d0-4996-aa9e-52fe3da0ef95/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Trinity RODMAN',
          img: 'https://digitalhub.fifa.com/transform/6c33815c-907b-4a27-80a4-83c24e9d6588/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Vlatko Andonovski',
        img: 'https://digitalhub.fifa.com/transform/5ff3c421-fb46-4479-9f75-04e0c08d33f0/USA-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    code: 'VNM',
    region: 'Asia',
    population: 97338583,
    flag: 'https://flagcdn.com/vn.svg',
    players: {
      goalkeeper: [
        {
          name: 'Thi Kieu Oanh DAO',
          img: 'https://digitalhub.fifa.com/transform/21a6cba7-475e-4f9b-bdc7-a343b459ad91/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Kim Thanh TRAN',
          img: 'https://digitalhub.fifa.com/transform/f7efec79-fecd-4a99-a0f8-2eb307b9d2f3/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Hang KHONG',
          img: 'https://digitalhub.fifa.com/transform/2e671cee-6a04-4715-a703-938e8377337e/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Thi Thu Thuong LUONG',
          img: 'https://digitalhub.fifa.com/transform/92987b80-2f29-4035-a3ea-6e8b8620dcce/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Kieu CHUONG',
          img: 'https://digitalhub.fifa.com/transform/5206b7bb-6cc0-4382-92a7-c4353f6d5f7e/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thu TRAN',
          img: 'https://digitalhub.fifa.com/transform/93450a3b-1037-4a03-92d6-856c3b11d8d3/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Loan HOANG',
          img: 'https://digitalhub.fifa.com/transform/4a059b63-7cd2-43cf-8e9b-60efc9e170a4/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thuy Nga TRAN',
          img: 'https://digitalhub.fifa.com/transform/4283fcfe-08a1-445f-af4c-e02e1e13fa20/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Diem My LE',
          img: 'https://digitalhub.fifa.com/transform/9274ce25-96dd-4726-9b4f-6307bac51f30/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thu Thao TRAN',
          img: 'https://digitalhub.fifa.com/transform/8a915172-d59b-488b-aee5-61830f4e89c1/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi My Anh NGUYEN',
          img: 'https://digitalhub.fifa.com/transform/af49fc56-1b8e-4a49-813d-d64257777eff/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Thi Tuyet Dung NGUYEN',
          img: 'https://digitalhub.fifa.com/transform/5e7ac45b-6eeb-467c-8a0a-cdc0191a099e/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thuy Trang TRAN',
          img: 'https://digitalhub.fifa.com/transform/70793846-f2dc-4942-8087-d9ca842a3674/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Hai Linh TRAN',
          img: 'https://digitalhub.fifa.com/transform/70ae8733-dfb0-448d-9012-ade650d007d6/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thao THAI',
          img: 'https://digitalhub.fifa.com/transform/ff5688c8-a52a-4ea9-96c1-c1b1a460b6ad/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Van DUONG',
          img: 'https://digitalhub.fifa.com/transform/8d91f522-f63c-45ab-9a6d-9db28d6f91c9/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thanh Nha NGUYEN',
          img: 'https://digitalhub.fifa.com/transform/1029759f-1302-4c33-aa0d-f18a2fb80b1c/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Van Su NGAN',
          img: 'https://digitalhub.fifa.com/transform/2749bfd7-e3ed-443d-ab72-66be02c3b1a0/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Bich Thuy NGUYEN',
          img: 'https://digitalhub.fifa.com/transform/68dcfdc3-12d4-473d-ae4f-339cb130a087/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Nhu HUYNH',
          img: 'https://digitalhub.fifa.com/transform/3771a075-210f-427b-89ad-651e77d26c80/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Hai Yen PHAM',
          img: 'https://digitalhub.fifa.com/transform/fb12b504-3472-4739-ba96-df10ba1eda5e/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Thuy Hang NGUYEN',
          img: 'https://digitalhub.fifa.com/transform/9f92db74-4f63-4861-a0c3-fef6dd16025e/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Thi Hoa VU',
          img: 'https://digitalhub.fifa.com/transform/5c589cd6-e7c2-4445-9392-421c700c683d/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Mai Duc Chung',
        img: 'https://digitalhub.fifa.com/transform/8b0ffe85-294c-47f8-8566-972452c58fd4/Vietnam-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    code: 'ZMB',
    region: 'Africa',
    population: 18383956,
    flag: 'https://flagcdn.com/zm.svg',
    players: {
      goalkeeper: [
        {
          name: 'Catherine MUSONDA',
          img: 'https://digitalhub.fifa.com/transform/ae6140ab-e454-4f33-bd1f-bbcd2a6dfa13/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Leticia LUNGU',
          img: 'https://digitalhub.fifa.com/transform/ae923548-3444-4d0b-9766-2135bf25a124/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Eunice SAKALA',
          img: 'https://digitalhub.fifa.com/transform/26194c41-01b4-47ba-9464-3d0ddff65888/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      defender: [
        {
          name: 'Judith SOKO',
          img: 'https://digitalhub.fifa.com/transform/7cf3445c-c7c7-4b72-8a78-11e3bcefeda8/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Lushomo MWEEMBA',
          img: 'https://digitalhub.fifa.com/transform/3db0a2e0-17ee-4688-9832-5872346d73c2/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Mary MULENGA',
          img: 'https://digitalhub.fifa.com/transform/8277f717-daf0-4ef6-aad3-eb986bdb5883/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Margaret BELEMU',
          img: 'https://digitalhub.fifa.com/transform/6aa826ea-b8c5-44cb-ad77-080efc62417b/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Martha TEMBO',
          img: 'https://digitalhub.fifa.com/transform/48b5faa9-32ac-42ad-852c-a87391516c25/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Agness MUSESA',
          img: 'https://digitalhub.fifa.com/transform/41ad54f6-13ce-442b-aa24-c9162eae417e/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Esther BANDA',
          img: 'https://digitalhub.fifa.com/transform/db60fd14-7b86-4b73-981d-92bbaa5fde07/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Vast PHIRI',
          img: 'https://digitalhub.fifa.com/transform/9ee3b913-34a3-4a06-8853-acb1536d37de/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      midfield: [
        {
          name: 'Susan BANDA',
          img: 'https://digitalhub.fifa.com/transform/2de8a1d8-7f4f-4687-99cc-5bad4b92bdad/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Mary WILOMBE',
          img: 'https://digitalhub.fifa.com/transform/ee1bdc31-d53f-4cdb-ba6c-7b040f915e74/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Comfort SELEMANI',
          img: 'https://digitalhub.fifa.com/transform/86cf0eab-9c84-49b5-85f3-42411c0bd5c2/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Evarine KATONGO',
          img: 'https://digitalhub.fifa.com/transform/dff09e68-edf2-43eb-a8f2-a5ed048e4e8c/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Ireen LUNGU',
          img: 'https://digitalhub.fifa.com/transform/3a6564b5-9a01-4413-8312-fb2c30e71860/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Avell CHITUNDU',
          img: 'https://digitalhub.fifa.com/transform/276d4963-b11d-4cd3-b426-4613a7a9b0bc/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      attacker: [
        {
          name: 'Ochumba LUBANDJI',
          img: 'https://digitalhub.fifa.com/transform/c488975e-a02e-44ee-a7f5-4e635ff81c46/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Hellen MUBANGA',
          img: 'https://digitalhub.fifa.com/transform/54faa3c2-43d6-4b15-ad28-605f786b3ba7/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Barbra BANDA',
          img: 'https://digitalhub.fifa.com/transform/7739756a-5bd5-4a35-ab52-74fce481915b/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Racheal KUNDANANJI',
          img: 'https://digitalhub.fifa.com/transform/e703fc3a-c92b-40f2-b8b3-d160f0718042/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Siomala MAPEPA',
          img: 'https://digitalhub.fifa.com/transform/5814e57a-5a27-42dd-ac32-a859a46d1cf4/MAPEPA-Siomala-430884-14RPTF1?io=transform:fill,aspectratio:1x1&quality=75',
        },
        {
          name: 'Hellen CHANDA',
          img: 'https://digitalhub.fifa.com/transform/613f456d-845d-442b-831c-ace41252decf/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
        },
      ],
      coach: {
        name: 'Bruce Mwape',
        img: 'https://digitalhub.fifa.com/transform/f5a9c7d1-f247-4399-856d-5c8cb5237638/Zambia-Portraits-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?io=transform:fill,aspectratio:1x1&quality=75',
      },
    },
  },
];

export { teams };
