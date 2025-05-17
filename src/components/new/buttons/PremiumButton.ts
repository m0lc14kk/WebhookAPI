import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { ButtonStyle } from "./constants/ButtonStyle"

class PremiumButton extends Component {
    public static override readonly type: ComponentType = ComponentType.BUTTON
    private readonly style: ButtonStyle.PREMIUM = ButtonStyle.PREMIUM
    private skuId: string | null = null

    public setSkuId(skuId: string): PremiumButton {
        this.skuId = skuId
        return this
    }

    public toJSON() {
        if (this.skuId === null) throw new Error("DataError: You have to provide SKU ID before creating a premium button.")

        return {
            type: PremiumButton.type,
            style: this.style,
            sku_id: this.skuId,
        }
    }
}

export { PremiumButton }
