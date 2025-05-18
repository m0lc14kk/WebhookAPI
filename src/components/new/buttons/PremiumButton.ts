import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { ButtonStyle } from "./constants/ButtonStyle"

class PremiumButton extends Component {
    public static override readonly type: ComponentType = ComponentType.BUTTON
    private readonly style: ButtonStyle.PREMIUM = ButtonStyle.PREMIUM
    private skuId: string | null = null

    /**
     * Sets an identifier of a shop item on button.
     * @param skuId Identifier of a shop item.
     * @returns Edited instance.
     */
    public setSkuId(skuId: string): PremiumButton {
        this.skuId = skuId
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.skuId === null) throw new Error("DataError: You have to provide SKU ID before creating a premium button.")

        return {
            type: PremiumButton.type,
            style: this.style,
            sku_id: this.skuId,
        }
    }
}

export { PremiumButton }
