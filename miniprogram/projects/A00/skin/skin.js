module.exports = {
	PID: 'A00', // 游泳馆

	NAV_COLOR: '#ffffff',
	NAV_BG: '#4E8CEE',

	MEET_NAME: '预约', 
 
	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=本馆动态,2=游泳常识',
	MEET_TYPE: '1=游泳馆预约|leftbig2',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}