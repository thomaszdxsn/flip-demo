# History

> 2022年末，Chrome发布了 View Transition API 的实现，有了它我们不必要自己手动计算两个元素之间的偏移量.

1. [FLIP Animation](https://aerotwist.com/blog/flip-your-animations/)
2. [Framer Motion](https://www.framer.com/motion/)
3. [View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions)


# Caveat

> 以下假设 SPA 路由间的 View Transition，不是指同一个页面内的 View Transition

1. 必须调用 `document.startTransition()`，意味着 `<Link>` 组件需要被这个函数包裹。React 必须调用 `flushSync()` 这个 API
2. 不能在中间加入 Loading View，否则是 3 个 Views 了。所以必须使用 Prefetch，提前将页面的内容加载
3. 某些细节需要微调，有时候需要加入自定义的 animation
