# vue-mentionable
![npm](https://img.shields.io/npm/v/vue-mentionable)

Vue-mentionable is a series of Vue components where users can mention with any identifier, like `@admin` or `#156`, etc.

## Roadmap
1. Mentionable Textarea :white_check_mark:
1. Mentionable Input :soon:

## Installation

* `npm i vue-mentionable`
* (optional) Add `fontawesome` to your `index.html for **loading icon**

Register in `main.js`
```js
import vueMentionable from 'vue-mentionable';

Vue.use(vueMentionable);
```

Use in any component
```html
<mentionable-textarea :modeIdentifiers="modeIdentifiers" />
```

See [here](https://github.com/TunaYagci/vue-mentionable/blob/master/src/components/TvSeries.vue) for examples

## Docs

For props and events, see: https://tunayagci.github.io/vue-mentionable/#/docs

### 1. Mode Identifiers ###

* A mode is simply which suggestion component is being displayed.
* You **have to** register your modes to `mentionable-textarea`.
* A simple example follows:

```js
{
  mode: 0, // a unique id
  key: '@', // the actual identifier
  comp: MentionableUser // suggestion component
}
```

* An enhanced example: 
https://github.com/TunaYagci/vue-mentionable/blob/master/src/components/MentionModes.js

```js
import MentionableIncident from "./MentionableIncident.vue";
import MentionableUser from "./MentionableUser.vue";

const MODE_USER = 0;
const MODE_INCIDENT = 1;

const userMention = {
    mode: MODE_USER,
    key: '@',
    comp: MentionableUser,
    valueKey: 'name'
};

const incidentMention = {
    mode: MODE_INCIDENT,
    key: '#',
    comp: MentionableIncident,
    valueKey: 'serial'
};

export {userMention, incidentMention, MODE_INCIDENT, MODE_USER};
```


### 2. Listening mention events ###

* Mention events are triggered whenever user inputs while any mode is active.
* You are expected to update your suggestions in this lifecycle.

Here is an example:  
```html
<mentionable-textarea onMention="onMention" />
```
```js
onMention(event) {
    this.currentMode = event.mode;
    this.searchParam = event.searchParam;
    if (this.currentMode === MODE_INCIDENT) {
        this.searchTvSeries();
    }
}
```
* event is of type `{mode: <number>, searchParam: <string>}`
* `mode` is a number which is described a little above.
* In above code you can see I'm not updating user suggestion component. This is because user suggestion component is reactive and it is watching `this.searchParam`.
* Fetching tv series in this case is not reactive since I need to make an `http` call.

Note: you should most likely use `debounce` for user inputs. See [here](https://github.com/TunaYagci/vue-mentionable/blob/master/src/components/TvSeries.vue) for example

## Example

See the [source code](https://github.com/TunaYagci/vue-mentionable/blob/master/src/components/TvSeries.vue) for [live example](https://tunayagci.github.io/vue-mentionable/)
