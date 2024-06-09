(() => {
	// onMessage只能接收到插件本身的消息，所以不用担心其他插件传入的消息
	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		try {
			const {num} = message
			void navigator.clipboard.writeText(num)
		}
		catch (e) {

		}
		finally {
			sendResponse()
		}
	})
})()