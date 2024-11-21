import type { QuestionComponentType } from "../components/pages/about/types/QuestionComponentType";

const aboutQuestions: QuestionComponentType[] = [
    {
        question: "Is this project fully open-source?",
        answer: "Yes, it's fully open-source, with some soft licence."
    },
    {
        question: "Can I fork and publish my version?",
        answer: "Yes, you can, just include me (@m0lc14kk) in one of the contributors and mention it's a fork of my original API."
    },
    {
        question: "What version/versions are supported?",
        answer: "API should work as long as you have @minecraft/server-net module and script API's on your server's world activate. In general - it should work on most of versions above 1.19.x"
    }
];

export { aboutQuestions };