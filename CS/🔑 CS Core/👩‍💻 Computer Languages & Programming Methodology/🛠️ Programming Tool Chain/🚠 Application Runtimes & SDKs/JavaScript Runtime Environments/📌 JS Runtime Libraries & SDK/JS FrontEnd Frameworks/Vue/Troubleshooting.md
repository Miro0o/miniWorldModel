# Troubleshooting



## 👉 "Could not resolve dependency," error when running "vue upgrade"
#vue #js #web #frontend #npm 

You are likely using npm version 7. (Using npm version 7, I was able to replicate your error based on your error message.) The easiest solutions are:

- Use `npm`'s `--legacy-peer-deps` flag
- Use `npm` version 6 (where the behavior of `npm` version 7's `--legacy-peer-deps` flag is the default)

The tutorial and packages were probably written and tested with `npm` version 6 (or maybe 5 or 4). Lots of existing projects run into this `ERESOLVE` error in `npm` version 7 because that version started treating peer dependencies problems as errors instead of advisory issues that could be ignored.



["Could not resolve dependency," error when running "vue upgrade"]: https://stackoverflow.com/questions/68705211/could-not-resolve-dependency-error-when-running-vue-upgrade