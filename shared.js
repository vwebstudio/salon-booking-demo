// Общее для сайта клиента и страницы мастера. ДЕМО: всё хранится только в этом браузере.
const DEFAULTS = {
  open: 10, close: 20,
  services: [
    { id:'cut',   uk:'Чоловіча стрижка',  ru:'Мужская стрижка',   price:400, min:60 },
    { id:'beard', uk:'Оформлення бороди', ru:'Оформление бороды', price:250, min:30 },
    { id:'mani',  uk:'Манікюр',           ru:'Маникюр',           price:500, min:90 }
  ],
  masters: [ { id:'m1', uk:'Майстер 1', ru:'Мастер 1', tg:'' }, { id:'m2', uk:'Майстер 2', ru:'Мастер 2', tg:'' } ]
};

let stored = null;
try { stored = JSON.parse(localStorage.getItem('salon')); } catch (e) {}
const DB = stored || DEFAULTS;
// Удалённые услуги и мастера помечаются off, чтобы старые записи не теряли названия
const SALON = { open: DB.open, close: DB.close, daysAhead: 14 };
const SERVICES = DB.services.filter(s => !s.off);
const MASTERS = DB.masters.filter(m => !m.off);
