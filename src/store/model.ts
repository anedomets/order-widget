export interface State{
    mask : MaskModel
}

export interface ModalWindow{
    message: string | null,
    show: boolean
}

export interface MaskModel {
    modalWindow : ModalWindow | null
    loadMask : LoadMask | null
}

export interface LoadMask{
    show: boolean
}

export interface Currency {
    id : bigint
    currencyId : string
    numCode : string
    charCode : string
    nominal : bigint
    name : string
    value : string
    previous : string
}

export interface CurrencyRate {
    id : bigint
    date : string
    previousDate : string
    previousUrl : string
    timestamp : string
    createDate : string
    currencies : Array<Currency>
}

export interface Assignment {
    id : bigint
    fromUser : string
    toUser : string
    description : string
}
