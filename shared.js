// Общее для сайта клиента и страницы мастера. ДЕМО: всё хранится только в этом браузере.
const DEFAULTS = {
  open: 10, close: 20,
  info: {
    name_uk:'Назва салону', name_ru:'Название салона',
    about_uk:'Тут буде кілька речень про салон.', about_ru:'Здесь будет несколько предложений о салоне.',
    address_uk:'Вулиця, будинок', address_ru:'Улица, дом',
    phone:'+380 XX XXX XX XX', telegram:''
  },
  // Отзывы здесь только заглушки: на сайт ставить лишь настоящие отзывы клиентов салона
  photos: { hero:'', tools:'', chair:'' }, // пусто = временное стоковое фото
  reviews: { on:true, items:[ { id:'r1', author:"Ім'я клієнта", text:'Тут буде текст відгуку клієнта.' } ] },
  social: { on:true, items:[ { id:'s1', name:'Instagram', url:'' }, { id:'s2', name:'Facebook', url:'' }, { id:'s3', name:'TikTok', url:'' } ] },
  services: [
    { id:'cut',   uk:'Чоловіча стрижка',  ru:'Мужская стрижка',   price:400, min:60 },
    { id:'beard', uk:'Оформлення бороди', ru:'Оформление бороды', price:250, min:30 },
    { id:'combo', uk:'Стрижка і борода',  ru:'Стрижка и борода',  price:600, min:90 }
  ],
  masters: [
    { id:'m1', uk:'Майстер 1', ru:'Мастер 1', about_uk:'Спеціалізація та досвід майстра.', about_ru:'Специализация и опыт мастера.', tg:'' },
    { id:'m2', uk:'Майстер 2', ru:'Мастер 2', about_uk:'Спеціалізація та досвід майстра.', about_ru:'Специализация и опыт мастера.', tg:'' }
  ]
};

let stored = null;
try { stored = JSON.parse(localStorage.getItem('salon')); } catch (e) {}
const DB = { ...DEFAULTS, ...stored, info: { ...DEFAULTS.info, ...(stored && stored.info) } };
// Удалённые услуги и мастера помечаются off, чтобы старые записи не теряли названия
const SALON = { open: DB.open, close: DB.close, daysAhead: 14 };
const SERVICES = DB.services.filter(s => !s.off);
const MASTERS = DB.masters.filter(m => !m.off);

// Временные стоковые фото (Unsplash), пока не загружены свои
const PHOTOS = {
  hero:'photo-1585747860715-2ba37e788b70', tools:'photo-1621605815971-fbc98d665033', chair:'photo-1503951914875-452162b0f3f1',
  masters:['photo-1647140655214-e4a2d914971f', 'photo-1599351431202-1e0f0137899a']
};
const stockUrl = (id, width) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;
