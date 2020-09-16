import  Strategy from './strategy';

// 策略的具体实现 Wechat
export default class QQ implements Strategy {
    handleShare(): void {
        console.log('qq share...');
    }
}