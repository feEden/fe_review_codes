import Strategy from './strategy';

// 上下文 负责调用不同策略实现的方法
export default class ShareContext {
    private type: String;
    private strategy: Strategy;

    constructor(type: String, strategy: Strategy) {
        this.type = type;
        this.strategy = strategy;
    }

    public getType(): String {
        return this.type;
    }

    public getStrategy(): Strategy {
        return this.strategy;
    }
}