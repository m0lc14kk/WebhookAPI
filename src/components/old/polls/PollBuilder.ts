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
     */
    public setQuestion(question: string): PollBuilder {
        if (question.length > 300) throw new Error("DataError: Question cannot exceed 300 characters.")
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
        if (duration < 1 || duration > MAX_POLL_DURATION) throw new Error("DataError: Too long duration of a poll. Poll cannot be open for more than 32 days.")
        this.duration = duration
        return this
    }

    /**
     * Sets a possibility to multi-select.
     * @param allowMultiselect Possibility to select multiple answers.
     * @return Edited instance.
     */
    public setAllowMultiselect(allowMultiselect: boolean): this {
        this.allowMultiselect = allowMultiselect
        return this
    }

    /**
     * Sets answers of a poll.
     * @param answers Answers of a poll.
     * @returns Edited instance.
     */
    public setAnswers(...answers: IPollAnswerStructure[]): this {
        for (const { text } of answers) {
            if (text.length > 55) throw new Error("DataError: Answer's text cannot exceed 55 characters!")
        }

        this.answers = answers
        return this
    }

    /**
     * Adds answers to a poll.
     * @param answers New answers of a poll.
     * @returns Edited instance.
     */
    public addAnswers(...answers: IPollAnswerStructure[]): this {
        for (const { text } of answers) {
            if (text.length > 55) throw new Error("DataError: Answer's text cannot exceed 55 characters!")
        }

        this.answers.push(...answers)
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.question === null) throw new Error("DataError: You must provide a question before creating a poll.")

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
