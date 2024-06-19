chrome.commands.onCommand.addListener(function (command) {
  
    // Handle the key combination here
  console.log("Ctrl+Shift+Y pressed globally")
  chrome.storage.sync.set({ key: "him junkie tv see do" }).then(() => {
    console.log("Value is set");
  });
    // You can perform any action you need
  
});