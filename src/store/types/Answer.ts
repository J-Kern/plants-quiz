export type Answer = {
    id: {
      type: number,
      required: true
    },
    plantId: {
      type: number,
      required: true
    },
    answerTries: {
      type: Array<string>,
      required: true
    },
    isAnswered: {
      type: boolean,
      required: true
    },
}