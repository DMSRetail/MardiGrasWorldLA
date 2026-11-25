/* =====================================================================
   MARDI GRAS WORLD LA · SITE FOOTER  (mgw-footer.js)
   This file lives on GitHub. One line in the body code loads it on every
   page of the site, including catalog and product pages. It:
     1. builds the Mardi Gras World footer,
     2. places it right after Lightspeed's built-in footer,
     3. hides the built-in footer (only once the new one is in place, so if
        this file ever fails to load, the built-in footer still shows),
     4. scrolls to sections like #mgw-contact when a link points at them,
     5. restyles Lightspeed's Contact Us section to match the site.
   To change links, hours or the phone number, edit SETTINGS below, upload
   the file to GitHub again, then open the purge link (see the body code).
   ===================================================================== */
(function () {
  if (window.__mgwFooter) return; // stop if the file got loaded twice
  window.__mgwFooter = true;

  /* ---------- SETTINGS: edit these ---------- */
  var SETTINGS = {
    logo: 'https://dhgf5mcbrms62.cloudfront.net/140023541/header-AP2QX7/H2vofji-600x600.webp',
    tagline: 'Mardi Gras clothing, accessories and parade throws from Lake Charles, Louisiana.',

    // Leave an address empty ('') to hide that icon
    social: [
      ['Instagram', 'https://www.instagram.com/mardigrasworld.la/'],
      ['Facebook', 'https://www.facebook.com/p/Mardi-Gras-world-61585367218791/'],
      ['TikTok', '']
    ],

    // [link text, address]. '/products' opens the whole catalog.
    // SWAP each '/products' for the category's own address once it exists.
    shop: [
      ['Clothing & Apparel', '/products/clothing-207774782'],
      ['Accessories', '/products'],
      ['Jewelry', '/products'],
      ['Beauty & Body Art', '/products'],
      ['Home & Party Decor', '/products/decoration'],
      ['Drinkware', '/products'],
      ['Crafts & DIY', '/products'],
      ['Toys & Novelty', '/products']
    ],

    // Add lines here as pages go live, e.g. ['Wholesale accounts', '/YOUR-PAGE-ADDRESS']
    help: [
      ['Contact us', '/#mgw-contact'],
      ['Shop all products', '/products']
    ],

    address: ['137 W McNeese St', 'Lake Charles, LA 70605'],
    hours: '',  // e.g. 'Mon–Sat 10am–6pm'. Empty = hidden.
    phone: '',  // e.g. '(337) 555-0100'. Empty = hidden.

    // Small links in the bottom row, e.g. ['Privacy', '/YOUR-PRIVACY-PAGE']
    legal: [
      ['Report abuse', '/report-abuse']
    ]
  };

  /* ---------- Styles (scoped to #mgw-footer so the store theme can't leak in) ---------- */
  var CSS = [
    'html.mgw-footer-on .ins-tile--footer{display:none!important}',
    '#mgw-footer{display:block;background:var(--mgw-ink,#170B22);color:var(--mgw-paper,#F6EFE1);padding:clamp(56px,7vw,88px) 0 28px;overflow:hidden;font-family:var(--mgw-font-body,Arial,sans-serif);font-size:15px;line-height:1.5;text-align:left}',
    '#mgw-footer *{box-sizing:border-box}',
    '#mgw-footer .mgw-f__wrap{max-width:1360px;margin:0 auto;padding:0 clamp(18px,4vw,48px)}',
    '#mgw-footer .mgw-f__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(170px,100%),1fr));gap:36px 24px}',
    '#mgw-footer .mgw-f__col{display:flex;flex-direction:column;align-items:flex-start;gap:10px;min-width:0}',
    '#mgw-footer .mgw-f__brand{gap:16px}',
    '#mgw-footer p{margin:0;font-size:15px;color:inherit}',
    '#mgw-footer .mgw-f__muted{color:#CFC3DA}',
    '#mgw-footer a{color:var(--mgw-paper,#F6EFE1);font-size:15px;text-decoration:none;text-underline-offset:5px}',
    '#mgw-footer a:hover,#mgw-footer a:focus-visible{color:var(--mgw-paper,#F6EFE1);text-decoration:underline wavy var(--mgw-green,#6CBF4B) 2px}',
    '#mgw-footer .mgw-f__h{margin:0 0 4px;padding:0;font-family:var(--mgw-font-display,Arial,sans-serif);font-size:13px;font-weight:900;line-height:1.2;letter-spacing:.12em;text-transform:uppercase;color:var(--mgw-green,#6CBF4B)}',
    /* logo on a white sticker */
    '#mgw-footer .mgw-f__logo{display:block;padding:10px 14px;background:#fff;border:3px solid var(--mgw-green,#6CBF4B);border-radius:12px;box-shadow:5px 5px 0 var(--mgw-purple,#3A1070);transform:rotate(-3deg);transition:transform .2s ease}',
    '#mgw-footer .mgw-f__logo:hover{transform:rotate(0) scale(1.03)}',
    '#mgw-footer .mgw-f__logo img{display:block;width:140px;height:auto}',
    /* round social buttons */
    '#mgw-footer .mgw-f__social{display:flex;gap:8px}',
    '#mgw-footer .mgw-f__social a{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:2px solid var(--mgw-green,#6CBF4B);border-radius:50%;color:var(--mgw-green,#6CBF4B);transition:background-color .15s ease,color .15s ease}',
    '#mgw-footer .mgw-f__social a:hover,#mgw-footer .mgw-f__social a:focus-visible{background:var(--mgw-green,#6CBF4B);color:var(--mgw-ink,#170B22);text-decoration:none}',
    '#mgw-footer .mgw-f__social svg{width:18px;height:18px}',
    /* directions pill */
    '#mgw-footer a.mgw-f__dir{display:inline-flex;align-items:center;margin-top:6px;padding:6px 16px;border:2px solid var(--mgw-green,#6CBF4B);border-radius:999px;color:var(--mgw-green,#6CBF4B);font-weight:900}',
    '#mgw-footer a.mgw-f__dir:hover,#mgw-footer a.mgw-f__dir:focus-visible{background:var(--mgw-green,#6CBF4B);color:var(--mgw-ink,#170B22);text-decoration:none}',
    /* giant wordmark (the body code sizes it to fit the width) */
    '#mgw-footer .mgw-f__mark{margin-top:clamp(40px,6vw,72px);overflow:hidden}',
    '#mgw-footer .mgw-f__mark p{display:inline-block;white-space:nowrap;font-family:var(--mgw-font-display,Arial,sans-serif);font-weight:900;font-stretch:125%;font-variation-settings:"wdth" 125;text-transform:uppercase;font-size:7vw;line-height:.85;letter-spacing:-.045em;color:var(--mgw-green,#6CBF4B)}',
    '#mgw-footer .mgw-f__mark em{font-family:var(--mgw-font-serif,Georgia,serif);font-style:italic;font-weight:400;font-stretch:100%;font-variation-settings:normal;text-transform:none;letter-spacing:-.01em;color:var(--mgw-lavender,#B595E3)}',
    /* bottom row */
    '#mgw-footer .mgw-f__bottom{margin-top:28px;padding-top:20px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px 24px;border-top:1px solid rgba(246,239,225,.2)}',
    '#mgw-footer .mgw-f__bottom p,#mgw-footer .mgw-f__bottom a{font-size:13px;color:#CFC3DA}',
    '#mgw-footer .mgw-f__legal{display:flex;flex-wrap:wrap;gap:8px 20px}'
  ].join('\n');


  /* ---------- Contact Us restyle ----------
     Restyles Lightspeed's own Contact Us section (homepage) to match the site.
     It only touches pages that have that section. The readable version with notes
     is 9-contact-restyle.html. */
  var CONTACT_CSS = [
    '.section__contact-us{background:var(--mgw-lavender)!important;border-top:3px solid var(--mgw-ink);color:var(--mgw-ink)}',
    '.section__contact-us .section__container{margin-top:clamp(56px,7vw,96px)!important;margin-bottom:clamp(56px,7vw,96px)!important}',
    '.section__contact-us .section__content{width:100%!important;max-width:1264px!important}',
    '.section__contact-us .section__content>.section__grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:32px 56px!important}',
    '.section__contact-us .section__content>.section__grid>div:first-child{flex:1 1 360px;min-width:0;margin:0!important;container-type:inline-size}',
    '.section__contact-us .section__content>.section__grid>div:last-child{flex:1 1 380px;min-width:0;max-width:600px}',
    '.section__contact-us h1{margin:0!important;font-family:var(--mgw-font-display)!important;font-weight:900!important;font-stretch:125%;font-variation-settings:"wdth" 125;text-transform:uppercase;font-size:min(clamp(40px,5.4vw,84px),11.5cqi)!important;line-height:0.9!important;letter-spacing:-0.045em!important;color:var(--mgw-ink)!important;text-align:left!important;overflow-wrap:normal!important;word-break:normal!important}',
    '.section__contact-us .section__content>.section__grid>div:first-child p{margin:0!important;font-family:var(--mgw-font-serif)!important;font-style:italic!important;font-weight:400!important;font-size:min(clamp(40px,5.4vw,84px),11.5cqi)!important;line-height:0.95!important;letter-spacing:-0.01em!important;color:var(--mgw-ink)!important;text-align:left!important}',
    '.section__contact-us form{display:flex!important;flex-wrap:wrap;gap:16px}',
    '.section__contact-us form>div{flex:1 1 100%;min-width:0;margin:0!important}',
    '.section__contact-us form>div:nth-of-type(1),.section__contact-us form>div:nth-of-type(2){flex:1 1 220px}',
    '.section__contact-us .contact-us-label{font-family:var(--mgw-font-body)!important;font-size:14px!important;font-weight:900!important;color:var(--mgw-ink)!important}',
    '.section__contact-us .contact-us-label + span{font-size:12px!important;color:var(--mgw-ink)!important;opacity:0.75}',
    '.section__contact-us form>div input,.section__contact-us form>div textarea{box-sizing:border-box!important;width:100%!important;height:56px!important;margin:6px 0 0!important;padding:0 20px!important;border:3px solid var(--mgw-ink)!important;border-radius:999px!important;background:var(--mgw-paper)!important;color:var(--mgw-ink)!important;font-family:var(--mgw-font-body)!important;font-size:16px!important;font-style:normal!important;box-shadow:none!important}',
    '.section__contact-us form>div textarea{height:auto!important;min-height:150px!important;padding:16px 20px!important;border-radius:22px!important;resize:vertical}',
    '.section__contact-us form>div input::placeholder,.section__contact-us form>div textarea::placeholder{color:var(--mgw-muted);opacity:0.7;font-style:normal}',
    '.section__contact-us form>div input:focus-visible,.section__contact-us form>div textarea:focus-visible{outline:3px solid var(--mgw-purple)!important;outline-offset:2px}',
    '.section__contact-us form>div:last-of-type{margin-top:4px!important;gap:14px 20px!important;align-items:flex-start!important}',
    '@media (min-width:768px){.section__contact-us form>div:last-of-type{align-items:center!important}}',
    '.section__contact-us .section__button{flex:none;width:auto!important;min-width:0!important;height:56px!important;padding:0 32px!important;border:3px solid var(--mgw-ink)!important;border-radius:999px!important;background:var(--mgw-ink)!important;color:var(--mgw-paper)!important;transition:transform 0.15s ease,box-shadow 0.15s ease,background-color 0.15s ease,color 0.15s ease}',
    '.section__contact-us .section__button *{filter:none!important;color:inherit!important;background:transparent!important;font-family:var(--mgw-font-body)!important;font-size:16px!important;font-weight:900!important;letter-spacing:0!important;text-transform:none!important}',
    '.section__contact-us .section__button:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--mgw-ink);background:var(--mgw-green)!important;color:var(--mgw-ink)!important}',
    '.section__contact-us .section__button:focus-visible{outline:3px solid var(--mgw-purple);outline-offset:3px}',
    '.section__contact-us form>div:last-of-type p{font-size:13px!important;line-height:1.45!important;color:var(--mgw-ink)!important}'
  ].join('\n');

  /* ---------- Helpers ---------- */
  // Makes text safe to drop into HTML (so an "&" in a name can't break the page)
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Turns a SETTINGS list into links, skipping any with an empty address
  function linkList(list) {
    var html = '';
    for (var i = 0; i < list.length; i++) {
      if (list[i][1]) html += '<a href="' + esc(list[i][1]) + '">' + esc(list[i][0]) + '</a>';
    }
    return html;
  }
  var ICONS = {
    Instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>',
    Facebook: '<path d="M14.5 21v-7.5h2.8l.5-3.5h-3.3V8c0-1 .4-1.6 1.7-1.6H18V3.3c-.5-.1-1.5-.2-2.6-.2-2.6 0-4.3 1.6-4.3 4.4V10H8.3v3.5h2.8V21"/>',
    TikTok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.6 2.6 2.4 4.4 5 4.8"/>'
  };

  /* ---------- Build the footer ---------- */
  function build() {
    var s = SETTINGS;

    var social = '';
    for (var i = 0; i < s.social.length; i++) {
      var name = s.social[i][0], url = s.social[i][1];
      if (!url) continue;
      social += '<a href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' + esc(name) + '">' +
        '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg></a>';
    }

    var directions = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(s.address.join(', '));
    var visit = '<p>' + s.address.map(esc).join('<br>') + '</p>';
    if (s.hours) visit += '<p class="mgw-f__muted">' + esc(s.hours) + '</p>';
    if (s.phone) visit += '<a href="tel:' + esc(s.phone.replace(/[^\d+]/g, '')) + '">' + esc(s.phone) + '</a>';
    visit += '<a class="mgw-f__dir" href="' + esc(directions) + '" target="_blank" rel="noopener">Get directions</a>';

    var el = document.createElement('footer');
    el.id = 'mgw-footer';
    el.innerHTML =
      '<div class="mgw-f__wrap mgw-f__grid">' +
        '<div class="mgw-f__col mgw-f__brand">' +
          '<a class="mgw-f__logo" href="/" aria-label="Mardi Gras World LA, home"><img src="' + esc(s.logo) + '" alt="" width="140" height="140" loading="lazy"></a>' +
          '<p class="mgw-f__muted">' + esc(s.tagline) + '</p>' +
          (social ? '<div class="mgw-f__social">' + social + '</div>' : '') +
        '</div>' +
        '<nav class="mgw-f__col" aria-label="Shop"><h2 class="mgw-f__h">Shop</h2>' + linkList(s.shop) + '</nav>' +
        '<nav class="mgw-f__col" aria-label="Help"><h2 class="mgw-f__h">Help</h2>' + linkList(s.help) + '</nav>' +
        '<div class="mgw-f__col"><h2 class="mgw-f__h">Visit the store</h2>' + visit + '</div>' +
      '</div>' +
      '<div class="mgw-f__wrap mgw-f__mark" aria-hidden="true"><p data-mgw-fit>Mardi Gras World <em>LA</em></p></div>' +
      '<div class="mgw-f__wrap mgw-f__bottom">' +
        '<p>&copy; ' + new Date().getFullYear() + ' Mardi Gras World LA</p>' +
        '<div class="mgw-f__legal">' + linkList(s.legal) + '</div>' +
      '</div>';
    return el;
  }

  /* ---------- Put it on the page (and keep it there) ---------- */
  var style = document.createElement('style');
  style.id = 'mgw-footer-css';
  style.textContent = CSS + '\n' + CONTACT_CSS;
  document.head.appendChild(style);

  var footer = null;
  function place() {
    var builtIn = document.querySelector('.ins-tile--footer');
    if (!builtIn) return; // page not ready yet; we'll try again on the next change
    if (!footer) footer = build();
    if (builtIn.nextElementSibling !== footer) builtIn.insertAdjacentElement('afterend', footer);
    document.documentElement.classList.add('mgw-footer-on');
  }

  // Links like /#mgw-contact: the section can load after the page does,
  // so wait for it to appear, then scroll to it once.
  var jumpedFor = '';
  function jump() {
    var hash = window.location.hash;
    if (hash.indexOf('#mgw-') !== 0 || jumpedFor === window.location.href) return;
    var target = document.getElementById(hash.slice(1));
    // "Contact us" (#mgw-contact) also finds Lightspeed's own Contact Us section
    if (!target && hash === '#mgw-contact') target = document.querySelector('.section__contact-us');
    if (!target) return;
    jumpedFor = window.location.href;
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
  }

  // The store swaps page sections without reloading, so re-check after every change
  var queued = false;
  function check() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(function () {
      queued = false;
      place();
      jump();
    });
  }
  new MutationObserver(check).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('hashchange', check);
  check();
})();
