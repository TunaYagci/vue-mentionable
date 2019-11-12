# vue-mentionable

## Install

* `npm i vue-mentionable`
* (optional) Add `fontawesome` to your `index.html for **loading icon**

## Usage

Register in `main.js`
```js
import vueMentionable from 'vue-mentionable';

Vue.use(vueMentionable);
```

Use in any component
```html
<mentionable-textarea :modeIdentifiers="modeIdentifiers" />
```

## Docs

See: https://tunayagci.github.io/vue-mentionable/#/docs

### Mode Identifiers ###

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

## Example

See the [source code](https://github.com/TunaYagci/vue-mentionable/blob/master/src/components/TvSeries.vue) for [live example](https://tunayagci.github.io/vue-mentionable/)
