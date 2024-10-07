import Image from "next/image"

type ButtonProps = {
  type: "button" | "submit"
  title: string
  icon?: string
  variant: string
}
const Button = ({ type, title, variant, icon }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>
      {icon && <Image alt="title" src={icon} width={0} height={0} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button
