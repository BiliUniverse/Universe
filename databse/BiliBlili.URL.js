switch (url.host) {
	case "grpc.biliapi.net":
		switch (url.path) {
			case "bilibili.app.playurl.v1.PlayURL/PlayView": // 普通视频-播放地址
				break;
			case "bilibili.pgc.gateway.player.v2.PlayURL/PlayView": // 番剧-播放地址
				break;
			case "bilibili.app.nativeact.v1.NativeAct/Index": // 动画（番剧）（港澳台）（白）
			case "bilibili.app.interface.v1.Search/Suggest3": // 搜索-建议
                break;
			case "bilibili.polymer.app.search.v1.Search/SearchAll": // 搜索-全部结果（综合）
                break;
			case "bilibili.polymer.app.search.v1.Search/SearchByType": // 搜索-按分类搜索（番剧、用户、影视、专栏）
        };
		break;
	case "app.bilibili.com":
	case "app.biliapi.net":
		switch (url.path) {
			case "x/resource/show/tab/v2": // 首页-Tab
				break;
			case "x/resource/show/tab/bubble": // 首页-Tab-?
				break;
			case "x/v2/feed/index":
				break;
			case "x/resource/ip":
				break;
			case "x/resource/fingerprint":
				break;
			case "x/resource/show/skin":
				break;
			case "x/v2/splash/show":
				break;
			case "x/v2/splash/list":
				break;
			case "x/v2/splash/brand/list":
				break;
			case "x/v2/splash/event/list2":
				break;
			case "x/resource/abtest/abserver":
				break;
			case "x/v2/param":
				break;
			case "x/resource/domain":
				break;
			case "x/v2/account/mine":
				break;
			case "x/v2/account/myinfo":
				break;
			case "x/resource/peak/download":
				break;
			case "x/v2/channel/region/list":
				break;
		};
		break;
	case "api.bilibili.com":
		switch (url.path) {
			case "pgc/player/api/playurl": // 播放地址
			case "pgc/player/web/playurl": // 播放地址
				break;
			case "x/v2/search/type": // 搜索
			case "x/web-interface/search/type": // 搜索
				break;
			case "x/v2/space": // 用户空间
				if (url.params.vmid == "11783021") // 哔哩哔哩番剧出差
					break;
			case "pgc/page/bangumi": // 追番
				break;
			case "pgc/page/module/mine": // 追番-正在追
				break;
			case "pgc/bangumi/index": // 追番-全部内容
				break;
			case "pgc/app/timeline": // 追番-时间表
			case "pgc/web/timeline": // 追番-时间表
				break;
			case "pgc/view/web/season": // 番剧页面
			case "pgc/view/v2/app/season": // 番剧页面
				break;
			case "pgc/app/follow/v2/bangumi": // 我的收藏-追番
				break;
			case "pgc/app/follow/v2/cinema": // 我的收藏-追剧
                break;
			case "pgc/app/related/recommend":
				break;
			case "pgc/web/playlist":
				break;
			case "pgc/web/season/cards":
				break;
		};
		break;
	case "app.biliintl.com":
	case "api.global.bilibili.com":
		switch (url.path) {
			case "intl/gateway/v2/ogv/playurl":
				break;
			case "intl/gateway/v2/app/search/type":
			case "intl/gateway/v2/app/search/v2":
				break;
			case "intl/gateway/v2/ogv/view/app/season":
				break;
			case "intl/gateway/v2/ogv/view/app/season/section":
			case "intl/gateway/v2/ogv/view/app/season/user/status":
			case "intl/gateway/v2/ogv/view/app/season2":
			case "intl/gateway/v2/ogv/view/app/episode":
				break;
			case "intl/gateway/v2/app/subtitle":
				break;
			case "x/intl/passport-login/oauth2/refresh_token":
				break;
		};
		break;
};
