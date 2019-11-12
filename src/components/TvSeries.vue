<template>
    <mentionable-textarea
            ref="mentionableTextarea"
            :rows="5"
            :classes="classes"
            placeholder="Start mentioning users with @ or tv series with #"
            @input="onInput"
            @onMention="onMention(instance, $event)"
            :modeIdentifiers="modeIdentifiers"
            :isLoading="isLoading"/>
</template>

<script>
    import {dummyUsers} from './dummyUsers';
    import {backendPromise} from './dummyShows';
    import debounce from 'debounce';
    import {incidentMention, MODE_INCIDENT, userMention} from "./MentionModes";
    import MentionableTextarea from "../MentionableTextarea";

    export default {
        name: "tv-series",
        components: {
            MentionableTextarea
        },
        data() {
            return {
                isLoading: false,
                currentMode: 0,
                searchParam: '',
                tvSeries: []
            }
        },
        computed: {
            classes() {
                return ['form-control', 'margin-bottom-6'];
            },
            filteredUserList() {
                if (this.searchParam && this.searchParam !== '') {
                    return dummyUsers.filter(user => user.name.toLowerCase().startsWith(this.searchParam.toLowerCase()));
                }
                if (dummyUsers && dummyUsers.length > 0) {
                    return dummyUsers;
                } else {
                    return [];
                }
            },
            tvList() {
                return this.tvSeries;
            },
            instance() {
                return this;
            },
            modeIdentifiers() {
                return [
                    {...userMention, suggestions: this.filteredUserList},
                    {...incidentMention, suggestions: this.tvList}
                ]
            }
        },
        methods: {
            onInput(value) {
                this.$emit('input', value);
            },
            onMention: debounce((self, event) => {
                self.currentMode = event.mode;
                self.searchParam = event.searchParam;
                if (self.currentMode === MODE_INCIDENT) {
                    self.searchTvSeries();
                }
            }, 150),
            searchTvSeries() {
                if (this.searchParam && this.searchParam !== '') {
                    this.isLoading = true;
                    backendPromise(this.searchParam)
                        .then((tvSeries) => tvSeries.sort((a, b) => a.serial - b.serial))
                        .then((tvSeries) => this.tvSeries = tvSeries)
                        .finally(() => this.isLoading = false);
                }
            },
            onDummyEvent(event){
                this.$refs.mentionableTextarea.clearSelection();
                this.$refs.mentionableTextarea.setSelection(event.text);
            }
        }
    }
</script>

<style scoped>

</style>
