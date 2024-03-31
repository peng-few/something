import { InputNumber, Form } from "antd"
import addComma from "./utils/addComma"
import styled from "@emotion/styled"

const StyleFormItem = styled(Form.Item)({
  ".ant-form-item-extra": {
    textAlign: "right",
    fontSize: "0.75rem",
  },
  ".ant-input-number-group-addon": {
    fontSize: "0.75rem",
  },
})

export function PriceInput(props) {
  return (
    <StyleFormItem
      label="入住費用(每人每晚)"
      rules={[{ required: true, message: "不可以為空白" }]}
      className="w-[300px]"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      labelAlign="left"
      extra="輸入0表示免費"
      {...props}
    >
      <InputNumber
        size="large"
        addonBefore="TWD"
        className="w-full"
        defaultValue="0"
        min="0"
        formatter={addComma}
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        stringMode
        placeholder="請輸入費用"
      />
    </StyleFormItem>
  )
}

export default PriceInput
