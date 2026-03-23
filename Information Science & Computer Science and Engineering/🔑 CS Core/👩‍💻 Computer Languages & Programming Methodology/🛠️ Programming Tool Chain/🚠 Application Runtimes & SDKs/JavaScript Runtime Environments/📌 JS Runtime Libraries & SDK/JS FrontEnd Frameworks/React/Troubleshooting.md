# Troubleshooting

[TOC]



## 👉 `TypeError: results.map is not a function`
> NOTE: in my case this has something to do with this ↗ [`ER_WRONG_FIELD_WITH_GROUP` | Disable `ONLY_FULL_GROUP_BY`](../../../../../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DBMS%20(DataBase%20Management%20System)%20Implementations/RDBMS%20(Relational)/🌙%20MySQL/Troubleshooting.md) problem


Function `map()` can be used only on **array**. In this situation it looks like `props.results` is not array or has not been set yet (this can happen if you are fetching data with Axios or something like that).

I would recommend you to place something like this at the start of function:

```javascript
if (!props.results) return 'no data';
if (!Array.isArray(props.results)) return 'results are not array'
```

---

**after clarification**

You get response on your `onreadystatechange` request which usualy comes in JSON or XML. I think your answer is stringified json. Try to use `JSON.parse(response)` in case of JSON or `(new DOMParser()).parseFromString(response,"text/xml")` in case of XML.

In your component it may look like this

```javascript
request.onreadystatechange = function() {
   (this.readyState == 4 && this.status == 200)
      && setAnswer([JSON.parse(this.responseText), true]);
};
```


[How to fix "TypeError: results.map is not a function",in React]: https://stackoverflow.com/questions/58343639/how-to-fix-typeerror-results-map-is-not-a-function-in-react)



## 👉 Using env variables in React
I imagine you got this working by now, but for anyone else that finds this, you set your default environment variables in a `.env` file at the root of your "create-react-app" project.

To separate out the variables used when using `npm start` and `npm run build` you can create two more env files - `.env.development` and `.env.production`. 

`npm start` will set `REACT_APP_NODE_ENV` to `development`, and so it will automatically use the `.env.development` file, and `npm run build` sets `REACT_APP_NODE_ENV` to `production`, and so it will automatically use `.env.production`. Values set in these will override the values in your `.env`.

If you're working with other people, and have values specific to your machine only, you can override values in `.env.development` and `.env.production` by adding those values to a new file - `.env.development.local` and `.env.production.local` respectively. 

**EDIT:** I should point out that the environment variables you have set must start with "REACT_APP_", eg. "REACT_APP_MY_ENV_VALUE".

**EDIT 2:** if you need more than just development, and production, use [env-cmd](https://github.com/toddbluhm/env-cmd), as specified by [this comment](https://github.com/facebook/create-react-app/issues/3903#issuecomment-365096630).


[👍 Using environment variables in a React application]: https://adostes.medium.com/using-environment-variables-in-a-react-application-ac3b6c307373

[👍 How to set build .env variables when running create-react-app build script? | Stackoverflow]: https://stackoverflow.com/questions/42458434/how-to-set-build-env-variables-when-running-create-react-app-build-script



## Ref

