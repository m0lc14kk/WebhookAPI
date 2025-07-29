import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"
import { cwd } from "process"

const buildSourceFile: string = join(cwd(), "dist", "index.mjs")

if (existsSync(buildSourceFile)) {
    const fileContent: string = readFileSync(buildSourceFile, "utf-8")
    const lines: string[] = fileContent.split("\n")
    writeFileSync(buildSourceFile, lines.filter((line: string) => !line.trim().startsWith("// src/")).join("\n"))
}
