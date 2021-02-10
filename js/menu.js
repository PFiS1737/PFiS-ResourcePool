document.write('
<div class="mdui-toolbar mdui-color-theme">
    <a mdui-drawer="{target: '#menu',overlay:true}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
    <span class="mdui-typo-title">Eruda 设置</span>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:location.reload();" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
</div>
<div class="mdui-drawer mdui-drawer-close mdui-drawer-full-height mdui-color-white" id="menu">
    <div class="sideImg mdui-color-theme">
        <div class="mdx-side-lazyload mdx-bg-loaded image"></div>
        <div class="side-info-more">PFiS<br><span class="side-info-oth">页面特效设置</span></div>
    </div>
    <nav role="navigation">
        <ul class="mdui-list">
            <li class="mdui-list-item mdui-ripple" style="height: 48px;">
                <a href="/" style="display: flex; width: 100%;">
                    <i class="mdui-list-item-icon mdui-text-color-black-icon mdui-icon material-icons" style="margin: 12px 0px;">home</i>
                    <div class="mdui-list-item-content mdui-text-color-black-text" style="margin-left: 30px">首页</div>
                </a>
            </li>
            <li class="mdui-list-item mdui-list-item-active mdui-ripple" style="height: 48px;">
                <a href="/effects/Eruda" style="display: flex; width: 100%;">
                    <i class="mdui-list-item-icon mdui-text-color-black-icon mdui-icon material-icons" style="margin: 12px 0px;">build</i>
                    <div class="mdui-list-item-content mdui-text-color-black-text" style="margin-left: 30px">Eruda 设置</div>
                </a>
            </li>
            <li class="mdui-list-item mdui-ripple" style="height: 48px;">
                <a href="/effects/Live2D" style="display: flex; width: 100%;">
                    <i class="mdui-list-item-icon mdui-text-color-black-icon mdui-icon material-icons" style="margin: 12px 0px;">build</i>
                    <div class="mdui-list-item-content mdui-text-color-black-text" style="margin-left: 30px">Live2D 设置</div>
                </a>
            </li>
            <li class="mdui-list-item mdui-ripple" style="height: 48px;">
                <a href="/effects/Sakura" style="display: flex; width: 100%;">
                    <i class="mdui-list-item-icon mdui-text-color-black-icon mdui-icon material-icons" style="margin: 12px 0px;">build</i>
                    <div class="mdui-list-item-content mdui-text-color-black-text" style="margin-left: 30px">Sakura 设置</div>
                </a>
            </li>
        </ul>
    </nav>
</div>
')
