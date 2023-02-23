import { createStore } from 'vuex'

import { FileSystemDriver } from './FileSystemDriver'

import { fnSaveFile, fnRandomString } from './lib'

// NOTE: Константы
export const DATABASE_PATH = "links-database"
export const DATABASE_UPDATE_TIMEOUT = 30000

// Create a new store instance.
export default createStore({
    state () {
        return {
            bShowRepoWindow: true,
            aDefaultRepoList: [
                { type:"localstorage", name: "Локальное хранилище" }
            ],
            aReposList: [],
            oReposFileSystem: { },
            iSelectedRepoIndex: null,

            bShowLoader: false,
            bShowSaveToast: false,

            sPassword: "",

            oStructure: {
                table: {
                    category: {
                        label: "Категория",
                        type: "text",
                    },
                    name: {
                        label: "Название",
                        type: "text",
                    },
                    url: {
                        label: "URL",
                        type: "text",
                    },
                    description: {
                        label: "Описание",
                        type: "textarea",
                    },
                }
            },
            oDatabase: {
                table: {
                    last_index: 0,
                    page: 1,
                    data: [
                    ],
                    selection_id: null,
                    filter: {
                        category: "", 
                        name: "", 
                        url: "",
                        description: "",
                    }
                },
                settings: {
                    data: {
                        save_to_local: false,
                        save_to_all_repos: false
                    },
                    selection_id: null,
                    filter: {
                        id: "", 
                        label: "", 
                        type: "",
                        value: "",
                    }
                }
            },
            oSettingsForm: {
                // save_to_local: { label: "Сохранять и в локальное хранилище", type:"checkbox", value: false }
                // save_to_all_repos: { label: "Сохранять все в другие репо", type:"checkbox", value: false }
            },
            oEditWindow: {
                table:{
                    window_show: false,
                    edit_item: {},
                },
                settings:{
                    window_show: false,
                    edit_item: {},
                },
            },
            oForms: {
                table: {
                    category: "",
                    name: "",
                    url: "",
                    description: "",
                }
            },

            iUnsavedChanges: 0,

            sMode: "",
        }
    },
    mutations: {
        fnUpdateFormVar(state, { sFormName, sFieldName, mV }) {
            state.oForms[sFormName][sFieldName] = mV
        },
        fnUpdateDatabaseVar(state, { sTableName, sVarName, mV }) {
            state.oDatabase[sTableName][sVarName] = mV
        },
        fnUpdateVar(state, { sName, sV }) {
            state[sName] = sV
            // if (sName=="sPassword") {
            //     localStorage.setItem('sPassword', sV)
            // }
        },
        fnUpdateFilter(state, { sTableName, sName, sV }) {
            state.oDatabase[sTableName].filter[sName] = sV
        },

        fnReposRemove(state, iIndex) {
            state.aReposList.splice(iIndex-state.aDefaultRepoList.length, 1)
            localStorage.setItem('aReposList', JSON.stringify(state.aReposList))
        },
        fnReposSelect(state, iIndex) {
            state.iSelectedRepoIndex = iIndex
        },
        fnReposClean(state) {
            state.aReposList = []
            localStorage.setItem('aReposList', JSON.stringify(state.aReposList))
        },
        fnReposUpdate(state, { iIndex, oObj }) {
            if (iIndex==-1) {
                state.aReposList.push(oObj)
            } else {
                state.aReposList.splice(iIndex-state.aDefaultRepoList.length, 1, oObj)
            }
            localStorage.setItem('aReposList', JSON.stringify(state.aReposList))
        },
        fnLoadRepos(state) {
            try {
                state.aReposList = JSON.parse(localStorage.getItem('aReposList') || '[]')
                const parsedUrl = new URL(window.location);
                const { searchParams } = parsedUrl;
                if (searchParams.get('type')) {
                    var oNewItem = {
                        type: searchParams.get('type'),
                        name: searchParams.get('name'),
                        login: searchParams.get('login'),
                        repo: searchParams.get('repo'),
                        key: searchParams.get('key'),
                        url: searchParams.get('url'),
                        username: searchParams.get('username'),
                        password: searchParams.get('password'),
                    }
                    var oItem = state.aReposList.find((oI) => oI.name == oNewItem.name)
                    if (oItem) {
                        for (var sK in oNewItem) {
                            oItem[sK] = oNewItem[sK]
                        }
                        localStorage.setItem('aReposList', JSON.stringify(state.aReposList))
                    } else {
                        state.aReposList.push(oNewItem)
                        localStorage.setItem('aReposList', JSON.stringify(state.aReposList))
                    }
                }
                // state.sPassword = (localStorage.getItem('sPassword') || "")
            } catch(_) {

            }
        },

        fnUpdateDatabase(state, oDatabase) {
            state.oDatabase = oDatabase
        },

        fnHideRepoWindow(state) {
            state.bShowRepoWindow = false
        },
        fnShowRepoWindow(state) {
            state.bShowRepoWindow = true
        },
        fnShowLoader(state) {
            state.bShowLoader = true
        },
        fnHideLoader(state) {
            state.bShowLoader = false
        },

        fnShowSettingsWindow(state) {
            state.oEditWindow['settings'].window_show = true
        },

        fnHideEditWindow(state, sFormName) {
            state.oEditWindow[sFormName].window_show = false
        },
        fnShowEditWindow(state, { sFormName, oItem }) {
            state.oEditWindow[sFormName].window_show = true
            state.oEditWindow[sFormName].edit_item = oItem
            for (var sN in state.oForms[sFormName]) {
                if (sN in oItem) {
                    state.oForms[sFormName][sN] = oItem[sN]
                } else {
                    state.oForms[sFormName][sN] = ""
                }
            }
        },
        fnEditWindowSave(state, { sTableName, sFormName }) {
            for (var sN in state.oForms[sFormName]) {
                state.oEditWindow[sFormName].edit_item[sN] = state.oForms[sFormName][sN]
            }
            if (!state.oEditWindow[sFormName].edit_item.id) {
                state.oEditWindow[sFormName].edit_item.id = ++state.oDatabase[sTableName][`last_index`]
                state.oDatabase[sTableName][`data`].push(state.oEditWindow[sFormName].edit_item)
            }
            state.iUnsavedChanges++;
        },
        fnRemoveFromTable(state, { sTableName, oItem }) {
            state.oDatabase[sTableName][`data`] = state.oDatabase[sTableName][`data`].filter((oI) => oI.id != oItem.id)
            state.iUnsavedChanges++;
        },
        fnCreateFileSystem(state, { iIndex }) {
            var aRepos = state.aDefaultRepoList.concat(state.aReposList)
            state.oReposFileSystem[iIndex] = new FileSystemDriver(aRepos[iIndex])
        },
        fnSetNeedSaveToCurrentRepo(state) {
            var aRepos = state.aDefaultRepoList.concat(state.aReposList)
            aRepos[state.iSelectedRepoIndex].need_save = true
        },
    },
    actions: {
        fnExportDatabase({ commit, state, dispatch, getters }) {
            fnSaveFile('links-database', JSON.stringify(state.oDatabase, null, 4))
        },
        fnImportDatabase({ commit, state, dispatch, getters }, sData) {
            commit('fnUpdateDatabase', JSON.parse(sData))
        },

        fnExportRepos({ commit, state, dispatch, getters }) {
            fnSaveFile('links-repos', JSON.stringify(state.aReposList, null, 4))
        },
        fnImportRepos({ commit, state, dispatch, getters }, sData) {
            commit('fnUpdateRepos', JSON.parse(sData))
        },

        fnPrepareRepo({ commit, state, dispatch, getters }) {
            commit('fnHideRepoWindow')
            commit('fnCreateFileSystem', { iIndex: state.iSelectedRepoIndex })
            commit('fnSetNeedSaveToCurrentRepo')
            dispatch('fnLoadDatabase')
        },
        fnSaveToAllDatabase({ commit, state, getters, dispatch }) {
            for (var iIndex in getters.aReposList) {
                var oRepo = getters.aReposList[iIndex]
                if (oRepo.need_save) {
                    if (!state.oReposFileSystem[iIndex]) {
                        commit('fnCreateFileSystem', { iIndex: iIndex })
                    }
                    dispatch('fnSaveDatabase', { oFileSystem: state.oReposFileSystem[iIndex] });
                }
            }
        },
        fnSaveCurrentDatabase({ commit, state, getters, dispatch }) {
            dispatch('fnSaveDatabase', { oFileSystem: getters.oCurrentFileSystem });
        },
        fnSaveDatabase({ commit, state, getters }, { oFileSystem } ) {
            return oFileSystem.fnWriteFileJSON(DATABASE_PATH, state.oDatabase, state.sPassword)
                .then(() => {
                    state.iUnsavedChanges = 0;
                })
                .catch(() => {
                    oFileSystem.fnReadFile(DATABASE_PATH)
                        .then(() => {
                            return oFileSystem.fnWriteFileJSON(DATABASE_PATH, state.oDatabase, state.sPassword)
                                .then(() => {
                                    state.iUnsavedChanges = 0;
                                })
                        })
                })
        },
        fnLoadDatabase({ commit, state, getters }) {
            commit('fnShowLoader')            
            getters.oCurrentFileSystem
                .fnReadFileJSON(DATABASE_PATH, state.sPassword)
                .then((mData) => {
                    if (!mData) throw "Cannot destructure property"
                    commit('fnUpdateDatabase', mData)
                    // commit('fnUpdateDatabase', mData=demo_database)
                    commit('fnHideLoader')
                })
                .catch((oE) => {
                    console.error(oE)
                    if ((oE+"").match(/Malformed UTF-8 data/)) {
                        alert("Не правильный пароль");
                        commit('fnShowRepoWindow')
                        return
                    }
                    if ((oE+"").match(/Cannot destructure property/)
                        || (oE+"").match(/Not Found/)) {
                            getters.oCurrentFileSystem.fnWriteFileJSON(DATABASE_PATH, state.oDatabase, state.sPassword)
                            .then(() => {
                                getters.oCurrentFileSystem
                                    .fnReadFileJSON(DATABASE_PATH, state.sPassword)
                                    .then((mData) => { 
                                        commit('fnUpdateDatabase', mData)
                                        commit('fnHideLoader')
                                    })
                            })
                        return
                    }
                    commit('fnShowRepoWindow')
                })
        },
        fnDropDatabase({ commit, state }) {
            localStorage.setItem(DATABASE_PATH, null)
        },
        fnGetFieldValue: ({ state, getters }) => (sFormName, sFieldName) => {
            return getters.fnGetFieldValue(sFormName, sFieldName)
        },
    },
    getters: {
        fnGetSetting: (state) => (sName) => {
            return state.oDatabase['settings'].data[sName]
        },

        fnGetFieldValue: (state) => (sFormName, sFieldName) => {
            return state.oForms[sFormName][sFieldName]
        },
        aReposList(state) {
            return state.aDefaultRepoList.concat(state.aReposList)
        },
        oCurrentRepo(state, getters) {
            return getters.aReposList[state.iSelectedRepoIndex]
        },
        oCurrentFileSystem(state, getters) {
            return state.oReposFileSystem[state.iSelectedRepoIndex]
        },

        fnFilterGroups: (state) => (sFilter) => {
            return state.oDatabase.tasks_groups.filter((oI) => ~oI.name.indexOf(sFilter))
        },
    }
})