import type { QuizQuestion } from '@/types/QuizQuestion';

export const piniaQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is pinia?',
    answer: [16],
    options: [
      'Pinia is a Vue plugin',
      'Pinia is a Vue composition API',
      'Pinia is a Vue Store',
      'Pinia is a Vue router',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 2,
    question: 'Does Pinia require to use Composition API?',
    answer: [14],
    options: [
      'Yes',
      'No',
      'Maybe',
      'I don\'t know',
      'I don\'t care',
    ],
    timeToAnswer: 20,
    points: 8,
  },
  {
    id: 3,
    question: 'How is state managed in Vue Pinia?',
    answer: [14],
    options: [
      'Vue Pinia uses a distributed store pattern where each component has its own state, and components can access and modify the state through getters and actions.',
      'Vue Pinia uses a centralized store pattern where the state is stored in a central store, and components can access and modify the state through getters and actions.',
      'Vue Pinia uses a shared store pattern where the state is stored in a central store, but components can only access the state through getters.',
      'Vue Pinia uses a shared store pattern where the state is stored in a central store, but components can only modify the state through actions.',
    ],
    timeToAnswer: 60,
    points: 10,
  },
  {
    id: 4,
    question: 'What is a store in Vue Pinia?',
    answer: [16],
    options: [
      'A store is a multi-dimensional array.',
      'A store is a single-dimensional array.',
      'A store is a container for state, getters, and actions.',
      'A store is a container for state and getters.',
      'A store is a container for state and actions.',
      'A store is a container for components.',
    ],
    timeToAnswer: 60,
    points: 3,
  },
  {
    id: 5,
    question: 'How do you create a store in Vue Pinia?',
    answer: [14],
    options: [
      'Use the makeStore function.',
      'Use the defineStore function.',
      'Use the createStore function.',
      'Use the setStore function.',
      'Use the create function.',
      'Use the define function.',
      'Use the make function.',
      'Use the set function.',
    ],
    timeToAnswer: 30,
    points: 4,
  },
  {
    id: 6,
    question: 'What is the purpose of getters in Vue Pinia?',
    answer: [19],
    options: [
      'Getters modify the state.',
      'Getters retrieve values from the state.',
      'Getters compute values from the state.',
      'Getters compute and retrieve values from the state.',
      'Getters set values in the state.',
      'Getters delete values from the state.',
      'Getters create values in the state.',
    ],
    timeToAnswer: 40,
    points: 8,
  },
  {
    id: 7,
    question: 'How can you access the store in a Vue component?',
    answer: [5],
    options: [
      'Use the useStore function.',
      'Use the getFromStore function.',
      'Use the getStore function.',
      'Use the store function.',
      'Use the takeFromStore function.',
    ],
    timeToAnswer: 25,
    points: 4,
  },
  {
    id: 8,
    question: 'What are actions in Vue Pinia?',
    answer: [16],
    options: [
      'actions retrieve values from the state.',
      'actions are functions defined within a store that compute values from the state.',
      'actions are functions defined within a store that handle asynchronous or complex operations.',
      'actions are functions defined within a store that set values in the state.',
      'actions are functions defined within a store that delete values from the state.',
    ],
    timeToAnswer: 30,
    points: 7,
  },
  {
    id: 9,
    question: 'Can you have multiple stores in a Vue Pinia application?',
    answer: [9],
    options: [
      'No, Vue Pinia only supports a single store.',
      'Yes, Vue Pinia supports multiple stores, but only one store can be active at a time.',
      'No, Vue Pinia only supports a single store, and it must be active at all times.',
      'Yes, Vue Pinia supports multiple stores.',
      'Maybe, Vue Pinia supports multiple stores, but it is not recommended.',
      'No, Vue Pinia only supports a single store, but it can be deactivated.',
    ],
    timeToAnswer: 20,
    points: 5,
  },
  {
    id: 10,
    question: 'How does Vue Pinia handle asynchronous operations?',
    answer: [1],
    options: [
      'Vue Pinia uses mutations for asynchronous operations.',
      'Vue Pinia uses getters for asynchronous operations.',
      'Vue Pinia uses state for asynchronous operations.',
      'Vue Pinia uses plugins for asynchronous operations.',
      'Vue Pinia uses actions for asynchronous operations.',
      'Vue Pinia does not support asynchronous operations.',
    ],
    timeToAnswer: 30,
    points: 10,
  },
  {
    id: 11,
    question: 'What is the difference between Vue Pinia and Vuex?',
    answer: [9],
    options: [
      'Vue Pinia is more modular and type-safe, but does not support multiple stores.',
      'Vue Pinia is not modular and type-safe, and does not support multiple stores.',
      'Vue Pinia is not modular and type-safe, but supports multiple stores.',
      'Vue Pinia is more modular and type-safe, but it is not supported by Vue 3.',
      'There is no difference between Vue Pinia and Vuex.',
      'There are many differences between Vue Pinia and Vuex. It is not possible to list them all.',
      'Vue Pinia is more modular and type-safe, and supports multiple stores by design.',
    ],
    timeToAnswer: 60,
    points: 6,
  },
  {
    id: 12,
    question: 'How can you persist a Pinia state across page reloads in a Vue 3 application?',
    answer: [1],
    options: [
      'Use the pinia-key-value-store package.',
      'Use the pinia-keep-alive package.',
      'It is not possible to persist a Pinia state across page reloads.',
      'It os supported by Vue 3 out of the box.',
      'Use the pinia-plugin-persist package.',
      'Use the pinia-storage package.',
      'Use persist state.',
      'Use persist store.',
      'Use usePersist function.',
      'I don\'t know.',
      'I don\'t care.',
      'I have no idea.',
      'I haven\'t\' tried it yet.',
    ],
    timeToAnswer: 60,
    points: 10,
  },
  {
    id: 13,
    question: 'How do you create a reactive getter in a Pinia store that depends on multiple state properties?',
    answer: [5],
    options: [
      'You can create reactive getters using \'getters\' property.',
      'You can create reactive getters using \'createGetter\' function.',
      'You can create reactive getters using \'computeGetter\' function.',
      'You cant create reactive getters in Pinia stores.',
    ],
    timeToAnswer: 40,
    points: 8,
  },
  {
    id: 14,
    question: 'What is storeToRefs in Pinia, and how is it used in a Vue 3 component?',
    answer: [14],
    options: [
      'there is no such thing as \'storeToRefs\' in Pinia.',
      '\'storeToRefs\' is a utility function in Pinia that allows you to create local reactive references to your store\'s state or getters.',
      '\'storeToRefs\' is a variable in Pinia that allows you to store references to your store\'s state or getters.',
      '\'storeToRefs\' is a hook in Vue 3 that allows you to keep a reference to your store\'s reactive functions.',
    ],
    timeToAnswer: 40,
    points: 7,
  },
  {
    id: 15,
    question: 'How do you use the patch method in a Pinia store, and what are its advantages?',
    answer: [1],
    options: [
      'The patch method in Pinia allows you to send post requests to the server.',
      'The patch method in Pinia allows you to send patch requests to the server.',
      'The patch method in Pinia allows you to send get requests to the server.',
      'The patch method in Pinia allows you to send put requests to the server.',
      'The patch method in Pinia allows you to apply multiple changes to the store\'s state in a single operation.',
      'The patch method in Pinia allows you to apply asynchronous changes to the store\'s state in a multiple operations.',
      'The patch method does not exist in Pinia.',
      'I don\'t use the patch method in Pinia.',
    ],
    timeToAnswer: 60,
    points: 9,
  },
];