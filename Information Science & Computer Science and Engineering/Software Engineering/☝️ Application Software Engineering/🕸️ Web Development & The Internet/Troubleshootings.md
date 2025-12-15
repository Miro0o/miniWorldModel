# Troubleshootings

[TOC]





## 👉 $color2: "var(--accent-color)" is not a color for 'mix' | Dark Mode | Interaction of SCSS and CSS Variables
#scss #css #dark_mode #web_front_end

I want to achieve such effect that my web switch dark /light mode automatically. This usually involves the use of `@media (prefer-color-scheme: dark){}`. However the actual case is a bit complicated when there also involves SCSS variables like `$base01: #000` and CSS variables like `--base01: #000`. The article below exactly reports what i encountered and gives a solution.  

> 🔗 [Dark mode, and the interaction of SCSS and CSS variables](https://prose.nsood.in/dark-mode-scss)

The main problem here is that when using SCSS variables in Sass, variables are compile-time, whereas CSS variables are run-time. So one cannot write such code to make CSS change in-the-fly, i.e. after they were loaded to the browser:
```css
$bgColor: #fff;
body {
	background-color: $bgColor;
}
@media(prefers-color-scheme: dark) {
	$bgColor: #000;
	...
}
```
Instead the author write following code and he succeeded: 
```css
$fadeColorLight: #999;
$fadeColorDark: #99b;

:root {
	--fadeColor: #{$fadeColorLight};
	--faintFadeColor: #{lighten($fadeColorLight, 15%)};
}

a {
	...
	background-image: linear-gradient(
		transparent 80%, 
		var(--faintFadeColor) 80%,
		var(--faintFadeColor) 87.5%,
		transparent 87.5%
	);
	...
}

@media(prefers-color-scheme: dark) {
	:root {
		--fadeColor: #{$fadeColorDark};
		--faintFadeColor: #{lighten($fadeColorDark, 15%)};
	}
}
```
⚠ NOTE: the weird `#{}` syntax for assigning SCSS values to CSS variables is due to a SCSS syntax incompatibility with CSS variables requiring any invalid CSS be produced literally: [https://github.com/sass/sass/issues/1128](https://github.com/sass/sass/issues/1128)

And i didn't noticed the `#{}` syntax here and i simply put var(--variable) which leads to the error: ` $color2: "var(--accent-color)" is not a color for 'mix'`, where the `mix` refers to the css function of mixing two colors: `mix($color1, $color2, $percentage)`

[Dark mode, and the interaction of SCSS and CSS variables]: https://prose.nsood.in/dark-mode-scss



## 👉 `jekyll-pagination` not working
#jekyll #github_pages

My `jekyll-pagination` plugin is not working on my github pages. Here's how i solve this problem:
1. First i thought i was because i didn't installed `jekyll-pagination` correctly. So i looked up Jekyll docs for installing plugins. It mentions two useful information:
	1. Github Pages has restriction on legal plugins: 🔗 [whitelisted plugins](https://pages.github.com/versions). However `jekyll-pagination` is on the list.
	2. Github Pages enabled `--safe` option by defaults. Which means only those explicitly listed plugins (on whitelist) work properly.
2. However those are not solving my problem. So i dig deeper, and i found these information:
	1. `jekyll-paginator` only looks into `index.html` file under root directory and the YAML front matter of that `index.html` must include `paginate: true`
	2. In `_config.yaml` one should add `paginate_path: ./page:num/` if the `index.html` file is under the project's root directory, i.e. the same level as the `_config.yaml` file.
	3. Jekyll's pagination plugin is very "picky" as indicated in 🔗 [this github issues](https://github.com/mmistakes/minimal-mistakes/discussions/3292#discussion-3757810) and the author gave below possible reasons: (directly quote)
		1. You technically have two "home" pages... [`index.html`](https://github.com/adamdjbrett/doctrineofdiscovery.org/blob/master/index.html) and [`home3.html`](https://github.com/adamdjbrett/doctrineofdiscovery.org#:~:text=3%20years%20ago-,home3.html,-updating%20homepage)... remove `home3.html`
		2. Remove `permalink: /` from `index.html`. It's not needed since it's already in the root, and by setting it as `/` it's confusing the paginator.
		3. Remove all of the Liquid you added after `{% include feature_row %}`. It's not needed since you're already using `layout: home`on that page which has it. This is causing a duplication of "recent posts" on that page.
		4. You may want to remove `/_pages/LICENSE.md` as well since it doesn't have any front matter and is outputting an extra `index.html` in `_pages` which may or may not be trouble for Jekyll's paginator.
3. I followed above instructions and finally my page is working! Though I still don't quite know what went wrong... :)


[Deployment - jekyll-pagination | Jekyll]: https://jekyllrb.com/docs/pagination/
[Deployment - plugins | Jekyll]: https://jekyllrb.com/docs/plugins/installation/
[How to Install/Use Jekyll Plugins in GitHubPages? | Stackoverflow]: https://stackoverflow.com/a/51978709/16542494

[Jekyll Paginator not working | Stackoverflow]: https://stackoverflow.com/a/70070448/16542494

My few cents to @wsgeorge answer. Assuming that you installed [jekyll-paginate](https://github.com/jekyll/jekyll-paginate) not [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2)
1. Remember to rename `index.md` to `index.html`
2. Add `paginate: true` to `index.html`
    ```xml
    ---
    layout: home
    paginate: true
    ---
    ```
3. Add following to `_config.yaml`
    ```xml
    paginate: 5
    paginate_path: ./page:num/
    ```
    **Notice:** **.** (period) in `./page:num/` path - this indicates that my `index.html` file is in the root directory (directory along/next to Gemfile).

[Pagination plugin not working on the homepage of the website #3292 | Github]: https://github.com/mmistakes/minimal-mistakes/discussions/3292#discussion-3757810



## 👉 How to create and deploy an Express.js app to Vercel?
#vercel #express #js 


> 🔗
>
> [How to create and deploy an Express.js app to Vercel?](https://syntackle.live/blog/how-to-create-and-deploy-an-express-js-app-to-vercel-ljgvGrsCH7ioHsAxuw3G/)
>
> [How to deploy a Node/Express App to Vercel](https://dev.to/andrewbaisden/how-to-deploy-a-node-express-app-to-vercel-2aa)
>
> [Using Express.js with Vercel](https://vercel.com/guides/using-express-with-vercel)

Vercel is mainly hosting frontend projects. For a single express app there are 2 ways to host: the first making it a serviceless app and the secod deploy it all-in-one. 

Here the later approach is adopted. To acomplish that a ``vercel.json  file is needed to configure the hosting service the right way. 

