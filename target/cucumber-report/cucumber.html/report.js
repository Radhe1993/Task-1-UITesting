$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gamesTest.feature");
formatter.feature({
  "line": 2,
  "name": "Games Page",
  "description": "As User I want to verify the Games page on canadiandollarbingo website",
  "id": "games-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 4035574600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should verify that Bingo games",
  "description": "",
  "id": "games-page;user-should-verify-that-bingo-games",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse Hover on Games  Menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on bingo",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that \"Bingo\" message on bingo page",
  "keyword": "Then "
});
formatter.match({
  "location": "GamesSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 235340000,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iMouseHoverOnGamesMenu()"
});
formatter.result({
  "duration": 212338400,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iClickOnBingo()"
});
formatter.result({
  "duration": 1063960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bingo",
      "offset": 15
    }
  ],
  "location": "GamesSteps.iVerifyThatMessageOnBingoPage(String)"
});
formatter.result({
  "duration": 44789700,
  "status": "passed"
});
formatter.after({
  "duration": 765794100,
  "status": "passed"
});
formatter.before({
  "duration": 2504708400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should verify that Slots games",
  "description": "",
  "id": "games-page;user-should-verify-that-slots-games",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouse Hover on Games  Menu",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on bingo",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Parlay Slots",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get the all games name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Fruity Frenzy game",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify that \"Log in to Start Playing!\" message will display",
  "keyword": "Then "
});
formatter.match({
  "location": "GamesSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iMouseHoverOnGamesMenu()"
});
formatter.result({
  "duration": 208508500,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iClickOnBingo()"
});
formatter.result({
  "duration": 1018357000,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iClickOnParlaySlots()"
});
formatter.result({
  "duration": 516675900,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iGetTheAllGamesName()"
});
formatter.result({
  "duration": 79117500,
  "status": "passed"
});
formatter.match({
  "location": "GamesSteps.iClickOnFruityFrenzyGame()"
});
formatter.result({
  "duration": 159308300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in to Start Playing!",
      "offset": 15
    }
  ],
  "location": "GamesSteps.iVerifyThatMessageWillDisplay(String)"
});
formatter.result({
  "duration": 319000800,
  "status": "passed"
});
formatter.after({
  "duration": 706559500,
  "status": "passed"
});
});