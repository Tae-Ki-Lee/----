<template>
	<div class="h-screen flex items-center justify-center">
		<div>
			<h1>로그인</h1>
			<n-input placeholder="아이디"></n-input>
			<n-input placeholder="비밀번호" type="password" class="mt-1"></n-input>
			<n-button type="primary" class="w-full mt-2">로그인</n-button>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import {
	ArchiveOutline,
	BookmarkOutline,
	BookmarkSharp,
} from '@vicons/ionicons5';
/* import { useAxios } from '@/composables/useAxios';
import { useSocket } from '@/composables/useSocket'; */

/* const { axios } = useAxios();
const { socket } = useSocket(); */

const bookmarked = ref([false, false, false, true, false]);
const text = ref(); // input

const toggleBookmark = index => {
	bookmarked.value[index] = !bookmarked.value[index];
};

// axios 및 socket 사용 방법 - 주석 처리된 부분 확인
/* onMounted(() => {
	// HTTP 요청 예시
	axios
		.get('/users')
		.then(response => console.log(response.data))
		.catch(error => console.error(error));

	// WebSocket 연결 및 이벤트 리스닝 예시
	socket.connect();
	socket.on('message', data => {
		console.log(data);
	});
});
onBeforeUnmount(() => {
	// 컴포넌트가 제거되기 전에 소켓 연결 해제
	socket.disconnect();
});
const sendMessage = () => {
	socket.emit('chat message', 'Hello, server!');
}; */
</script>
<style scoped></style>
