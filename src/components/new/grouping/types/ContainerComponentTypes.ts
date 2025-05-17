import { SeparatorComponent } from "../../display/SeparatorComponent"
import { TextDisplayComponent } from "../../display/TextDisplayComponent"
import { FileComponent } from "../../media/FileComponent"
import { MediaGalleryComponent } from "../../media/MediaGalleryComponent"
import { ActionRowComponent } from "../ActionRowComponent"

type ContainerComponentTypes = ActionRowComponent | TextDisplayComponent | MediaGalleryComponent | FileComponent | SeparatorComponent

export type { ContainerComponentTypes }
