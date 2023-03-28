/*
README:https://github.com/VirgilClyne/BiliBili
*/
const $ = new Env("📺 BiliBili:Enhanced v0.1.3(5) response.beta");
const URL = new URLs();
const DataBase = {
	"Enhanced":{
		"Settings":{"Switch":"true","Home":{"Top_left":"mine","Top":["消息Top"],"Top_more":[],"Tab":["直播tab","推荐tab","hottopic","bangumi","anime","film","koreavtw"],"Tab_default":"bangumi"},"Bottom":["home","dynamic","ogv","会员购Bottom","我的Bottom"]},
		"Configs":{
			"Tab":{"tab":[{"id":39,"name":"直播","uri":"bilibili://live/home","tab_id":"直播tab","pos":1},{"id":40,"name":"推荐","uri":"bilibili://pegasus/promo","tab_id":"推荐tab","pos":2},{"id":41,"name":"热门","uri":"bilibili://pegasus/hottopic","tab_id":"hottopic","pos":3},{"id":545,"name":"追番","uri":"bilibili://pgc/home","tab_id":"bangumi","pos":4},{"id":774,"name":"动画","uri":"bilibili://following/home_activity_tab/6544","tab_id":"anime","pos":4},{"id":151,"name":"影视","uri":"bilibili://pgc/cinema-tab","tab_id":"film","pos":5},{"id":2280,"name":"校园","uri":"bilibili://campus/home_tab","tab_id":"school","pos":6},{"id":136117,"name":"新征程","uri":"bilibili://following/home_activity_tab/136117","tab_id":"165","pos":7,"color":"#DD1225"},{"id":1716,"icon":"http://i0.hdslb.com/bfs/archive/38d2c2669a68eae8a53fc9afaa193aafa5265a78.png","name":"数码","uri":"bilibili://pegasus/vertical/13807","tab_id":"kj","pos":8},{"id":801,"icon":"http://i0.hdslb.com/bfs/archive/38d2c2669a68eae8a53fc9afaa193aafa5265a78.png","name":"韩综","uri":"bilibili://following/home_activity_tab/95636","tab_id":"koreavtw","pos":10}],"top":[{"id":222,"icon":"http://i0.hdslb.com/bfs/archive/734a3b610a953df398bbe6d787944514dcd94a46.png","name":"游戏中心","uri":"bilibili://game_center/home","tab_id":"游戏中心Top","pos":1},{"id":108,"icon":"http://i0.hdslb.com/bfs/archive/9d1c0985b9d0e2da2c2f919cc2ee0e36ea41fd90.png","name":"会员购","uri":"bilibili://mall/home/","tab_id":"会员购Top","pos":2},{"id":176,"icon":"http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png","name":"消息","uri":"bilibili://link/im_home","tab_id":"消息Top","pos":2}],"bottom":[{"id":177,"icon":"http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png","icon_selected":"http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png","name":"首页","uri":"bilibili://main/home/","tab_id":"home","pos":1},{"id":103,"icon":"http://i0.hdslb.com/bfs/archive/b4f621f268c1f9eda501805135f132aa9498b0ba.png","icon_selected":"http://i0.hdslb.com/bfs/archive/94539249e59621214f7dc1226cf38a2b8fe4c64f.png","name":"频道","uri":"bilibili://pegasus/channel/","tab_id":"频道Bottom","pos":2},{"id":179,"icon":"http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png","icon_selected":"http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png","name":"动态","uri":"bilibili://following/home/","tab_id":"dynamic","pos":2},{"id":670,"icon":"http://i0.hdslb.com/bfs/feed-admin/c25cabacb40e9df2ccf54c327350e1afc4ae2f8c.png","name":"发布","uri":"bilibili://uper/center_plus?relation_from=center_plus\u0026tab_index=2","tab_id":"publish","pos":3,"dialog_items":[{"id":617,"name":"开直播","icon":"http://i0.hdslb.com/bfs/feed-admin/01f9b3f8ed61a4e59af693da9fcd38fc342ee7e5.png","uri":"activity://liveStreaming/home?source_event=14"},{"id":618,"name":"拍摄","icon":"http://i0.hdslb.com/bfs/feed-admin/30636aa60e594550ec47422e3875b4345e7d6017.png","uri":"bilibili://uper/user_center/add_archive/?from=1\u0026is_new_ui=1\u0026relation_from=center_plus"},{"id":619,"name":"上传","icon":"http://i0.hdslb.com/bfs/feed-admin/55c3c112f4885adc6cce0b4b94149409fd1c147b.png","uri":"bilibili://uper/user_center/add_archive/?from=0\u0026is_new_ui=1\u0026relation_from=center_plus"},{"id":620,"name":"模板创作","icon":"http://i0.hdslb.com/bfs/feed-admin/4e5188d8390754655dee0fdfd90c1088da3cdf90.png","uri":"bilibili://uper/user_center/add_archive/?from=2\u0026is_new_ui=1\u0026relation_from=center_plus"}],"type":3},{"id":690,"icon":"http://i0.hdslb.com/bfs/feed-admin/68b1625cef3a8315d6fe3fbfd2a8b06c905f323a.png","icon_selected":"http://i0.hdslb.com/bfs/feed-admin/1903c6f1dc881ed4c459ab337767fd8436cda159.png","name":"节目","uri":"bilibili://following/home_bottom_tab_activity_tab/168312","tab_id":"ogv","pos":4,"type":4},{"id":242,"icon":"http://i0.hdslb.com/bfs/archive/6090d5fa7ece2a94de839e7cce4f1e774dae7779.png","icon_selected":"http://i0.hdslb.com/bfs/archive/eeaf83fb7157000776dd93f61702a049f56801d3.png","name":"会员购","uri":"bilibili://mall/home","tab_id":"会员购Bottom","pos":4},{"id":105,"icon":"http://i0.hdslb.com/bfs/archive/93dae0f0fb2c9887effb2840800d5b639be69351.png","icon_selected":"http://i0.hdslb.com/bfs/archive/f96bfd9ffea2e51443aed44dba6d76b7b34891c8.png","name":"消息","uri":"bilibili://link/im_home","tab_id":"消息Bottom","pos":4},{"id":181,"icon":"http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png","icon_selected":"http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png","name":"我的","uri":"bilibili://user_center/","tab_id":"我的Bottom","pos":5}],"top_more":[{"id":621,"icon":"http://i0.hdslb.com/bfs/feed-admin/f95dfa31c793c857af6e7b65b5387a05f30d31ba.png","name":"更多分区","uri":"bilibili://main/top_category","pos":1},{"id":922,"icon":"http://i0.hdslb.com/bfs/feed-admin/38beac42189ad4d838d20259a5b2cdfd302fef40.png","name":"搜索","uri":"bilibili://search","pos":2}],"top_left":{"mine":{"exp":0,"head_tag":"","url":"bilibili://root?bottom_tab_id=我的Bottom","goto":1,"story_background_image":"","story_foreground_image":"","listen_background_image":"","listen_foreground_image":""},"videoshortcut":{"exp":1,"head_tag":"https://i0.hdslb.com/bfs/app/92e7b36c3bd10c850e8a2ba85d19566937751540.png","url":"bilibili://videoshortcut?user_reg_state=0","goto":2,"story_background_image":"http://i0.hdslb.com/bfs/app/7391267ec11cfe99823a8cfd80532a7bc6eca390.png","story_foreground_image":"http://i0.hdslb.com/bfs/app/98098cfd9349b7500c233216169d768cd536d305.png","listen_background_image":"http://i0.hdslb.com/bfs/app/365848675f453e32b42567ba9e249a347a5df061.png","listen_foreground_image":"http://i0.hdslb.com/bfs/app/986ee5e963237d511802c4084c83c2f228e97369.png"}}}
		}
	},
    "Global":{
		"Settings":{"Switch":"true","ForceHost":"1","Locales":["CHN","HKG","TWN"],"Proxies":{"CHN": "DIRECT","HKG": "🇭🇰香港","MAC": "🇲🇴澳门","TWN": "🇹🇼台湾","SEA": "🇸🇬新加坡"}},
		"Configs":{
			"SearchNav":{"CHN":{"name":"番剧🇨🇳","total":0,"pages":0,"type":17},"HKG":{"name":"动画🇭🇰","total":0,"pages":0,"type":27},"MAC":{"name":"动画🇲🇴","total":0,"pages":0,"type":37},"TWN":{"name":"动画🇹🇼","total":0,"pages":0,"type":47},"SEA":{"name":"动画🇺🇳","total":0,"pages":0,"type":57}}
		}
	},
	"Roaming":{
		"Settings":{"Switch":"true","Proxy":{"Pool":["xn--2vrub.plus","api.qiu.moe","xn--2vrub.icu","xn--n4yr07d.xn--6qq986b3xl","xn--3dz622b.xn--n4y597a0mfle743a.icu","bili.tuturu.top","xn--7rv796dvkm.xn--6qq986b3xl","xn--7ovr3tf1cxr4d.fun","xn--8fv56a330gjea.icu","xn--qoqt3y678a.xn--6qq986b3xl","atri.ink","xn--kiv440b.xn--6qq986b3xl","xn--w4r620anpl.xn--oor00vs23b.icu","xn--chqwq129p.pch.pub","melusinesuki.site","bili.takami.ink"],"Customs":""}}
	},
	"Default": {
		"Settings":{"Switch":"true"}
	}
};

