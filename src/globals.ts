/**
 * Max decimal color of a HEX.
 * @readonly
 */
const MAX_COLOR_NUMBER: Readonly<number> = Math.pow(256, 3) - 1

/**
 * Max length of a custom identifier of components.
 * @readonly
 */
const MAX_CUSTOM_ID_LENGTH: Readonly<number> = 100

/**
 * Max length of a button's label.
 * @readonly
 */
const MAX_BUTTON_LABEL_LENGTH: Readonly<number> = 80

/**
 * Max length of a placeholder in a select menu.
 * @readonly
 */
const MAX_SELECT_MENU_PLACEHOLDER_LENGTH: Readonly<number> = 150

/**
 * Max number of options in a string select menu.
 * @readonly
 * @remarks This global variable is also used for maximum default options in other select menus.
 */
const MAX_SELECT_MENU_OPTIONS: Readonly<number> = 25

/**
 * Max length of a content.
 * @readonly
 */
const MAX_CONTENT_LENGTH: Readonly<number> = 4000

export { MAX_COLOR_NUMBER, MAX_CUSTOM_ID_LENGTH, MAX_BUTTON_LABEL_LENGTH, MAX_SELECT_MENU_PLACEHOLDER_LENGTH, MAX_SELECT_MENU_OPTIONS, MAX_CONTENT_LENGTH }
