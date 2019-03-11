$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Admin/oxygen/eclipse-workspace/LionsAir/src/test/resources/Feature/HomePageLion.feature");
formatter.feature({
  "name": "Homepage test scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "HomePage Test scenario for booking a ticket",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "HomePage Test scenario for booking a ticket",
  "keyword": "Given "
});
formatter.step({
  "name": "The user should select all the required data to search a flight  \"\u003cFrom\u003e\",\"\u003cto\u003e\",\"\u003cDate\u003e\",\"\u003cNoofadults\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see the flight details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "From",
        "to",
        "Date",
        "Noofadults"
      ]
    },
    {
      "cells": [
        "Aek Godang (AEG)",
        "Dhaka (DAC)",
        "27/03/2019",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "HomePage Test scenario for booking a ticket",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "HomePage Test scenario for booking a ticket",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.homepage_Test_scenario_for_booking_a_ticket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should select all the required data to search a flight  \"Aek Godang (AEG)\",\"Dhaka (DAC)\",\"27/03/2019\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.the_user_should_select_all_the_required_data_to_search_a_flight(String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"text\" id\u003d\"arrivalCity\" class\u003d\"form-control filter-dropdown dnarw-icon\" placeholder\u003d\"To\" data-ref\u003d\"#arrivalCityList\" data-validation\u003d\"required\" data-type\u003d\"any\" autocomplete\u003d\"off\"\u003e is not clickable at point (258, 424). Other element would receive the click: \u003cdiv class\u003d\"list-container\" data-ref\u003d\"#departCity\" data-target\u003d\"#arrivalCity\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7OHLFGO\u0027, ip: \u0027192.168.43.211\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60019}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: f6dfa8365b251460c00db9324ec417b0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat co.id.lionsair.resource.FrequentlyUsedMethod.methodClick(FrequentlyUsedMethod.java:18)\r\n\tat co.id.lionsair.stepdefinition.HomePageSteps.the_user_should_select_all_the_required_data_to_search_a_flight(HomePageSteps.java:28)\r\n\tat ✽.The user should select all the required data to search a flight  \"Aek Godang (AEG)\",\"Dhaka (DAC)\",\"27/03/2019\",\"1\"(C:/Users/Admin/oxygen/eclipse-workspace/LionsAir/src/test/resources/Feature/HomePageLion.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should see the flight details",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.the_user_should_see_the_flight_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});