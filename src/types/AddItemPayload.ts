import Items from "types/Items.ts";

export type addItemPayload = {
    key: keyof Items,
    amount: number
}