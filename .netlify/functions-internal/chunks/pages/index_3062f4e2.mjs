/* empty css                           */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent } from '../astro_b003af01.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_415761a3.mjs';

const $$Astro$3 = createAstro();
const $$Expertise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Expertise;
  const features = [
    {
      id: "expertise-1",
      name: "\u534F\u4F5C",
      description: "\u6211\u4EEC\u76F8\u4E92\u5408\u4F5C\uFF0C\u4E86\u89E3\u5B9E\u9645\u7684\u9700\u6C42\uFF0C\u5E76\u5171\u540C\u5F00\u53D1\u5B9A\u5236\u7684\u89E3\u51B3\u65B9\u6848\u3002"
    },
    {
      id: "expertise-2",
      name: "\u521B\u9020",
      description: "\u6211\u4EEC\u79C9\u6301\u521B\u65B0\u7CBE\u795E\uFF0C\u4E0D\u65AD\u63A2\u7D22\u65B0\u7684\u6280\u672F\u548C\u65B9\u6CD5\uFF0C\u4EE5\u4E3A\u5BA2\u6237\u63D0\u4F9B\u6700\u4F73\u89E3\u51B3\u65B9\u6848\u3002"
    },
    {
      id: "expertise-3",
      name: "\u4E13\u4E1A",
      description: "\u6211\u4EEC\u62E5\u6709\u4E00\u652F\u4E13\u4E1A\u7684\u56E2\u961F\uFF0C\u6DF1\u8C19\u76F8\u5173\u9886\u57DF\u7684\u4E13\u4E1A\u77E5\u8BC6\uFF0C\u63D0\u4F9B\u5353\u8D8A\u7684\u670D\u52A1\u3002"
    },
    {
      id: "expertise-4",
      name: "\u6C11\u4E3B",
      description: "\u4EBA\u4EBA\u53C2\u4E0E\u5176\u4E2D\uFF0C\u5728\u56E2\u961F\u4E2D\u53C2\u4E0E\u56E2\u961F\u7684\u6C11\u4E3B\u6D3B\u52A8\u3002"
    },
    {
      id: "expertise-5",
      name: "\u6559\u57F9",
      description: "\u77E5\u8BC6\u5E93\u652F\u6301\uFF0C\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u7406\u89E3\u548C\u5E94\u7528\u76F8\u5173\u6280\u672F\u3002"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-12 lg:grid-cols-3 lg:gap-8"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">为什么选择我们</h2><div class="lg:col-span-2"><dl class="-mt-3" x-data="{ selected: null, toggle(value) { this.selected = this.selected === value ? null : value } }">${features.map((feature, index) => renderTemplate`<div class="rounded-3xl px-4 transition"${addAttribute(`{ id: ${index}, get isOpen() { return this.id === this.selected }, get isNextOpen() { return (this.id + 1) === this.selected } }`, "x-data")} x-bind:class="{ 'bg-primary-500/10 dark:bg-primary-400/10': isOpen }"><dt class="border-b text-lg transition" x-cloak x-bind:class="{ 'border-transparent': isOpen || isNextOpen, 'border-primary-900/10 dark:border-primary-300/10': !(isOpen || isNextOpen) }"><button type="button" class="group block w-full py-6 text-left transition focus-visible:outline-none"${addAttribute(feature.id, "aria-controls")} x-on:click="toggle(id)" aria-expanded="false" x-bind:aria-expanded="isOpen.toString()"><div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2"><span class="font-medium font-bold">${feature.name}</span><span class="ml-6 flex h-7 items-center"><svg class="text-primary-600 dark:text-primary-400 h-6 w-6 rotate-0 transform transition duration-200 ease-in-out" x-bind:class="{ '-rotate-180': isOpen, 'rotate-0': !isOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg></span></div></button></dt><dd class="pb-6 pr-6"${addAttribute(feature.id, "id")} x-show="isOpen" x-cloak x-collapse><p class="text-primary-950/70 dark:text-primary-200/70 text-base">${feature.description}</p></dd></div>`)}
</</dl></div></div></div></section>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/components/home/Expertise.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><div class="flex flex-col items-start gap-8 sm:gap-10"><div class="flex max-w-7xl flex-col items-start gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
欢迎来到Lockey引导页ʕ•ᴥ•ʔ
</h1><img class="h-auto w-full rounded-3xl" width="2560" height="1280" src="/assets/cover.webp" alt="Hero picture"></div></div></div></div></section>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/components/home/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      name: "Matrix",
      image: "/assets/0001.webp"
    },
    {
      name: "Mattermost",
      image: "/assets/0002.webp",
      link: "https://team.lockey.icu"
    },
    {
      name: "Lockey ID",
      image: "/assets/0003.webp",
      link: "https://id.lockey.icu"
    },
    {
      name: "Lockey \u77E5\u8BC6\u5E93",
      image: "/assets/0004.webp",
      link: "https://lib.lockey.icu"
    },
    {
      name: "Lockey RSS",
      image: "/assets/0005.webp",
      link: "https://rss.lockey.icu"
    },
    {
      name: "Lockey \u4F1A\u8BAE",
      image: "/assets/0006.webp",
      link: "https://meet.lockey.icu"
    },
    {
      name: "Lockey \u90AE\u7BB1",
      image: "/assets/0007.webp",
      link: "https://mail.lockey.icu/"
    },
    {
      name: "Lockey \u4E91\u76D8",
      image: "/assets/0008.webp",
      link: "https://drive.lockey.icu"
    },
    {
      name: "Lockey \u8BB0\u8D26",
      image: "/assets/0009.webp",
      link: "https://cash.lockey.icu"
    },
    {
      name: "Lockey ANKI",
      image: "/assets/0010.webp",
      link: "https://anki.lockey.icu"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-12 sm:gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Services</h2><div class="grid gap-8 lg:grid-cols-3">${services.map((service, index) => renderTemplate`<div class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8"><div class="flex flex-col gap-4"><h3 class="text-2xl font-medium text-center font-bold">${service.name}</h3><img${addAttribute(service.image, "src")}${addAttribute(service.name, "alt")} class="w-full h-auto"><a${addAttribute(service.link, "href")} class="text-primary-500 hover:underline"><div class="flex justify-center">${index === 0 ? renderTemplate`<div class="flex gap-4"><a href="https://alist.lockey.cf/share/matrix/clients"><button class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
Get start with app!
</button></a><a href="https://web.lockey.icu"><button class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
Get start with web!
</button></a></div>` : renderTemplate`<a${addAttribute(service.link, "href")}><button class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
Get start!
</button></a>`}</div></a></div></div>`)}</div></div></div></section>`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/components/home/Services.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Lockey", "title": "Lockey" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "Expertise", $$Expertise, {})}` })}`;
}, "/home/anti/\u6587\u6863/astro/irregular-inclination/src/pages/index.astro", void 0);

const $$file = "/home/anti/文档/astro/irregular-inclination/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
