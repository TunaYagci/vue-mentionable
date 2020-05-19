<template>
    <div style="position:relative">
        <textarea :class="classes"
                  :id="elementId('TEXTAREA')"
                  :maxlength="maxlength"
                  :placeholder="placeholder"
                  :rows="rows"
                  :title="title"
                  :value="selection"
                  @blur="onFocusOut"
                  @click="onFocusIn"
                  @input="onInput($event)"
                  @keydown.down="down"
                  @keydown.enter="enter"
                  @keydown.esc="escape"
                  @keydown.tab="enter"
                  @keydown.up="up"
                  @keyup.delete="onDeleteKeyPressed"
                  @keyup.left="leftRightArrow"
                  @keyup.right="leftRightArrow"
                  autocomplete="off"
                  class="form-control"
                  ref="textarea"
                  v-autosize="selection">
        </textarea>
        <ul :id="elementId('UL')"
            @blur="onFocusOut"
            class="auto-complete dropdown-menu"
            ref="list"
            tabindex="-1"
            v-show="open">
            <i :class="loadingIconClass" class="auto-complete-spinner" v-if="isLoading"/>
            <li :class="bindClass(index,suggestion)"
                :key="index"
                @click="selectSuggestion(index)"
                class="auto-complete"
                v-for="(suggestion, index) in suggestions">
                <component :is="modeIdentifiers[getMode].comp"
                           :mention="suggestion">
                </component>
            </li>

            <li class="auto-complete disabled"
                v-if="suggestions.length === 0">
                <a v-if="isLoading">
                    <small>Searching...</small>
                </a>
                <a v-else>
                    <small>Type to search...</small>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import getCaretCoordinates from 'textarea-caret';
    import uuid from 'random-uuid';
    import Vue from 'vue';
    import 'bootstrap/dist/css/bootstrap.min.css'

    export default {
        components: {},
        introduction: 'A textarea where you can mention with custom identifiers',
        description: `This docs are made with \`propdoc\``,
        token: `
            <mentionable-textarea
                :rows="5"
                :classes=""
                @input=""
                @onMention=""
                :modeIdentifiers=""
                :isLoading=""/>`,
        name: "mentionable-textarea",
        props: {
            title: {
                type: String,
                note: 'Title of textarea element'
            },
            rows: {
                type: Number,
                default: 5,
                note: 'Row count of textarea element'
            },
            placeholder: {
                type: String,
                note: 'Placeholder of textarea element'
            },
            maxlength: {
                type: Number,
                required: false,
                note: 'Maximum length of textarea element'
            },
            classes: {
                type: Array,
                note: 'Custom css classes on textarea element'
            },
            isLoading: {
                type: Boolean,
                required: false,
                default: false,
                note: 'In case some backend loading mechanism is working, show icon'
            },
            modeIdentifiers: {
                type: Array,
                required: true,
                note: 'Hard to explain right here. Please see examples.'
            },
            initialSelection: {
                type: String,
                default: '',
                note: 'Please use this to set initial value of textarea'
            },
            loadingIconClass: {
                type: String,
                default: 'fas fa-sync fa-spin',
                required: false,
                note: 'Loading icon class'
            }
        },
        data() {
            return {
                open: false,
                current: 0,
                selection: '',
                mode: this.modeIdentifiers[0].mode,
                elementIdMap: new Map(),
                selectedULID:'',
            }
        },
        created() {
            this.selection = this.initialSelection; // v-model is buggy when you follow every input, keydown etc. events
        },
        computed: {
            getMode() {
                return this.mode;
            },
            suggestions() {
                return this.modeIdentifiers[this.getMode].suggestions;
            }
        },
        methods: {
            clearSelection() {
                this.selection = '';
            },
            setSelection(value) {
                this.selection = value;
            },
            elementId(id) {
                const uniqueId = uuid();
                const newId = `${id}-${uniqueId}`;
                this.elementIdMap.set(id, newId);
                if (id === 'UL'){
                    this.selectedULID = newId;
                }
                return newId;
            },
            getSelectionStart() {
                return this.$refs.textarea.selectionStart;
            },
            setListPosition(index) {

                let textAreaBounds = this.$refs.textarea.getBoundingClientRect();
                let textAreaWidth = textAreaBounds.width;

                let listBounds = this.$refs.list.getBoundingClientRect();
                let listWidth = listBounds.width;


                if (this.$refs && this.$refs.textarea && this.getSelectionStart() != null) {
                    let coords = getCaretCoordinates(this.$refs.textarea, index);

                    if (listWidth > 0) {
                        let leftPos = listWidth + coords.left + 8;
                        if (leftPos <= textAreaWidth) {
                            this.$refs.list.style.top = coords.top + 16 + 'px';
                            this.$refs.list.style.left = coords.left + 8 + 'px';
                        } else {
                            let availableWidth = textAreaWidth - listWidth;
                            this.$refs.list.style.top = coords.top + 16 + 'px';
                            this.$refs.list.style.left = availableWidth + 'px';
                        }
                    }
                }

            },
            onFocusOut(event) {
                if (event.relatedTarget && event.relatedTarget.id && this.elementIdMap.get(event.relatedTarget.nodeName) === event.relatedTarget.id) {
                    event.preventDefault();
                    return;
                }
                this.closeSuggestions();
            },
            onFocusIn() {
                this.identifierControl();
            },
            identifierControl() {
                const index = this.getSelectionStart();
                if (index >= 0 && this.selection.length >= (index - 1)) {
                    const lastIndexedIdentifier = this.getLastIndexedIdentifier(index);
                    const section = this.getLastValidSection(index, lastIndexedIdentifier);
                    if (section != null) {
                        this.mode = lastIndexedIdentifier.mode;
                        let lastIdentifierIndex = lastIndexedIdentifier.lastIndex;
                        this.openSuggestions(lastIdentifierIndex);
                        this.searchParamChanged(section);
                        return true;
                    }
                }
                this.closeSuggestions();
                return false;
            },
            getLastIndexedIdentifier(index) {
                const lastIndexSorted = this.modeIdentifiers
                    .map(identifier => {
                        return {...identifier, lastIndex: this.selection.lastIndexOf(identifier.key, index)}
                    })
                    .sort((a, b) => b.lastIndex - a.lastIndex);
                return lastIndexSorted[0];
            },
            getLastValidSection(index, lastIndexedIdentifier) {
                if (lastIndexedIdentifier.lastIndex !== -1) {
                    if (lastIndexedIdentifier.lastIndex === index) {
                        return null;
                    }
                    // lastIndexedIdentifier.lastIndex + 1 because lastIndex shows the identifier
                    const selection = this.selection.substring(lastIndexedIdentifier.lastIndex + 1, index);
                    if (selection.includes(' ')) {
                        return null;
                    }
                    return selection;
                }
                return null;
            },
            openSuggestions(index) {
                this.setListPosition(index);
                this.open = true;
                this.current = 0;
            },
            closeSuggestions() {
                if (this.open) {
                    this.open = false;
                    this.current = 0;
                }
            },
            onInput(event) {
                this.updateSelectionAndPublishEvent(event.target.value);
                if (event.data === ' ') {
                    this.closeSuggestions();
                } else {
                    this.identifierControl();
                }
            },
            scrollSelectedIntoView() {                
                let parentUL = document.getElementById(this.selectedULID);                 
                let selected = parentUL.getElementsByClassName("active");    
                if (selected[0] != null) {
                    let oH = parentUL.offsetHeight;  
                    let oT = selected[0].offsetTop;
                    let d = oT - oH;
                    parentUL.scrollTo(0, d + selected[0].clientHeight);
                }
            },
            updateSelectionAndPublishEvent(value) {
                this.selection = value;
                this.$emit('input', this.selection);
            },
            searchParamChanged(searchString) {
                if (searchString) {
                    this.$emit('onMention', {searchParam: searchString, mode: this.getMode});
                } else {
                    this.$emit('onMention', {searchParam: null, mode: this.getMode});
                }
                this.current = 0;
            },
            onDeleteKeyPressed() {
                if (!this.identifierControl()) {
                    this.closeSuggestions();
                }
            },
            enter(event) {
                if (this.open) {
                    this.selectSuggestion(this.current);
                    event.preventDefault();
                }
            },
            up(event) {
                if (this.open) {
                    if (this.suggestions.length > this.current && this.current > 0) {
                        this.current--;
                    }
                    Vue.nextTick(() => this.scrollSelectedIntoView());
                    event.preventDefault();
                }
            },
            down(event) {
                if (this.open) {
                    if (this.current >= 0 && this.suggestions.length - 1 > this.current) {
                        this.current++;
                    }
                    Vue.nextTick(() => this.scrollSelectedIntoView());
                    event.preventDefault();
                }
            },
            leftRightArrow() {
                this.identifierControl();
            },
            escape(){
                if (this.open) {
                    this.closeSuggestions();
                }
            },
            bindClass(index, suggestion) {
                let className = "";
                if (suggestion) {                    
                    if (index === this.current && suggestion.id !== "-1" && suggestion.id !== -1) {
                        className = "active ";
                    }
                    if (suggestion.id === "-1" || suggestion.id === -1) {
                        className = "disabled";
                    }
                    return className;
                }
            },
            isIndexExistsOnSuggestions(index) {
                return this.suggestions[index] && this.suggestions[index][this.modeIdentifiers[this.getMode].valueKey] && true;
            },
            setCursorPosition(position) {
                Vue.nextTick(() => this.$refs.textarea.selectionEnd = position);
            },
            selectSuggestion(index) {
                if (this.open) {
                    if (this.isIndexExistsOnSuggestions(index)) {
                        const selectionStart = this.getSelectionStart();
                        const lastIndexedIdentifier = this.getLastIndexedIdentifier(selectionStart);
                        const startIndex = lastIndexedIdentifier.lastIndex + 1;
                        const replace = this.suggestions[index][this.modeIdentifiers[this.getMode].valueKey] + ' ';
                        this.updateSelectionAndPublishEvent(
                            this.replaceAt(
                                this.selection,
                                this.getLastValidSection(selectionStart, lastIndexedIdentifier),
                                replace,
                                startIndex
                            ));
                        this.setCursorPosition(startIndex + replace.length);
                    } else {
                        throw new Error(`Suggestion is not found in index= ${index}`);
                    }
                    this.closeSuggestions();
                    this.$refs.textarea.focus();
                }
            },
            replaceAt(input, search, replace, start) {
                return input.slice(0, start) + replace + input.slice(start + search.length, input.length);
            }
        }
    }
</script>


<style scoped>
    ul.auto-complete.dropdown-menu {
        display: block;
        position: absolute;
        top: 24px;
        left: 15px;
        max-height: 150px;
        max-width: 300px;
        width: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .auto-complete-spinner {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .active {
        background-color: lightgray;
    }

    textarea {
        resize: none;
    }
</style>
