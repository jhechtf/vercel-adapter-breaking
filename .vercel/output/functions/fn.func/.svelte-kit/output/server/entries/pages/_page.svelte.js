import { c as create_ssr_component, f as each, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev" data-svelte-h="svelte-r2hwjt">kit.svelte.dev</a> to read the documentation</p> ${each(data.users, (user) => {
    return `<div>${escape(user.email)} </div>`;
  })}`;
});
export {
  Page as default
};
