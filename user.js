
// disable spell checking
user_pref("layout.spellcheckDefault", 0);
// disable background service to install updates
user_pref("app.update.service.enabled", false);
// open tabs to the right of the current tab
user_pref("browser.tabs.insertAfterCurrent", true);
// enable dark-mode
user_pref("browser.in-content.dark-mode", true);
user_pref("ui.systemUsesDarkTheme", 1);
// restore previous session
user_pref("browser.startup.page", 3);
// disable data collection & crash reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// disable WebRTC leaks
user_pref("media.peerconnection.enabled", false);
// allow search sugggestions in private windows
user_pref("browser.search.suggest.enabled.private", true);
// Disables geolocation and firefox logging geolocation requests.
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.url", "");
// Only send pings if send and receiving host match (same website).
user_pref("browser.send_pings.require_same_host", true);
// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);