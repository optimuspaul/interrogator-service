var express = require('express');
var router = express.Router();

var question_list = [
    "Look, we’ve got all the evidence we need to convict you, so you might as well confess.",
    "Come on, I’m not asking you to sign anything. We’re just talking. And you can stop any time you want to.",
    "Are you warm?",
    "Would you like a cigarette?",
    "Have they treated you well?",
    "I hear you were on the platform when the person near you fell onto the rails. Could you please describe what happened?",
    "When you fought with the other person, did he hit you?",
    "When you attacked the other person, did he try to defend himself?",
    "You’re not a suspect. We’re simply investigating here. Just help us understand what happened and then you can go.",
    "What are you afraid of? If you haven’t done anything wrong, then you shouldn’t have any problem answering my questions.",
    "Your friends have all cooperated and we let them go home. You’re the only one left. Do you want to stay in jail?",
    "I’m tired of screwing around. If you don’t answer my questions, you’re going to be charged with obstruction."
];

function questlove() {
    var index = Math.floor((Math.random() * question_list.length));
    return question_list[index];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Detective...', question: questlove() });
});

module.exports = router;