// headers转小写
for (const [key, value] of Object.entries($request.headers)) {
	delete $request.headers[key]
	$request.headers[key.toLowerCase()] = value
};
for (const [key, value] of Object.entries($response.headers)) {
	delete $response.headers[key]
	$response.headers[key.toLowerCase()] = value
};

/***************** Processing *****************/
!(async () => {
    const { Settings, Caches, Configs } = setENV("BiliBili", "Enhanced", DataBase);
	switch (Settings.Switch) {
		case "true":
		default:
			$.log(`⚠ ${$.name}, 功能开启`, "");
			let url = URL.parse($request.url);
			$.log(`⚠ ${$.name}, url.path=${url.path}`, "");
			// 设置格式
			const Format = $response?.headers?.["content-type"]?.split(";")?.[0]
			$.log(`🚧 ${$.name}`, `Format: ${Format}`, "");
			// 创建空数据
			let body = { "code": 0, "message": "0", "data": {} };
			// 解析格式
			switch (Format) {
				case "application/json":
				body = JSON.parse($response.body);
					let data = body.data;
					switch (url.host) {
						case "grpc.biliapi.net":
							break;
						case "app.bilibili.com":
						case "app.biliapi.net":
							// 先保存一下AccessKey
							if (url?.params?.access_key) {
								let newCaches = $.getjson("@BiliBili.Global.Caches", {});
								newCaches.AccessKey = url.params.access_key; // 总是刷新
								$.log(`newCaches = ${JSON.stringify(newCaches)}`);
								let isSave = $.setjson(newCaches, "@BiliBili.Global.Caches");
								$.log(`$.setjson ? ${isSave}`);
							};
							switch (url.path) {
								case "x/resource/show/tab/v2": // 首页-Tab
									// 顶栏-左侧
									data.top_left = Configs.Tab.top_left[Settings.Home.Top_left];
									// 顶栏-右侧
									data.top = Configs.Tab.top.map(e => {
										if (Settings.Home.Top.includes(e.tab_id)) return e;
									}).filter(Boolean).map((e, i) => {
										e.pos = i + 1;
										return e;
									});
									// 标签栏
									data.tab = Configs.Tab.tab.map(e => {
										if (Settings.Home.Tab.includes(e.tab_id)) return e;
									}).filter(Boolean).map((e, i) => {
										if (Settings.Home.Tab_default == e.tab_id) e.default_selected = 1;
										e.pos = i + 1;
										return e;
									});
									// 底部导航栏
									data.bottom = Configs.Tab.bottom.map(e => {
										if (Settings.Bottom.includes(e.tab_id)) return e;
									}).filter(Boolean).map((e,i) => {
										e.pos = i + 1;
										return e;
									});
									break;
								case "x/resource/show/tab/bubble": // 首页-Tab-?
									break;
							};
							break;
						case "api.bilibili.com":
							break;
						case "app.biliintl.com":
						case "api.global.bilibili.com":
							break;
					};
					$response.body = JSON.stringify(body);
					break;
				case "text/xml":
					break;
				case "application/x-protobuf":
					/******************  initialization start  *******************/
					/******************  initialization finish  *******************/
					const binaryBody = $.isQuanX() ? new Uint8Array($response.bodyBytes) : $response.body;
					data = Player.fromBinary(binaryBody);
					$.log(`🚧 ${$.name}`, `data: ${JSON.stringify(data)}`, "");
					if ($.isQuanX()) $response.bodyBytes = Player.toBinary(data);
					else $response.body = Player.toBinary(data);
					break;
				default:
					break;
			};
			break;
		case "false":
			$.log(`⚠ ${$.name}, 功能关闭`, "");
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		// 设置格式
		const Format = $response?.headers?.["content-type"]?.split(";")?.[0]
		$.log(`🚧 ${$.name}`, `Format: ${Format}`, "");
		switch (Format) {
			case "application/json":
			case "text/xml":
			default:
				if ($.isQuanX()) $.done({ headers: $response.headers, body: $response.body })
				else $.done($response)
				break;
			case "application/x-protobuf":
				if ($.isQuanX()) {
					$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
					$.log(`bodyBytes.byteOffset: ${$response.bodyBytes.byteOffset}}`);
					$.done({ headers: $response.headers, bodyBytes: $response.bodyBytes.buffer.slice($response.bodyBytes.byteOffset, $response.bodyBytes.byteLength + $response.bodyBytes.byteOffset) });
				} else {
					$.log(`${$response.body.byteLength}---${$response.body.buffer.byteLength}`);
					$.done($response)
				}
				break;
		};
	})

/***************** Function *****************/
/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {String} platform - Platform Name
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
function setENV(name, platform, database) {
	$.log(`⚠ ${$.name}, Set Environment Variables`, "");
	let { Settings, Caches, Configs } = getENV(name, platform, database);
	/***************** Prase *****************/
	//Settings.Switch = JSON.parse(Settings.Switch) // BoxJs字符串转Boolean
	if (typeof Settings.Home.Top === "string") Settings.Home.Top = Settings.Home.Top.split(",") // BoxJs字符串转数组
	if (typeof Settings.Home.Top_more === "string") Settings.Home.Top_more = Settings.Home.Top_more.split(",") // BoxJs字符串转数组
	if (typeof Settings.Home.Tab === "string") Settings.Home.Tab = Settings.Home.Tab.split(",") // BoxJs字符串转数组
	if (typeof Settings.Bottom === "string") Settings.Bottom = Settings.Bottom.split(",") // BoxJs字符串转数组
	$.log(`🎉 ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	return { Settings, Caches, Configs }
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,s){class e{constructor(t){this.env=t}send(t,s="GET"){t="string"==typeof t?{url:t}:t;let e=this.get;return"POST"===s&&(e=this.post),new Promise((s,i)=>{e.call(this,t,(t,e,r)=>{t?i(t):s(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,s){this.name=t,this.http=new e(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $environment&&$environment["surge-version"]}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,s=null){try{return JSON.parse(t)}catch{return s}}toStr(t,s=null){try{return JSON.stringify(t)}catch{return s}}getjson(t,s){let e=s;const i=this.getdata(t);if(i)try{e=JSON.parse(this.getdata(t))}catch{}return e}setjson(t,s){try{return this.setdata(JSON.stringify(t),s)}catch{return!1}}getScript(t){return new Promise(s=>{this.get({url:t},(t,e,i)=>s(i))})}runScript(t,s){return new Promise(e=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=s&&s.timeout?s.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,s,i)=>e(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s);if(!e&&!i)return{};{const i=e?t:s;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s),r=JSON.stringify(this.data);e?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(s,r):this.fs.writeFileSync(t,r)}}lodash_get(t,s,e){const i=s.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return e;return r}lodash_set(t,s,e){return Object(t)!==t?t:(Array.isArray(s)||(s=s.toString().match(/[^.[\]]+/g)||[]),s.slice(0,-1).reduce((t,e,i)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(s[i+1])>>0==+s[i+1]?[]:{},t)[s[s.length-1]]=e,t)}getdata(t){let s=this.getval(t);if(/^@/.test(t)){const[,e,i]=/^@(.*?)\.(.*?)$/.exec(t),r=e?this.getval(e):"";if(r)try{const t=JSON.parse(r);s=t?this.lodash_get(t,i,""):s}catch(t){s=""}}return s}setdata(t,s){let e=!1;if(/^@/.test(s)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(s),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const s=JSON.parse(h);this.lodash_set(s,r,t),e=this.setval(JSON.stringify(s),i)}catch(s){const o={};this.lodash_set(o,r,t),e=this.setval(JSON.stringify(o),i)}}else e=this.setval(t,s);return e}getval(t){return this.isSurge()||this.isShadowrocket()||this.isLoon()||this.isStash()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,s){return this.isSurge()||this.isShadowrocket()||this.isLoon()||this.isStash()?$persistentStore.write(t,s):this.isQuanX()?$prefs.setValueForKey(t,s):this.isNode()?(this.data=this.loaddata(),this.data[s]=t,this.writedata(),!0):this.data&&this.data[s]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,s=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isShadowrocket()||this.isLoon()||this.isStash())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status?e.status:e.statusCode,e.status=e.statusCode),s(t,e,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:r,body:o}=t;s(null,{status:e,statusCode:i,headers:r,body:o},o)},t=>s(t&&t.error||"UndefinedError"));else if(this.isNode()){let e=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,s)=>{try{if(t.headers["set-cookie"]){const e=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();e&&this.ckjar.setCookieSync(e,null),s.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t,a=e.decode(h,this.encoding);s(null,{status:i,statusCode:r,headers:o,rawBody:h,body:a},a)},t=>{const{message:i,response:r}=t;s(i,r,r&&e.decode(r.rawBody,this.encoding))})}}post(t,s=(()=>{})){const e=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isShadowrocket()||this.isLoon()||this.isStash())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status?e.status:e.statusCode,e.status=e.statusCode),s(t,e,i)});else if(this.isQuanX())t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:r,body:o}=t;s(null,{status:e,statusCode:i,headers:r,body:o},o)},t=>s(t&&t.error||"UndefinedError"));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[e](r,o).then(t=>{const{statusCode:e,statusCode:r,headers:o,rawBody:h}=t,a=i.decode(h,this.encoding);s(null,{status:e,statusCode:r,headers:o,rawBody:h,body:a},a)},t=>{const{message:e,response:r}=t;s(e,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,s=null){const e=s?new Date(s):new Date;let i={"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in i)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return t}queryStr(t){let s="";for(const e in t){let i=t[e];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),s+=`${e}=${i}&`)}return s=s.substring(0,s.length-1),s}msg(s=t,e="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()||this.isShadowrocket()||this.isStash()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let s=t.openUrl||t.url||t["open-url"],e=t.mediaUrl||t["media-url"];return{openUrl:s,mediaUrl:e}}if(this.isQuanX()){let s=t["open-url"]||t.url||t.openUrl,e=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":s,"media-url":e,"update-pasteboard":i}}if(this.isSurge()||this.isShadowrocket()||this.isStash()){let s=t.url||t.openUrl||t["open-url"];return{url:s}}}};if(this.isMute||(this.isSurge()||this.isShadowrocket()||this.isLoon()||this.isStash()?$notification.post(s,e,i,o(r)):this.isQuanX()&&$notify(s,e,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(s),e&&t.push(e),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,s){const e=!this.isSurge()||this.isShadowrocket()&&!this.isQuanX()&&!this.isLoon()&&!this.isStash();e?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(s=>setTimeout(s,t))}done(t={}){const s=(new Date).getTime(),e=(s-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`),this.log(),this.isSurge()||this.isShadowrocket()||this.isQuanX()||this.isLoon()||this.isStash()?$done(t):this.isNode()&&process.exit(1)}}(t,s)}

