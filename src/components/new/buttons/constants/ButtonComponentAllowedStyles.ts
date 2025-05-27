import { ButtonStyle } from "./ButtonStyle"

/**
 * Set of allowed styles for buttons.
 */
const BUTTON_COMPONENT_ALLOWED_STYLES: Readonly<Set<ButtonStyle>> = new Set<ButtonStyle>([ButtonStyle.PRIMARY, ButtonStyle.SECONDARY, ButtonStyle.SUCCESS, ButtonStyle.DANGER])

export { BUTTON_COMPONENT_ALLOWED_STYLES }
