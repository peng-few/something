import { Select, Form } from "antd"
import styled from "@emotion/styled"

const ageOptions = Array.from({ length: 21 }, (_, index) => index)

const StyleStartSelect = styled(Select)({
  "&.ant-select-lg .ant-select-selector": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
})

const StyleEndSelect = styled(Select)({
  "&.ant-select-lg .ant-select-selector": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
})

export function AgeGroupSelectDetail({ value = [], onChange }) {
  const [startAge, endAge] = value

  function setStartAge(nextStartAge) {
    onChange?.([nextStartAge, endAge])
  }
  function setEndAge(nextEndAge) {
    onChange?.([startAge, nextEndAge])
  }

  return (
    <div className="flex">
      <StyleStartSelect
        value={startAge}
        onChange={setStartAge}
        size="large"
        defaultValue={0}
      >
        {ageOptions.map((value) => (
          <Select.Option key={value} value={value} disabled={value > endAge}>
            {value}
          </Select.Option>
        ))}
      </StyleStartSelect>
      <div className="px-3 text-lg bg-[#00000005] border border-[#d9d9d9] flex items-center ">
        ~
      </div>
      <StyleEndSelect
        value={endAge}
        onChange={setEndAge}
        className="rounded-tl-none rounded-bl-none"
        size="large"
        defaultValue={20}
      >
        {ageOptions.map((value) => (
          <Select.Option key={value} value={value} disabled={value < startAge}>
            {value}
          </Select.Option>
        ))}
      </StyleEndSelect>
    </div>
  )
}
export function AgeGroupSelect({ errorMsg, ...props }) {
  const isError = !!errorMsg

  return (
    <Form.Item
      className="w-[300px]"
      label="年齡"
      name="aageGroup"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      labelAlign="left"
      validateStatus={isError ? "error" : "success"}
      help={errorMsg}
      {...props}
    >
      <AgeGroupSelectDetail />
    </Form.Item>
  )
}

export default AgeGroupSelect