// https://github.com/DualSubs/URL/blob/main/URLs.embedded.min.js
function URLs(s){return new class{constructor(s=[]){this.name="URL v1.0.2",this.opts=s,this.json={scheme:"",host:"",path:"",params:{}}}parse(s){let t=s.match(/(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/)?.groups??null;return t?.path||(t.path=""),t?.params&&(t.params=Object.fromEntries(t.params.split("&").map((s=>s.split("="))))),t}stringify(s=this.json){return s?.params?s.scheme+"://"+s.host+"/"+s.path+"?"+Object.entries(s.params).map((s=>s.join("="))).join("&"):s.scheme+"://"+s.host+"/"+s.path}}(s)}

/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/VirgilClyne/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} t - Persistent Store Key
 * @param {String} e - Platform Name
 * @param {Object} n - Default Database
 * @return {Object} { Settings, Caches, Configs }
 */
function getENV(t,e,n){let i=$.getjson(t,n),s={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((t=>t.split("="))));for(let e in t)l(s,e,t[e])}let g={...n?.Default?.Settings,...n?.[e]?.Settings,...i?.[e]?.Settings,...s},f={...n?.Default?.Configs,...n?.[e]?.Configs,...i?.[e]?.Configs},o=i?.[e]?.Caches||{};return"string"==typeof o&&(o=JSON.parse(o)),{Settings:g,Caches:o,Configs:f};function l(t,e,n){e.split(".").reduce(((t,i,s)=>t[i]=e.split(".").length===++s?n:t[i]||{}),t)}}
