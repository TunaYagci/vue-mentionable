<template>
    <section class="docs">
        <prop-doc :component="mentionableTextarea">
            <template slot="pre-props">
                <h2>Events</h2>
                <section class="props">
                    <div class="proprow labels">
                        <div class="propcol name required">name</div>
                        <div class="propcol type">params</div>
                        <div class="propcol notes">notes</div>
                    </div>
                    <div class="proprow" v-for="event in events" :key="event.name">
                        <div class="propcol name">{{event.name}}</div>
                        <div class="propcol type">{{event.params}}</div>
                        <div class="propcol notes">{{event.notes}}</div>
                    </div>
                </section>
                <h2>Props</h2>
            </template>
        </prop-doc>
    </section>
</template>
<script>
    import propDoc from 'propdoc';
    import MentionableTextarea from "../MentionableTextarea";

    export default {
        name: 'documentation',
        components: {propDoc},
        data() {
            return {
                mentionableTextarea: MentionableTextarea,
            }
        },
        computed: {
            events() {
                return [
                    {
                        name: '@input',
                        params: 'input text (string)',
                        notes: 'Classic input event. Triggered every time user inputs.'
                    },
                    {
                        name: '@onMention',
                        params: `Event (Object). Containing these fields:
            * mode: A Number represents the current suggestion mode
            * searchParam: as what user entered after the identifier. Example: @'thisText', without '@'`,
                        notes: 'Use to update your suggestion components'
                    }
                ];
            }
        }
    }
</script>

<style>
    .docs {
        padding: 50px;
        background-color: rgba(43, 59, 67, 0.05);
    }
</style>


<style lang="scss">
    $base-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !default;
    $code-font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !default;

    .props {
        .proprow:nth-child(even) {
            background-color: transparentize(#2b3b43, 0.95);
        }

        .proprow {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 1.6rem 0.8rem;
        }

        .labels {
            padding: 0.8rem;

            > .propcol {
                font-size: 1rem;
                font-weight: 400;
                text-transform: uppercase;
                color: #547484;
            }

            .name span {
                margin-left: 0.4rem;
            }
        }

        .propcol {
            font-size: 1.2rem;
            flex: 1;

            &.notes {
                flex: 2;
            }
        }

        .name {
            font-weight: 600;

            &.required span {
                border-bottom: 0.2rem solid transparentize(#CE7780, 0.5);
            }
        }
    }

    .propcol * {
        display: inline;
    }

    .propdoc {
        font-family: $base-font-family;
        margin-bottom: 12rem;
    }

    code {
        font-family: $code-font-family;
        background-color: transparentize(#F3C387, 0.5);
        color: #14435A;
        padding: 0.2rem;
    }

    pre code {
        line-height: 1.8;
        padding: 1.2rem;

        &.labelled, .token & {
            position: relative;
            margin-bottom: 2rem;

            &:after {
                content: attr(data-lang);
                font-size: 0.8rem;
                color: #CE7780;
                font-weight: 600;
                font-family: $base-font-family;
                position: absolute;
                right: 1.2rem;
                bottom: -2rem;
            }
        }
    }

    .use, .props {
        margin: 2.8rem 0;
    }

    .token pre {
        margin: 0;
    }

    .use {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.8rem;
    }
</style>
