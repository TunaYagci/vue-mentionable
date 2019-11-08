<template>
    <div class="row" style="padding: 5px;">
        <div class="col-md-12">
            <div class="container-fluid">
                <span>
                    <img src="../assets/logo.png"
                         class="user default-user-size"
                         alt="avatar"
                         :style="sizeStyle"/>
                    </span>
                <span class="left-space text-center">
                    <strong>{{username}}</strong>
                </span>
                <span class="left-space text-align-right">{{ user && user.fullName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {dummyUsers} from './dummyUsers';

    export default {
        name: 'mentionable-user',
        props: {
            size: {
                type: [Number, String],
                required: false
            },
            mention: {
                type: Object,
                required: false
            },
            showDefaultAvatar: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        computed: {
            username() {
                return this.mention.name;
            },
            user() {
                if (dummyUsers && dummyUsers.length > 0) {
                    return dummyUsers.find(user => user.name === this.mention.name);
                } else {
                    return [];
                }
            },
            sizeStyle() {
                const size = parseInt(this.size);
                if (size) {
                    return {
                        'min-width': `${size}px`,
                        'width': `${size}px`,
                        'min-height': `${size}px`,
                        'height': `${size}px`,
                        'line-height': `${size}px`
                    }
                } else {
                    return null;
                }
            }
        }
    }
</script>

<style scoped>
    .user {
        display: inline-block;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
    }

    .default-user-size {
        width: 35px;
        height: 35px;
        line-height: 35px;
    }

    .left-space {
        margin-left: 12px;
    }

    .text-align-right {
        text-align: right;
    }
</style>
