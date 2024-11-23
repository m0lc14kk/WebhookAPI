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
        answer: "API should work as long as you have @minecraft/server-net module and script API's on your server's world activate. From my research - it should work without any issues down to 1.20. Older versions were not checked, but they should work aswell."
    },
    {
        question: "What enviroments (worlds, Realms etc.) are supported by add-on?",
        answer: "Currently, only BDS (Bedrock Dedicated Server) is supported, by we might pull out some universal solution to world/Realms."
    },
    {
        question: "Am I forced to use TypeScript by using this API?",
        answer: "No, you can also use JavaScript distribution, which is under scripts folder."
    }
];

export { aboutQuestions };