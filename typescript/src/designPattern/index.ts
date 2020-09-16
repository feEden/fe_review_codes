import Wechat from './wechat';
import QQ from './qq';
import ShareContext from './shareContext';

function test(type: String): void {
    const set = new Set<ShareContext>();
    set.add(new ShareContext('wechat', new Wechat()));
    set.add(new ShareContext('qq', new QQ()));

    set.forEach((item: ShareContext) => {
        if (item.getType() === type) {
            item.getStrategy().handleShare();
        }
    });
}

test('wechat');
test('qq');