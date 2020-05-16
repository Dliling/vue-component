/**
 * @file plugin
 */
import Notice from './notice';

let currentNotice = null;

function createNotice({Vue, title, message, propsData, onClose}) {
    // 新建组件实例
    const Constructor = Vue.extend(Notice);
    let notice = new Constructor({
        propsData: {
            title,
            message,
            ...propsData
        }
    });
    notice.$mount();
    notice.$on('hide', onClose);
    document.body.appendChild(notice.$el);
    return notice;
}

export default {
    install(Vue) {
        Vue.prototype.$notice = function (title, message, option) {
            // 新建组件实例,追加body
            // 单例模式,新建一个notice实例

            if (currentNotice) {
                currentNotice.hide();
            }
            currentNotice = createNotice({
                Vue,
                title,
                message,
                propsData: option,
                onClose: () => {
                    currentNotice = null;
                }
            });
        };
    }
};
