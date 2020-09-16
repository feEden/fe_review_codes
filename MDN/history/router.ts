interface routeType {
    name: string,
    path: string,
}

interface RouterType {
    mode?: string,
    routes: routeType[],
}

interface targetType {
    path: string,
}

class Router {
    private routesConf: routeType[];
    private mode: string | 'hash';

    constructor(config: RouterType) {
        const { mode, routes } = config;
        this.routesConf = routes;
        this.mode = mode || 'hash';
    }

    push(target: targetType) {
        let path = target.path;
        const item = this.routesConf.find(({ path }) => path === path);
        if (item) {
            if (this.mode === 'history') {
                window.history.pushState(null, name, path);
            } else {
                // 默认hash
                window.location.hash = `#${path}`;
            }
        } else {
            throw new Error(`${path} 404`);
        }
    }

    replace(target: targetType) {
        let path = target.path;
        const item = this.routesConf.find(({ path }) => path === path);
        if (item) {
            if (this.mode === 'history') {
                window.history.replaceState(null, name, path);
            } else {
                // 默认hash
                window.location.hash = `#${path}`;
            }
        } else {
            throw new Error(`${path} 404`);
        }
    }
}

const router: Router = new Router({
    mode: 'hash',
    routes: [
        {
            path: 'test1',
            name: 'test1',
        },
        {
            path: 'test2',
            name: 'test2',
        },
    ],
});

console.log(router);