<template>
    <div v-if="bShow">
        <div class="overlay"></div>
        <div class="modal show">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"> Настройки </h5>
                    <button type="button" class="btn-close" @click="fnClose"></button>
                </div>
                <div class="modal-body">
                    <template v-for="(oItem, sName) in oStruct" :key="oItem">
                        <form_component :item="oItem" @input="(mV) => fnInput(mV, sName)" :value="oItems[sName]" />
                    </template>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import forms from "./forms.vue"
import form_component from "./form_component.vue"
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
import { a, cc } from "../lib"

export default {
    props: [],

    components: {
        forms,
        form_component
    },

    computed: {
        oItems() {
            return this.$store.state.oDatabase['settings'].data
        },
        oStruct() {
            return this.$store.state.oSettingsForm
        },
        bShow() { 
            return this.$store.state.oEditWindow['settings'].window_show 
        }
    },

    methods: {
        ...mapMutations(a`fnHideEditWindow fnEditWindowSave`),
        fnInput(mV, sName) {
            this.oItems[sName] = mV
        },
        fnClose() {
            this.fnHideEditWindow('settings')
        },
        fnSave() {
            this.fnHideEditWindow('settings')
        }
    }
}
</script>

<style>
.show {
    display: block !important;
}
.overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0,0,0,0.4);
    z-index: 100;
}
</style>