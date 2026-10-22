const nav=document.querySelector('#main-nav');document.querySelector('.menu-toggle')?.addEventListener('click',e=>{const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));const reveal=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.09});reveal.forEach(el=>io.observe(el))}else reveal.forEach(el=>el.classList.add('visible'));const cookie=document.querySelector('#cookie-banner');try{if(!localStorage.getItem('jm-cookie-notice'))cookie.hidden=false}catch(e){cookie.hidden=false}document.querySelector('#cookie-ok')?.addEventListener('click',()=>{try{localStorage.setItem('jm-cookie-notice','acknowledged')}catch(e){}cookie.hidden=true});const form = document.querySelector('#signup');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const status = document.querySelector('#form-status');
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  if (!name || !email || !form.elements.consent.checked) {
    status.textContent = 'Please complete your name, email address and consent checkbox.';
    return;
  }
  if (form.elements.website.value) return;
  const subject = 'J. M. Ecclestone Reader Club sign-up';
  const body = [
    'Please add me to the J. M. Ecclestone Reader Club.',
    '',
    'Name: ' + name,
    'Email address: ' + email,
    '',
    'I consent to receiving Reader Club emails about James’s books and writing, and understand I can unsubscribe at any time.',
    'I have read the website Privacy Policy.'
  ].join('\r\n');
  const mailto = 'mailto:dorsetdivision@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const fallback = document.createElement('a');
  fallback.href = mailto;
  fallback.target = '_blank';
  fallback.rel = 'noopener';
  fallback.textContent = 'Open your sign-up email';
  status.replaceChildren(document.createTextNode('Your request is ready. '), fallback, document.createTextNode(', then press Send in your email app. If no email app opens, email dorsetdivision@gmail.com with your name, email address and consent. Your request must be sent before it can be processed.'));
});
