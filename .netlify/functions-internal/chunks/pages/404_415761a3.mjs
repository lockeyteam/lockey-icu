/* empty css                           */import { d as createAstro, e as createComponent, r as renderTemplate, f as addAttribute, m as maybeRenderHead, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_b003af01.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const bottomLinks = [
    {
      header: "Social",
      links: [
        {
          name: "Github",
          href: "https://github.com/lockey-org",
          isExternal: true
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary-500/10 dark:bg-primary-400/10 mt-16 py-16 lg:mt-20 lg:py-20" aria-labelledby="footer-heading"><h2 id="footer-heading" class="sr-only">Footer</h2><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row"><div class="flex max-w-sm flex-col items-start gap-6 sm:gap-8"><img class="h-8 w-auto" width="100" height="100" :src="$store.theme.isDark ? '/assets/lockey4.2.webp' : '/assets/lockey4.1.webp'" alt="Stone"><p class="text-primary-950/70 dark:text-primary-200/70 text-base">
在数字世界中，我们是技术伙伴，致力于解锁潜在的无限可能性。就像钥匙能打开锁一样，我们的技术将打开新的机会，解决问题，实现目标。
</p><p class="text-primary-950/70 dark:text-primary-200/70 text-sm">© 2023 Lockey</p></div><!-- Bottom links --><div class="grid max-w-xl flex-1 grid-cols-1 gap-8 sm:grid-cols-3">${bottomLinks.map((group) => renderTemplate`<div class="flex flex-col gap-4"><p class="text-base font-medium">${group.header}</p><ul role="list" class="flex flex-col gap-3">${group.links.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="focus-visible:outline-primary-950 dark:focus-visible:outline-primary-200 inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline focus-visible:outline-2"${addAttribute(link.isExternal ? "_blank" : void 0, "target")}${addAttribute(link.isExternal ? "noopener" : void 0, "rel")}>${link.name}${link.isExternal && renderTemplate`<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>`}</a></li>`)}</ul></div>`)}</div></div></div></footer>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/components/layout/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    {
      img: "https://blog.iceyear.eu.org/android-chrome-192x192.webp",
      name: "Ice Year",
      href: "https://iceyear.eu.org/"
    },
    {
      img: "https://static.yon.im/images/avatar.webp",
      name: "Yon Zilch",
      href: "https://yon.im"
    },
    {
      img: "https://dich.ink/upload/favicon-32x32.png",
      name: "Dichgrem",
      href: "https://dich.ink"
    },
    {
      img: "https://avatars.githubusercontent.com/u/83827157",
      name: "Milvoid",
      href: "https://milvoid.com"
    },
    {
      img: "https://medihbt.github.io/img/avatar.png",
      name: "Medihbt",
      href: "https://medihbt.github.io/"
    },
    {
      img: "https://bed.4everland.store/%e5%a4%b4%e5%83%8f1.jpg",
      name: "Nanimonai",
      href: "https://blog.nanimonai.org/"
    },
    {
      img: "https://dev-tusheng.pantheonsite.io/wp-content/uploads/2021/09/1.jpg",
      name: "Opeth",
      href: "https://dev-tusheng.pantheonsite.io/"
    },
    {
      img: "https://pica.zhimg.com/80/v2-0e20d54a859c5aafc690dac073cec317_1440w.webp",
      name: "Joker",
      href: "https://0pt.im/"
    },
    {
      img: "https://img.0pt.im/blogbuilt/title.jpeg",
      name: "Fire Yeah",
      href: "https://0pt.im/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header x-data="{ open: false }" class="transition" :class="{ 'bg-primary-500/10 dark:bg-primary-400/10': open, 'bg-primary-50 dark:bg-primary-950': !(open) }"><div class="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8"><!-- Brand logo --><div class="flex"><a href="/" class="focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 rounded-md focus-visible:outline focus-visible:outline-2"><span class="sr-only">Lockey</span><img class="h-20 w-auto" width="300" height="300" :src="$store.theme.isDark ? '/assets/lockey4.2.webp' : '/assets/lockey4.1.webp'" alt="Stone"></a><h1 class="text-primary-900 dark:text-primary-100 text-6xl font-bold ml-4">Lockey</h1></div><!-- Actions --><div class="-mr-2 flex items-center space-x-2 sm:space-x-3"><!-- Toggle theme mode --><button type="button" class="text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" x-data @click="$store.theme.toggle()"><span class="sr-only">Toggle theme mode</span><svg x-cloak class="h-6 w-6" :class="{ 'hidden': !($store.theme.isDark) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg><svg x-cloak class="h-6 w-6" :class="{ 'hidden': $store.theme.isDark }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z"></path></svg></button><!-- Toggle menu --><button type="button" class="text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" @click="open = !open" @mousedown="if (open) $event.preventDefault()" aria-controls="website-menu" aria-expanded="false" :aria-expanded="open.toString()"><span class="sr-only">Toggle menu</span><svg x-cloak class="h-8 w-8" :class="{ 'hidden': open, 'block': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path></svg><svg x-cloak class="h-8 w-8" :class="{ 'block': open, 'hidden': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg></button><span class="ml-2">⬅️友链┑(￣▽ ￣)┍</span></div></div><!-- Menu content --><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8" id="website-menu" x-cloak x-show="open" x-collapse x-collapse.duration.500ms><div class="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12"><div class="bg-primary-500/10 dark:bg-primary-400/10 hidden items-center justify-center rounded-3xl px-6 py-8 lg:flex"><p class="text-primary-950/70 dark:text-primary-200/70 max-w-sm text-xl italic leading-loose"><span class="font-large">友链者</span> 乃网络之人，可通许人签连之，共其仪物。 相视之间，可以望友之脸，行友之程，试各家之门，知其风化。 同心相照，使诸人之交融相通，互相亲近。 友之之道，不止于此，还能令诸网站之访客莅临，使之相得益彰，趋同一目，交相学习，相得益彰。 友链者，可以在网络之世界中建立起彼此支持之群体，进行交流互动，发展其线上关系。
</p></div><!-- Navigation --><nav class="divide-primary-900/10 dark:divide-primary-300/10 flex flex-col gap-1 divide-y sm:gap-0">${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-primary-950 dark:text-primary-200 group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl"><div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2"><div class="flex items-center gap-6"><div class="rounded-full overflow-hidden h-10 w-10"><img${addAttribute(link.img, "src")} alt="" class="h-full w-full object-cover"></div><span class="group-hover:underline text-3xl">${link.name}</span></div><svg class="text-primary-600 dark:text-primary-400 h-6 w-6 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></div></a>`)}</nav></div></div></header>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/components/layout/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en" x-cloak x-data :class="{ 'dark': $store.theme.isDark }"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body class="bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 antialiased transition">${renderComponent($$result, "Header", $$Header, {})}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Page not found. Please check the URL in the address bar and try again.", "title": "Not found \xB7 Stone" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col items-start gap-8 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"><div>404</div><div>Page not found</div></h1><p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
Please check the URL in the address bar and try again.
</p></div><a href="/" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Go back home
</a></div></div></section>` })}`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/pages/404.astro", void 0);

const $$file = "/home/anti/文档/astro/irregular-inclination/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
