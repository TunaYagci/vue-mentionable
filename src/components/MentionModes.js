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
