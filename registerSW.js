if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/jsrpg/sw.js', { scope: '/jsrpg/' })})}