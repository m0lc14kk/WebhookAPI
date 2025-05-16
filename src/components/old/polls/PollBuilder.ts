import { IPollAnswerStructure } from "./interfaces/IPollAnswerStructure"

const MAX_POLL_DURATION: number = 32 * 24

class PollBuilder {
    private question: string | null = null
    private duration: number = 24
    private allowMultiselect: boolean = false
    private answers: IPollAnswerStructure[] = []

    public constructor() {}

    public setQuestion(question: string): PollBuilder {
        this.question = question
        return this
    }

    public setDuration(duration: number): PollBuilder {
        if (duration < 1 || duration > MAX_POLL_DURATION) throw new Error("DataError: Too long duration of a poll. Poll cannot be open for more than 32 days.")
        this.duration = duration
        return this
    }

    public setAllowMultiselect(allowMultiselect: boolean): PollBuilder {
        this.allowMultiselect = allowMultiselect
        return this
    }

    public setAnswers(...answers: IPollAnswerStructure[]): PollBuilder {
        this.answers = answers
        return this
    }

    public addAnswers(...answers: IPollAnswerStructure[]): PollBuilder {
        this.answers.push(...answers)
        return this
    }

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

export { PollBuilder }
