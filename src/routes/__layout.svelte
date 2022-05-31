<script context=module>
	export async function load(event) {
		return {
			props: {
				session: event.session
			}
		}
	}
</script>

<script>
	import '../app.css';
	export let session;
</script>

<ul class="flex h-screen max-h-screen flex-col bg-gradient-to-tl from-rose-600 to-violet-400 text-gray-200">
  <li class="m-3 mt-0 flex max-h-12 content-center rounded-t-none bg-transparent p-2 py-4">
    <span class="grow text-center font-bold">
		<div class="group h-fit">
			A GameJolt Game
		</div>
    </span>
    {#if session.user}
	<span class="absolute right-3 top-4 shrink">{session.user.username}</span>
	{:else}
	<a href="/gamejolt" class="absolute right-3 top-4 shrink">Not Logged in</a>
	{/if}
  </li>
  <li class="grid h-full max-h-full place-items-center">
	  <slot />
  </li>
    <li class="flex max-h-12 content-center rounded-t-none bg-transparent p-2 py-none">
    <span class="group grow text-center font-bold">
      Created by <a href="https://github.com/Cons0r" class="absolute px-1 hover:scale-110 hover:-translate-y-1 transition-all hover:text-[#90ee91]">@Cons0r</a>
    </span>
  </li>
</ul>

