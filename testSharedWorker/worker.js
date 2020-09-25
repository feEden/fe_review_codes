/**
 *  接收index1的两个数字，显示在index1，index1再通知index显示结果
 */

 // 记录连接的页面端口号和标示
const ports = [];
const ids = []

onconnect = function(e) {
    const port = e.ports[0];

    port.onmessage = function (e) {
        const { id, data } = e.data;
        // 第一次链接，注册窗口
        if (id && !data) {
            const index = ids.indexOf(id);
            if (index === -1) {
                ids.push(id);
                ports.push(port);
            }
        } else {
            // 通知另一个页面重新计算
            const index = ids.indexOf(id);
            if (index !== -1) {
                ports[index].postMessage(data);
            }
        }
    }
}