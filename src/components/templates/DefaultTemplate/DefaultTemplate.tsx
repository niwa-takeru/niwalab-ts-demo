import * as React from "react"

type DefaultTemplateProps = {
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = (props) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default DefaultTemplate
