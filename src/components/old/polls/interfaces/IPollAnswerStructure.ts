interface IPollAnswerStructure {
    text: string
    emoji: string | ({
        id: string
        name?: string
    } | {
        id?: string
        name: string
    })
}

export type { IPollAnswerStructure }