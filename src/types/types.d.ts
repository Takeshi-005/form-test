declare interface Window {
  formsObject: {
    link?: {
      href?: string
      text?: string
    }
    name?: string // inputの名前
    label: string  // ラベル名
    placeholder?: string
    type?: "text" | "select" | "radio" | "checkbox" | "email" | "link"
    options?: {
      label: string
      value: string
    }[]
    size?: "half" | "full",
    required?: boolean
    validation?: "tel" | "email"
    note?: string
    title?: string
  }[][]
  submitText?: string
}
