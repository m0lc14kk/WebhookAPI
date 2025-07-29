/* eslint-disable no-unused-vars */

/**
 * Component types.
 */
enum ComponentType {
    /**
     * Action row element for grouping other components.
     * @remarks Check class `ActionRowComponent` for more details.
     */
    ACTION_ROW = 1,

    /**
     * Button component.
     * @remarks Check classes `ButtonComponent`, `LinkButtonComponent` and `PremiumButtonComponent` for more details.
     */
    BUTTON = 2,

    /**
     * String select menu component.
     * @remarks Check class `StringSelectMenuComponent` for more details.
     */
    STRING_SELECT = 3,

    /**
     * User select menu component.
     * @remarks Check class `UserSelectMenuComponent` for more details.
     */
    USER_SELECT = 5,

    /**
     * Role select menu component.
     * @remarks Check class `RoleSelectMenuComponent` for more details.
     */
    ROLE_SELECT = 6,

    /**
     * Mentionable select menu component.
     * @remarks Check class `MentionableSelectMenuComponent` for more details.
     */
    MENTIONABLE_SELECT = 7,

    /**
     * Channel select menu component.
     * @remarks Check class `ChannelSelectMenuComponent` for more details.
     */
    CHANNEL_SELECT = 8,

    /**
     * Section component for grouping elements (texts, images and thumbnails).
     * @remarks Check class `SectionComponent` for more details.
     */
    SECTION = 9,

    /**
     * Text display component, which is just Markdown text.
     * @remarks Check class `TextDisplayComponent` for more details.
     */
    TEXT_DISPLAY = 10,

    /**
     * Thumbnail component for sections, containers etc.
     * @remarks Check class `ThumbnailComponent` for more details.
     */
    THUMBNAIL = 11,

    /**
     * Media gallery component, which might include lots of media.
     * @remarks Check class `MediaGalleryComponent` for more details.
     */
    MEDIA_GALERY = 12,

    /**
     * File component.
     * @remarks Check class `FileComponent` for more details.
     */
    FILE = 13,

    /**
     * Separator component, to separate sections or other elements in a nice style.
     * @remarks Check class `SeparatorComponent` for more details.
     */
    SEPARATOR = 14,

    /**
     * Container component, to group lots of elements in a old-fashioned embed way.
     * @remarks Check class `ContainerComponent` for more details.
     */
    CONTAINER = 17,
}

export { ComponentType }
