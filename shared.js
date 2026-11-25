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
  reviews: { on:true, items:[ { id:'r1', author:"Ім'я клієнта", text:'Тут буде текст відгуку клієнта.' } ] },
  social: { on:true, items:[ { id:'s1', name:'Instagram', url:'' }, { id:'s2', name:'Facebook', url:'' }, { id:'s3', name:'TikTok', url:'' } ] },
  services: [
    { id:'cut',   uk:'Чоловіча стрижка',  ru:'Мужская стрижка',   price:400, min:60 },
    { id:'beard', uk:'Оформлення бороди', ru:'Оформление бороды', price:250, min:30 },
    { id:'mani',  uk:'Манікюр',           ru:'Маникюр',           price:500, min:90 }
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
