/*
 * @,@Author: ,: 宋一楠
 * @,@Date: ,: 2020-12-17 21:34:06
 * @,@LastEditTime: ,: 2021-02-07 11:05:43
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: 宋一楠
 * @,@FilePath: ,: /wxapp/src/common/http.api.js
 */
// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// let getCurriculumListUrl = 'rest/cdc-grow/grow/curriculum/getCurriculumList';
// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
import { getCommonApi } from "../api/common";
import { getWxchatApi } from "../api/wxchat";
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	// let getSearch = (params = {}) => vm.$u.get(hotSearchUrl, {
	// 	id: 2
	// });
	
	// 此处使用了传入的params参数，一切自定义即可
	// let getInfo = (params = {}) => vm.$u.post(indexUrl, params);
	let COMMONAPI = getCommonApi(vm)
	let WXCHATAPI = getWxchatApi(vm)
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {COMMONAPI,WXCHATAPI};
}

export default {
	install
}