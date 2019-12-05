
const fetchData = async function () {
  const response = await fetch('/coupons.json');
  const data = await response.json();
  return data;
};
fetchData().then((data) => {
  const content = document.querySelector('.content');

  for (let i = 0; i < data.coupons.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    content.append(card);

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'title-wrapper';
    card.append(titleWrapper);

    const img = document.createElement('img');
    img.src = data.coupons[i].image;
    img.className = 'deal-img';
    titleWrapper.append(img);

    const deal = document.createElement('div');
    deal.textContent = 'АКЦИЯ';
    deal.className = 'deal-label';
    titleWrapper.append(deal);

    const checked = document.createElement('div');
    checked.textContent = 'Проверен';
    checked.className = 'checked';
    titleWrapper.append(checked);

    const description = document.createElement('h3');
    description.textContent = data.coupons[i].title;
    description.className = 'description';
    card.append(description);

    const button = document.createElement('button');
    button.textContent = 'Перейти к акции';
    button.className = 'button';
    card.append(button);
  }
});
