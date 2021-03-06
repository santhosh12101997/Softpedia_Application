$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SANTHOSH KUMAR/git/Softpedia_Application/SoftpediaApplication/src/main/resources/feature/Testscenario.feature");
formatter.feature({
  "line": 2,
  "name": "SoftPedia Application",
  "description": "",
  "id": "softpedia-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Softpedia"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Account Registration",
  "description": "",
  "id": "softpedia-application;account-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01_register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters UserName,Emailid,Password and Repassword from excel data",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message display Registration UnSuccessfull",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 587863605,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.user_enters_UserName_Emailid_Password_and_Repassword_from_excel_data()"
});
formatter.result({
  "duration": 190110793820,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.message_display_Registration_UnSuccessfull()"
});
formatter.result({
  "duration": 211129,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Valid Login",
  "description": "",
  "id": "softpedia-application;valid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tc_02_login"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on website Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User nagivate to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User login using \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" with vaild deatils",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on login button \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User logout from webpage",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "softpedia-application;valid-login;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ],
      "line": 22,
      "id": "softpedia-application;valid-login;;1"
    },
    {
      "cells": [
        "sk1675376@gmail.com",
        "12345678",
        "valid login"
      ],
      "line": 23,
      "id": "softpedia-application;valid-login;;2"
    },
    {
      "cells": [
        "malarvizhimarie@gmail.com",
        "123456789",
        "valid login"
      ],
      "line": 24,
      "id": "softpedia-application;valid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Valid Login",
  "description": "",
  "id": "softpedia-application;valid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tc_02_login"
    },
    {
      "line": 1,
      "name": "@Softpedia"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on website Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User nagivate to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User login using \"sk1675376@gmail.com\" and \"12345678\" with vaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on login button \"valid login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User logout from webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_is_on_website_Home_Page()"
});
formatter.result({
  "duration": 29489072367,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_nagivate_to_Login_Page()"
});
formatter.result({
  "duration": 229525013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sk1675376@gmail.com",
      "offset": 18
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "LoginStep.User_login_using_and_with_vaild_deatils(String,String)"
});
formatter.result({
  "duration": 5062429654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid login",
      "offset": 23
    }
  ],
  "location": "LoginStep.click_on_login_button(String)"
});
formatter.result({
  "duration": 3247955299,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_logout_from_webpage()"
});
formatter.result({
  "duration": 17338530103,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Valid Login",
  "description": "",
  "id": "softpedia-application;valid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tc_02_login"
    },
    {
      "line": 1,
      "name": "@Softpedia"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on website Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User nagivate to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User login using \"malarvizhimarie@gmail.com\" and \"123456789\" with vaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on login button \"valid login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User logout from webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_is_on_website_Home_Page()"
});
formatter.result({
  "duration": 23352957247,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_nagivate_to_Login_Page()"
});
formatter.result({
  "duration": 699816679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "malarvizhimarie@gmail.com",
      "offset": 18
    },
    {
      "val": "123456789",
      "offset": 50
    }
  ],
  "location": "LoginStep.User_login_using_and_with_vaild_deatils(String,String)"
});
formatter.result({
  "duration": 9232951949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid login",
      "offset": 23
    }
  ],
  "location": "LoginStep.click_on_login_button(String)"
});
formatter.result({
  "duration": 3249389705,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_logout_from_webpage()"
});
formatter.result({
  "duration": 25632801325,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Searching for phone based on the requirements",
  "description": "",
  "id": "softpedia-application;searching-for-phone-based-on-the-requirements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_03_phonesearch"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on phone finder page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User select brand,platform,battery and availability",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User click go button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Phone found message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PhoneSearchStep.user_is_on_phone_finder_page()"
});
formatter.result({
  "duration": 14275565784,
  "status": "passed"
});
formatter.match({
  "location": "PhoneSearchStep.user_select_brand_platform_battery_and_availability()"
});
formatter.result({
  "duration": 15078607898,
  "status": "passed"
});
formatter.match({
  "location": "PhoneSearchStep.user_click_go_button()"
});
formatter.result({
  "duration": 711791404,
  "status": "passed"
});
formatter.match({
  "location": "PhoneSearchStep.phone_found_message_is_displayed()"
});
formatter.result({
  "duration": 3179775313,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Prize claim",
  "description": "",
  "id": "softpedia-application;prize-claim",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@tc_04_prizeclaim"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on softpedia Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks i_icon and Discount \u0026 giveaways",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User navigates to prize claim page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks submit button without entering the details",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Successfull alert handle message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PrizeClaimStep.user_is_on_softpedia_Home_Page()"
});
formatter.result({
  "duration": 30584080389,
  "status": "passed"
});
formatter.match({
  "location": "PrizeClaimStep.user_clicks_i_icon_and_Discount_giveaways()"
});
formatter.result({
  "duration": 14455081097,
  "status": "passed"
});
formatter.match({
  "location": "PrizeClaimStep.user_navigates_to_prize_claim_page()"
});
formatter.result({
  "duration": 2003548628,
  "status": "passed"
});
formatter.match({
  "location": "PrizeClaimStep.user_clicks_submit_button_without_entering_the_details()"
});
formatter.result({
  "duration": 8882322986,
  "status": "passed"
});
formatter.match({
  "location": "PrizeClaimStep.successfull_alert_handle_message_is_displayed()"
});
formatter.result({
  "duration": 3278335874,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Game selection",
  "description": "",
  "id": "softpedia-application;game-selection",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc_05_selectgame"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User is on softpedia webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User click games tab",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User click side bar",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Selected Game name is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GamesStep.user_is_on_softpedia_webpage()"
});
formatter.result({
  "duration": 25594965259,
  "status": "passed"
});
formatter.match({
  "location": "GamesStep.user_click_games_tab()"
});
formatter.result({
  "duration": 21044719748,
  "status": "passed"
});
formatter.match({
  "location": "GamesStep.user_click_side_bar()"
});
formatter.result({
  "duration": 487408749,
  "status": "passed"
});
formatter.match({
  "location": "GamesStep.selected_Game_name_is_displayed()"
});
formatter.result({
  "duration": 18622936911,
  "status": "passed"
});
});