import { ConfigProvider } from "antd"
import AgeGroupPriceList from "./AgeGroupPriceList"

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelColor: "#6b717b",
              labelFontSize: "0.75rem",
              verticalLabelPadding: 0,
              style: {
                background: "rgba(0, 0, 0, 0.02)",
                border: "1px solid #d9d9d9",
              },
            },
          },
        }}
      >
        <div className="text-center m-auto">
          <AgeGroupPriceList onChange={(result) => console.log(result)} />
        </div>
      </ConfigProvider>
    </div>
  )
}

export default App
