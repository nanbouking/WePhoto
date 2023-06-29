module.exports = { //workphoto
	PROJECT_COLOR: '#000000',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#000000',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' }, 
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftpic' }, 
	],
	NEWS_FIELDS: [

	],

	MEET_NAME: '预约',
	MEET_CATE: [
		{ id: 1, title: '摄影师预约', style: 'leftbig1' },
		{ id: 2, title: '项目预约', style: 'leftbig1' }, 
	],
	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示
	MEET_FIELDS: [
		{
			mark: 'level', title: '星级', type: 'select',
			selectOptions: [
				{ label: '1星', val: '1' },
				{ label: '2星', val: '2' },
				{ label: '3星', val: '3' },
				{ label: '4星', val: '4' },
				{ label: '5星', val: '5' } ],
			def: '1', must: true
		}, 
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'area', title: '城市', type: 'area', must: true },
		{ mark: 'star', title: '星座', type: 'select', selectOptions: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座', '蛇夫座'], must: true },
		{ mark: 'desc', title: '一句话介绍', type: 'text', max: 30, must: true },
		{ mark: 'content', title: '详情', type: 'content', must: true },
		{
			mark: 'album', title: '作品集', type: 'rows',
			ext: {
				titleName: '作品',
				hasDetail: true,
				hasVal: false,
				maxCnt: 30,
				minCnt: 0,
				checkDetail: true,
				hasPic: true,
				checkPic: true,
				titleMode: 'input'
			}, 
			must: false
		},
	],
	MEET_FIELDS2: [ 
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },  
		{ mark: 'desc', title: '一句话介绍', type: 'text', max: 30, must: true },
		{ mark: 'content', title: '详情', type: 'content', must: true }, 
	],

	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
	],

	// 时间默认设置
	MEET_NEW_NODE:
	{
		mark: 'mark-no', start: '10:00', end: '10:59', limit: 1, isLimit: true, status: 1,
		stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
	},
	MEET_NEW_NODE_DAY: [
		{
			mark: 'mark-am', start: '09:00', end: '11:59', limit: 1, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		},
		{
			mark: 'mark-pm', start: '14:00', end: '17:59', limit: 1, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		}
	],  

	PRODUCT_NAME: '样片',
	PRODUCT_CATE: [
		{ id: 1, title: '婚纱' },
		{ id: 2, title: '旅拍' },
		{ id: 3, title: '儿童' },
		{ id: 4, title: '写真' },
		{ id: 5, title: '萌宠' },
		{ id: 6, title: '其他' },
	],
	PRODUCT_FIELDS: [
		{ mark: 'cover', title: '封面照片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'detail', title: '详细介绍', type: 'content', must: true },
	],


}