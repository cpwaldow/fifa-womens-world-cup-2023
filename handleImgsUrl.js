const array = [
  '"url("https://digitalhub.fifa.com/transform/d808f022-38db-4a2f-aac0-c533d8cc1326/1556714212?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/e23a5538-1aca-4eab-98b9-d1b5e6919f30/1556714218?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/2bca0d55-f03f-4bf7-9825-09e5ea280261/1556714720?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/6915b6a2-c4ae-4969-a559-f13476fb4954/1556715229?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/5f0f7663-5bf8-4738-898e-ce8c850d6fff/1556434301?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/0bca8912-4df1-4b2a-8bb0-263ff89884c5/1556434840?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/7db8f79b-622e-435c-9213-b0bcaf726678/1556716781?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/f76f9c93-8cc7-4b9f-9758-5623c6407501/1556721958?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/c56fec4e-009d-4b93-b65b-b90be064f58f/1556722469?io=transform:fill,width:792,height:900")',
  '"url("https://digitalhub.fifa.com/transform/15456d21-9b8c-48bc-a68e-7d76c20e61da/1556716272?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/58f6ede2-e6c4-4024-838d-ad002e10c211/1556717312?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/b56c5095-32a7-471f-9dee-825993cd8991/1556721949?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/9c906efd-d238-42ee-bb4a-3c2edfecba51/1556723995?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/f1ff4d8e-5714-4494-bab2-2cabbc335ec9/1556724717?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/e0ca5f23-e950-4d60-b067-470a9d205742/1556725041?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/73e0c4d0-3f85-4678-8cf0-074fac9c6fc2/1556717299?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/2446727f-c33e-4224-8f51-7636d405649c/1556721443?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/27b226f4-fe77-46c3-b44a-59151f6f8c68/1556721444?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/153bd7a6-3878-47d9-8146-dc2e503029ff/1556722979?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/a02e0fa2-4212-48fc-955c-54a3000802f6/1556722981?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/cf028091-cb27-4ad1-88c9-97e738c9d251/1556724518?io=transform:fill,width:792,height:900")"',
  '"url("https://digitalhub.fifa.com/transform/586daffe-bf8c-44ff-84a1-321ba38d4213/1556725548?io=transform:fill,width:792,height:900")"',
  'url("https://digitalhub.fifa.com/transform/917cfeae-99d6-408d-a84a-b5ec4dfaed72/1556725554?io=transform:fill,width:792,height:900")',
];

const names = [
  'Vanina',
  'Lara',
  'Abigail',
  'Adriana',
  'Eliana',
  'Julieta',
  'Aldana',
  'Sophia',
  'Miriam',
  'Gabriela',
  'Vanesa',
  'Romina',
  'Daiana',
  'Dalila',
  'Florencia',
  'Lorena',
  'Camila',
  'Paulina',
  'Yamila',
  'Mariana',
  'Chiara',
  'Erica',
  'Estefania',
];

const handleImgUrl = (string) => string.split('url("')[1].split('"')[0];

const playerInfo = [];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  playerInfo.push({
    name: names[index],
    img: handleImgUrl(element),
  });
}

console.log(playerInfo);

const handleFifa = () => {
  const imgElements = document.querySelectorAll(
    '.player-badge-card_playerImage__301X0',
  );
  const imgs = [];
  for (let index = 0; index < imgElements.length; index++) {
    const element = imgElements[index];
    imgs.push(element.style.backgroundImage);
  }
  console.log(imgs);
};
