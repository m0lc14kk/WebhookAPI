import { MAX_POLL_ANSWER_LENGTH } from "./constants/MaxPollAnswerLength"
import { MAX_POLL_QUESTION_LENGTH } from "./constants/MaxPollQuestionLength"
import type { IPollAnswerStructure } from "./interfaces/IPollAnswerStructure"

const MAX_POLL_DURATION: Readonly<number> = 32 * 24

class PollBuilder {
    private question: string | null = null
    private duration: number = 24
    private allowMultiselect: boolean = false
    private answers: IPollAnswerStructure[] = []

    public constructor() {}

    /**
     * Sets a question of a poll.
     * @param question Question of a poll.
     * @returns Edited instance.
     * @throws Throws an error, if question is invalid.
     */
    public setQuestion(question: string): PollBuilder {
        if (typeof question !== "string") throw new Error("DataError: Poll's question must be a string.")
        if (question.length > MAX_POLL_QUESTION_LENGTH) throw new Error(`DataError: Question cannot exceed ${MAX_POLL_ANSWER_LENGTH} characters.`)
        this.question = question
        return this
    }

    /**
     * Sets a duration of a poll.
     * @param duration Duration of a poll in hours.
     * @remarks Duration cannot be longer than `MAX_POLL_DURATION` global.
     * @throws Throws an error if duration is not in bounds [0; `MAX_POLL_DURATION`]
     * @returns Edited instance.
     */
    public setDuration(duration: number): this {
        if (typeof duration !== "number" || Number.isNaN(duration) || !Number.isInteger(duration)) throw new TypeError("TypeError: You must provide poll's duration as a unsigned integer.")
        if (duration < 1 || duration > MAX_POLL_DURATION) throw new Error("DataError: Too long duration of a poll. Poll cannot be open for more than 32 days.")
        this.duration = duration
        return this
    }

    /**
     * Sets a possibility to multi-select.
     * @param allowMultiselect Possibility to select multiple answers.
     * @return Edited instance.
     * @throws Throws an error, if allow multi-select argument is invalid.
     */
    public setAllowMultiselect(allowMultiselect: boolean): this {
        if (typeof allowMultiselect !== "boolean") throw new TypeError("TypeError: Poll's auto multi-select mode must be a boolean.")
        this.allowMultiselect = allowMultiselect
        return this
    }

    /**
     * Sets answers of a poll.
     * @param answers Answers of a poll.
     * @returns Edited instance.
     * @throws Throws an error, if one of answers is invalid.
     */
    public setAnswers(...answers: IPollAnswerStructure[]): this {
        this.validateAnswers(answers)
        this.answers = answers
        return this
    }

    /**
     * Adds answers to a poll.
     * @param answers New answers of a poll.
     * @returns Edited instance.
     * @throws Throws an error, if one of answers is invalid.
     */
    public addAnswers(...answers: IPollAnswerStructure[]): this {
        this.validateAnswers(answers)
        this.answers.push(...answers)
        return this
    }

    private validateAnswers(answers: IPollAnswerStructure[]) {
        for (const { text } of answers) {
            if (typeof text !== "string") throw new TypeError("TypeError: Poll's answer must be a string!")
            if (text.length > MAX_POLL_ANSWER_LENGTH) throw new Error("DataError: Answer's text cannot exceed 55 characters!")
        }
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.question === null) throw new Error("DataError: You must provide a question before creating a poll.")
        if (this.answers.length === 0) throw new Error("DataError: You must provide at least 1 answer of a poll.")

        return {
            question: {
                text: this.question,
            },
            duration: this.duration,
            allow_multiselect: this.allowMultiselect,
            answers: this.answers.map(({ text, emoji }: IPollAnswerStructure) => ({
                poll_media: {
                    text,
                    emoji:
                        typeof emoji === "string"
                            ? {
                                  name: emoji,
                              }
                            : emoji,
                },
            })),
        }
    }
}

export { PollBuilder, MAX_POLL_DURATION }
