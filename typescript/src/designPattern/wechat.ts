import Strategy from './Strategy';

// 策略的具体实现 Wechat
export default class Wechat implements Strategy {
    handleShare(): void {
        console.log('wechat share...');
    }
}