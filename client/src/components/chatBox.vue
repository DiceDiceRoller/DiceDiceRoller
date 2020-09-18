<template>
        <div class="container">
            <div class="col-lg-6 offset-lg-3">
                <div v-if="ready">
                    <p v-for="(user, index) in info" :key="index">
                        {{user.username}} {{user.type}}
                    </p>
                </div>
                <div class="card chatbox" v-if="ready">
                    <div class="card-header text-white">
                        <h4>Chat Room</h4>
                    </div>
                    <ul class="list-group list-group-flush text-right chat-box">
                        <small v-if="typing" class="text-white">{{typing}} is typing</small>
                        <li class="list-group-item" v-for="(message, index) in messages" :key="index">
                            <span :class="{'float-left':message.type === 1}">
                                {{message.message}}
                                <small>:{{message.user}}</small>
                            </span>
                        </li>
                    </ul>
                    <div class="card-body">
                        <form @submit.prevent="send">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="newMessage"
                                    placeholder="Enter message here">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
     data () {
         return {
             messages: [],
             typing: false,
             username: this.$store.state.playerName,
             ready: true,
             info: [],
             connections: 0,
            newMessage: null
         }
        },
        created() {
        console.log(this.connections, '<<< this.connections')
            window.onbeforeunload = () => {
                this.$socket.emit('leave', this.username);
            }
        },
        watch: {
            newMessage(value) {
                value ? this.$socket.emit('typing', this.username) : this.$socket.emit('stopTyping')
            }
        },
        methods: {
            send() {
                this.messages.push({
                    message: this.newMessage,
                    type: 0,
                    user: 'Me',
                });
                this.$socket.emit('chatMessage', {
                    message: this.newMessage,
                    user: this.username
                });
                this.newMessage = null;
            }
        },
        sockets: {
            chatMessage (data) {
                console.log(this.connections, "this.connections di chat")
                console.log(data, '<<< DATA MESSAGE')
                    this.messages.push({
                    message: data.message,
                    type: 1,
                    user: data.user,
                });
            },
            typing (data) {
                this.typing = data;
            },
            stopTyping () {
                this.typing = false;
            },
            joined (data)  {
                console.log(data, '>>>> JOINED')
                this.info.push({
                    username: data,
                    type: 'joined'
                });

                setTimeout(() => {
                    this.info = [];
                }, 5000);
            },
            leave (data) {
                this.info.push({
                    username: data,
                    type: 'left'
                })

                setTimeout(() => {
                    this.info = [];
                }, 5000);
            },
            connections (data) {
                this.connections = data;
            }

        }}
</script>

<style>
.container{
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */
}
</style>

