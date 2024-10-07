import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: '로그인',
		component: () => import('@/pages/login.vue'),
	},
	{
		path: '/resister',
		name: '회원가입',
		component: () => import('@/pages/resister.vue'),
	},
	{
		path: '/main',
		name: '메인화면',
		component: () => import('@/pages/mainpage.vue'),
	},
	{
		path: '/employee',
		name: '사원관리',
		component: () => import('@/pages/employee.vue'),
	},
	{
		path: '/inventory',
		name: '재고관리',
		component: () => import('@/pages/inventory.vue'),
	},
	{
		path: '/store',
		name: '점포관리',
		component: () => import('@/pages/store.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
