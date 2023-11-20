"use strict";

exports.MathController = class MathController {
  constructor() {
    let questions = [
      {
        id: 0,
        title: "What is the capital of Nigeria?",
        options: ["FCT", "Lagos", "Rivers", "Kano"],
        answer: "FCT",
      },
      {
        id: 1,
        title: "What continent is Nicaragua on?",
        options: ["America", "Africa", "Australia", "Europe"],
        answer: "America",
      },
      {
        id: 2,
        title: "Who was the first black woman to fly solo across the atlantic?",
        options: [
          "Rosa Parks",
          "Kimberly Anyandike",
          "Angelique Kidjo",
          "Jennifer Lopez",
        ],
        answer: "Kimberly Anyandike",
      },
      {
        id: 3,
        title: "What is a Macaw?",
        options: [
          "A bird",
          "A monkey",
          "A 19th century slave",
          "A native of Maldives",
        ],
        answer: "A bird",
      },
      {
        id: 4,
        title: "What are tectonic plates?",
        options: [
          "Earth crust",
          "Fancy china plates",
          "Reverb plates",
          "None of the above",
        ],
        answer: "Earth crust",
      },
      {
        id: 5,
        title: "What is a falcons dive speed?",
        options: ["220mph", "230mph", "240mph", "250mph"],
        answer: "220mph",
      },
      {
        id: 6,
        title: "What class of food is rice?",
        options: ["Carbohydrate", "Protein", "Minerals", "Vitamins"],
        answer: "Carbohydrate",
      },
      {
        id: 7,
        title: "Who is Kurupt?",
        options: [
          "A rapper",
          "A politician",
          "A software developer",
          "A footballer",
        ],
        answer: "A rapper",
      },
      {
        id: 8,
        title: "Where did Mansa Musa rule?",
        options: ["Mali", "Gabon", "Ethiopia", "Luxemburg"],
        answer: "Mali",
      },
      {
        id: 9,
        title: "Who is the Awujale",
        options: [
          "King of Benin",
          "King of Egbaland",
          "King of Ife",
          "Sultan of Sokoto",
        ],
        answer: "King of Egbaland",
      },
    ];

    let info = "This API returns questions from a bag of 10 questions."

    this.getAllMathController = (req, res, next) => {
      return res.status(200).json({
        message: "success",
        data: questions,
      });
    };

    this.findQuestionByIdController = (req, res, next) => {
      let question_id = req.params.question_id;

      if (!question_id || question_id > 10)
        return res.status(400).json({
          message: "failure",
          data: "Get question request missing parameters or wrong parameter",
        });

      return res.status(200).json({
        message: "success",
        data: questions[question_id],
      });
    };
  }
};
