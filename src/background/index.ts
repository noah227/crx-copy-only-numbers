(() => {
	try {
		chrome.contextMenus.removeAll(() => {
			chrome.contextMenus.create({
				id: "crx-copy-only-numbers-menu-1",
				contexts: ["selection"],
				type: "normal",
				title: chrome.i18n.getMessage("appName"),
				documentUrlPatterns: ["*://*/*"]
			})
		})
		chrome.contextMenus.onClicked.addListener((info, tab) => {
			if (tab) {
				const text = info.selectionText ?? ""
				const num = text.split("").map(s => parseInt(s)).filter(i => !isNaN(i)).join("")
				chrome.tabs.sendMessage(tab.id as number, {num}, () => {

				})
			}
		})
	} catch (e) {

	}
})()
