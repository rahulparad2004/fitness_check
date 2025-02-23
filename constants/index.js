
export const rapidApiKey = '24ae8eab1emsha52ba860f5e5410p15c36cjsnc42872bc9075'

export const sliderImages = [
    require('../assets/images/slide1.png'),
    require('../assets/images/slide2.png'),
    require('../assets/images/slide3.png'),
    require('../assets/images/slide4.png'),
    require('../assets/images/slide5.png'),
]

// export const bodyParts = [
//     ["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"]
// ]

export const bodyParts = [
    {
      name: "back",
      image: require("../assets/images/back.png"),
    },
    {
      name: "cardio",
      image: require("../assets/images/cardio.png"),
    },
    {
      name: "chest",
      image: require("../assets/images/chest.png"),
    },
    {
      name: "lower arms",
      image: require("../assets/images/lowerArms.png"),
    },
    {
      name: "lower legs",
      image: require("../assets/images/lowerLegs.png"),
    },
    {
      name: "neck",
      image: require("../assets/images/neck.png"),
    },
    {
      name: "shoulders",
      image: require("../assets/images/shoulders.png"),
    },
    {
      name: "upper arms",
      image: require("../assets/images/upperArms.png"),
    },
    {
      name: "upper legs",
      image: require("../assets/images/upperLegs.png"),
    },
    {
      name: "waist",
      image: require("../assets/images/waist.png"),
    },
];
  

export const demoExercises = [
  {
    id: "0009",
    name: "assisted chest dip (kneeling)",
    bodyPart: "chest",
    equipment: "leverage machine",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/s3rDI62CSPE9oU",
    instructions: [
      "Adjust the machine to your desired height and secure your knees on the pad.",
      "Grasp the handles with your palms facing down and your arms fully extended.",
      "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
      "Pause for a moment, then push yourself back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0025",
    name: "barbell bench press",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/sUjRCwAbLBZRFD",
    instructions: [
      "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
      "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
      "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
      "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
      "Pause for a moment when the barbell touches your chest.",
      "Push the barbell back up to the starting position by extending your arms.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0033",
    name: "barbell decline bench press",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/WzNl9gqQgvpKWl",
    instructions: [
      "Lie on a decline bench and secure your legs under the padded support.",
      "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
      "Lift the barbell off the rack and lower it slowly towards your lower chest.",
      "Pause when the barbell is just above your chest.",
      "Push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0036",
    name: "barbell decline wide-grip press",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/iyrVTUoG185GAA",
    instructions: [
      "Lie on a decline bench and grip the barbell wider than shoulder-width.",
      "Lower the barbell slowly to your lower chest.",
      "Pause briefly, then push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0040",
    name: "barbell front raise and pullover",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/7M3AkMmcQSarbQ",
    instructions: [
      "Stand with feet shoulder-width apart and grasp a barbell with both hands.",
      "Raise the barbell forward until it reaches shoulder level.",
      "Slowly bring the barbell back down to the starting position.",
      "Perform a pullover by moving the barbell over and behind your head.",
      "Return to the starting position and repeat."
    ]
  },
  {
    id: "0045",
    name: "barbell guillotine bench press",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/dBlacXNvwQT1D1",
    instructions: [
      "Lie flat on a bench and grip the barbell slightly wider than shoulder-width apart.",
      "Lower the barbell slowly towards your neck while keeping your elbows flared out.",
      "Pause when the barbell is just above your neck.",
      "Press the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0047",
    name: "barbell incline bench press",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/VeYCd75tONEpBt",
    instructions: [
      "Lie on an incline bench and grasp the barbell slightly wider than shoulder-width.",
      "Lift the barbell off the rack and hold it above your chest with extended arms.",
      "Slowly lower the barbell towards your upper chest.",
      "Pause when the barbell is just above your chest.",
      "Press the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0050",
    name: "barbell incline shoulder raise",
    bodyPart: "chest",
    equipment: "barbell",
    target: "serratus anterior",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/QIuV6KexTXobHl",
    instructions: [
      "Lie on an incline bench and hold a barbell with a shoulder-width grip.",
      "Raise your shoulders towards your ears while keeping your arms straight.",
      "Hold for a moment, then slowly lower your shoulders back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0122",
    name: "barbell wide bench press",
    bodyPart: "chest",
    equipment: "barbell",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/nS5lqR4SQYH6mv",
    instructions: [
      "Lie flat on a bench and grasp the barbell with a grip wider than shoulder-width.",
      "Lower the barbell slowly towards your chest.",
      "Pause when the barbell is just above your chest.",
      "Push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    id: "0151",
    name: "cable bench press",
    bodyPart: "chest",
    equipment: "cable",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    gifUrl: "https://v2.exercisedb.io/image/ONQSU-imWEVSik",
    instructions: [
      "Set up the cable machine at chest height with handles attached.",
      "Stand between the pulleys and grasp the handles with an overhand grip.",
      "Push the handles forward until your arms are fully extended.",
      "Slowly bring the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  }
];


