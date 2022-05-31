import { c as create_ssr_component, e as escape } from "../../chunks/index-2dc61825.js";
var app = "";
async function load(event) {
  return { props: { session: event.session } };
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { session } = $$props;
  if ($$props.session === void 0 && $$bindings.session && session !== void 0)
    $$bindings.session(session);
  return `<ul class="${"flex h-screen max-h-screen flex-col bg-gradient-to-tl from-rose-600 to-violet-400 text-gray-200"}"><li class="${"m-3 mt-0 flex max-h-12 content-center rounded-t-none bg-transparent p-2 py-4"}"><span class="${"grow text-center font-bold"}"><div class="${"group h-fit"}">A GameJolt Game
		</div></span>
    ${session.user ? `<span class="${"absolute right-3 top-4 shrink"}">${escape(session.user.username)}</span>` : `<a href="${"/gamejolt"}" class="${"absolute right-3 top-4 shrink"}">Not Logged in</a>`}</li>
  <li class="${"grid h-full max-h-full place-items-center"}">${slots.default ? slots.default({}) : ``}</li>
    <li class="${"flex max-h-12 content-center rounded-t-none bg-transparent p-2 py-none"}"><span class="${"group grow text-center font-bold"}">Created by <a href="${"https://github.com/Cons0r"}" class="${"absolute px-1 hover:scale-110 hover:-translate-y-1 transition-all hover:text-[#90ee91]"}">@Cons0r</a></span></li></ul>`;
});
export { _layout as default, load };
