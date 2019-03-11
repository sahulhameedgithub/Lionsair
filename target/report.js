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
  "name": "The user should select all the required data to search a flight  \"\u003cFrom\u003e\"",
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
        "From"
      ]
    },
    {
      "cells": [
        "Aek Godang"
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
  "name": "The user should select all the required data to search a flight  \"Aek Godang\"",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.the_user_should_select_all_the_required_data_to_search_a_flight(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027departCity\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7OHLFGO\u0027, ip: \u0027192.168.43.211\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51471}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: 8e88453f318ce740e4165d1852d0e909\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027departCity\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat co.id.lionsair.resource.FrequentlyUsedMethod.methodClick(FrequentlyUsedMethod.java:23)\r\n\tat co.id.lionsair.stepdefinition.HomePageSteps.the_user_should_select_all_the_required_data_to_search_a_flight(HomePageSteps.java:26)\r\n\tat ✽.The user should select all the required data to search a flight  \"Aek Godang\"(C:/Users/Admin/oxygen/eclipse-workspace/LionsAir/src/test/resources/Feature/HomePageLion.feature:5)\r\n",
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