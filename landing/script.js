const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', (e) => {
  // modal is the const -> document.getElementById('modal);
  console.log(e.target);
  if (e.target === modal) {
    modal.classList.remove('show-modal');
  }
  /*
  e.target == modal ? modal.classList.remove('show-modal') : false;
  */
});


getDeliveryDate = (days) => {
  let today = new Date();
  let temp = today.setDate(today.getDate() + days);
  let deliveryDay = new Date(temp).toLocaleDateString();
  return deliveryDay;
};

 

console.log(`Levereras senast ${getDeliveryDate(days)}`);

//`Levereras senast ${getDeliveryDate()}`
