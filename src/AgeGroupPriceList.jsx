import { Form, Button } from "antd"
import PriceInput from "./PriceInput"
import AgeGroupSelect from "./AgeGroupSelect"
import React, { useState } from "react"
import getNumberIntervals from "./utils/getNumberIntervals"

const defaultField = { price: "0", ageGroup: [0, 20] }
export function AgeGroupPriceList({ onChange }) {
  const [form] = Form.useForm()
  const [ageGroupCheck, setAgeGroupCheck] = useState({
    errorList: [],
    isFull: false,
  })

  function valueChange(_, form) {
    onChange?.(form.list)
  }

  function fieldChange(field) {
    if (field[0].name.slice(-1)[0] === "ageGroup") checkAgeGroup()
  }

  function checkAgeGroup() {
    const formValues = form.getFieldValue("list")
    const ageGroup = formValues.map((item) => item.ageGroup)
    const { overlap, notInclude } = getNumberIntervals(ageGroup)
    const errorList = ageGroup.map(([start, end]) => {
      const isOverlay = !!overlap.find(
        ([value]) => value >= start && value <= end
      )
      return isOverlay ? "年齡區間不可重疊" : ""
    })
    setAgeGroupCheck({ errorList, isFull: notInclude.length === 0 })
  }

  function addField() {
    form.setFieldValue("list", [...form.getFieldValue("list"), defaultField])
    checkAgeGroup()
  }

  function removeField(remove, field) {
    remove(field.name)
    checkAgeGroup()
  }

  return (
    <Form
      className="inline-block"
      form={form}
      name="ageList"
      onValuesChange={valueChange}
      onFieldsChange={fieldChange}
      initialValues={{ list: [defaultField] }}
      requiredMark={false}
    >
      <Form.List name="list">
        {(fields, { remove }) => (
          <div>
            {fields.map((field, idx) => (
              <React.Fragment key={field.key}>
                <p className="flex justify-between mt-6 font-bold">
                  價格設定 - {idx + 1}
                  {field.key !== 0 && (
                    <Button
                      type="text"
                      onClick={() => removeField(remove, field)}
                      danger
                      className="font-bold"
                    >
                      ⨉ 移除
                    </Button>
                  )}
                </p>
                <div key={field.key} className="flex gap-4">
                  <PriceInput name={[field.name, "price"]} />
                  <AgeGroupSelect
                    name={[field.name, "ageGroup"]}
                    errorMsg={ageGroupCheck.errorList[idx]}
                  />
                </div>
                <hr />
              </React.Fragment>
            ))}
            <div className="text-left">
              <Button
                type="text"
                onClick={addField}
                disabled={ageGroupCheck.isFull}
                className="text-emerald-500 font-bold mt-6"
              >
                +新增價格設定
              </Button>
            </div>
          </div>
        )}
      </Form.List>
    </Form>
  )
}

export default AgeGroupPriceList
